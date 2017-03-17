'use strict';

const fs = require('mz/fs'),
    libpath = require('path'),
    Validator = require('jsonschema').Validator;

var schemaPath = libpath.resolve(__dirname, '../glTF/specification/2.0/schema');

var v = new Validator();

function err(e){
    console.error('Error:', e);
}

// read the schema directory
fs.readdir(schemaPath)
.catch(err)
.then(files => {
    // take only the json files from that directory
    files = files.filter(f => /\.json$/.test(f));
    return Promise.all(
        // and read them
        files.map(f => fs.readFile( libpath.join(schemaPath, f) ) )
    )
    .catch(err)
    .then(filesContents => {
        // pair file names with file contents
        let mapping = {};
        files.forEach((file, i) => {
            try {
                file = '/'+file;
                mapping[file] = JSON.parse(filesContents[i]);
                mapping[file].id = file;
            }
            catch(e){
                console.error('Error parsing', file, filesContents[i]);
            }
        });
        return Promise.resolve(mapping);
    });
})
.catch(err)
.then(mapping => {
    // then apply those name/schema pairs to the validator
    v.addSchema(mapping['/glTF.schema.json'], '/glTF.schema.json');
    while(v.unresolvedRefs.length > 0){
        let ref = v.unresolvedRefs.shift();
        console.log('adding', ref);
        v.addSchema(mapping[ref], ref);
        //console.log('remaining', v.unresolvedRefs);
    }

    // load the file to test
    return fs.readFile( libpath.resolve(__dirname, process.argv[process.argv.length-1]) );
})
.catch(err)
// parse the given file
.then(file => Promise.resolve(JSON.parse(file)))
.catch(err)
// validate it
.then(json => {
    let result = v.validate(json, v.schemas['/glTF.schema.json'], {nestedErrors: true});
    console.log('Validation passed');
})
.catch(err);
