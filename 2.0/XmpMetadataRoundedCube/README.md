# KHR_xmp_json_ld Metadata Example - Rounded Cube

## Sample XMP JSON

```json
{
  "extensionsUsed": ["KHR_xmp_json_ld"],
  "extensions": {
    "KHR_xmp_json_ld": {
      "packets": [
        {
          "@context": {
            "dc": "http://purl.org/dc/elements/1.1/",
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          },
          "@id": "",
          "dc:contributor": {
            "@set": [
              "Creator1Name",
              "Creator2Email@email.com",
              "Creator3Name<Email@email.com>"
            ]
          },
          "dc:coverage": "Bay Area, California, United States",
          "dc:creator": {
            "@list": ["CreatorName", "CreatorEmail@email.com"]
          },
          "dc:date": {
            "@list": ["2019-05-16T19:20:30+01:00"]
          },
          "dc:description": {
            "@type": "rdf:Alt",
            "rdf:_1": {
              "@language": "en-us",
              "@value": "An example of a glTF file with XMP metadata in it"
            }
          },
          "dc:format": "model/gltf+json",
          "dc:language": {
            "@set": ["en"]
          },
          "dc:publisher": {
            "@set": ["Khronos"]
          },
          "dc:title": {
            "@type": "rdf:Alt",
            "rdf:_1": {
              "@language": "en-us",
              "@value": "Sample glTF with XMP metadata"
            }
          }
        },
        {
          "@context": {
            "dc": "http://purl.org/dc/elements/1.1/",
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          },
          "dc:title": {
            "@type": "rdf:Alt",
            "rdf:_1": {
              "@language": "en-us",
              "@value": "My Cube Mesh"
            }
          }
        }
      ]
    }
  },
  ...
}
```

## License Information

This model is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
