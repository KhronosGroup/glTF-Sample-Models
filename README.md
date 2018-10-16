<p align="center">
<img src="https://raw.githubusercontent.com/KhronosGroup/glTF/master/specification/figures/gltf.png">
</p>

# glTF Sample Models

[![Build Status](https://travis-ci.org/KhronosGroup/glTF-Sample-Models.svg?branch=master)](https://travis-ci.org/KhronosGroup/glTF-Sample-Models)

- [glTF 1.0](1.0)
- [glTF 2.0](2.0) - Click for full list.

Sample glTF 2.0 models are provided in one or more of the following forms of glTF:

* glTF (`.gltf`) with separate resources: `.bin` (geometry, animation, skins) and `.jpg` or `.png` image files.  The supporting files are easily examined when separated like this, but must be kept together with the parent glTF file for the model to work.
* glTF (`.gltf`) with embedded resources (as Data URIs).  This form tends to be larger than the others, but Data URIs do have their uses.
* Binary glTF (`.glb`) using the [binary container format](https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#glb-file-format-specification).  These are easily shared due to the bundling of all the textures and mesh data into a single file.
* glTF (`.gltf`) using the [KHR_materials_pbrSpecularGlossiness](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness) extension.  This is an alternate PBR (Physically Based Rendering) workflow that gives model artists an extra degree of freedom over glTF's core metallic/roughness PBR workflow.

See the `README.md` in each model's directory for license information.

Sample models help the glTF ecosystem, if you are able to contribute a model, see the [contributing section](#contributing-sample-models) below.

## Model Publishing Services with glTF Download Capability

* [Sketchfab](https://sketchfab.com/features/gltf) offers auto-conversion of all of its downloadable models, including PBR models, to glTF format.
* [Microsoft's Remix3D](https://www.remix3d.com/) can download 3D models into Paint3D, which offers a "Save As GLB" export (GLB is the binary form of glTF).
* [Google's Poly](https://poly.google.com/) offers certain 3D assets for download in glTF format.

## Other glTF Models

For addition glTF models, see:

* [Khronos glTF Asset Generator](https://github.com/KhronosGroup/glTF-Asset-Generator) offers an extensive suite of test models to excersise each part of the glTF specification.
* Cesium's [demo models](https://github.com/AnalyticalGraphicsInc/cesium/tree/master/Apps/SampleData/models) and [unit test models](https://github.com/AnalyticalGraphicsInc/cesium/tree/master/Specs/Data/Models).
* Flightradar24's [GitHub repo](https://github.com/kalmykov/fr24-3d-models) of aircrafts.
* [Kenney • Assets](https://kenney.nl/assets?q=3d) hundreds of themed low-poly assets (nature, space, castle, furniture, etc.) provided by Kenney under CC0 licenses, including [30+ pirate themed models](https://kenney.nl/assets/pirate-kit).

## Contributing Sample Models

We appreciate sample model contributions; they help ensure a consistent glTF ecosystem.

To contribute a model, open a pull request with:
* A new subdirectory containing
   * The model in as many glTF variations as reasonable (using the same directory structure as the others ([example](2.0/Box))). Tools for converting to glTF are [here](https://github.com/KhronosGroup/glTF#converters).
   * A screenshot of the model, stored in a subdirectory called `/screenshot`
   * A README.md with information about the model. As shown in [this example](https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/README.md), this file should at least include the following elements:
      * The name or title of the model
      * An embedding of the screenshot
      * Information about the license under which the model is published. We recommend to use a permissive license like [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) or even [Creative Commons 1.0 Universal Public Domain Dedication ](http://creativecommons.org/publicdomain/zero/1.0/), to allow people to share and adapt the models for their own use.    
* Add the new model to the appropriate table.

If you have any questions, submit an [issue](https://github.com/KhronosGroup/glTF-Sample-Models/issues).
