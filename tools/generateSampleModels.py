#!/usr/bin/env python
import glob
from subprocess import call
import sys
import os

target = '2.0'
if len(sys.argv) > 1:
    target = sys.argv[1]

scriptDirectory = os.path.dirname(os.path.realpath(sys.argv[0]))

collada2gltf = None
for f in glob.glob(os.path.join(scriptDirectory, '*[cC][oO][lL][lL][aA][dD][aA]2[gG][lL][tT][fF]*')):
    collada2gltf = f
    break

if collada2gltf is None:
    print('Error: Couldn\'t find COLLADA2GLTF executable')
    sys.exit(1);

sourceModelsDirectory = os.path.join(scriptDirectory, '../sourceModels')
variantFlags = {
    '' : ['-s'],
    '-Embedded' : [],
    '-Binary' : ['-b', '-s'],
    '-MaterialsCommon' : ['-m', '-s'],
    '-pbrSpecularGlossiness' : ['--specularGlossiness', '-s'],
    '-techniqueWebGL' : ['-g', '-s']
}

for model in os.listdir(sourceModelsDirectory):
    colladaFile = None
    for f in glob.glob(os.path.join(sourceModelsDirectory, model + '/*.dae')):
        colladaFile = os.path.relpath(f)
        break

    if colladaFile is None:
        continue

    outputPath = os.path.relpath(os.path.join(scriptDirectory, '../' + target + '/' + model + '/'))

    for variant in variantFlags:
        flags = variantFlags[variant]
        call([collada2gltf, '-i', colladaFile, '-o', os.path.join(outputPath, 'glTF' + variant, model + '.gltf')] + flags)
