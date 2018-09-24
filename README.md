<p align="center">
<img src="https://raw.githubusercontent.com/KhronosGroup/glTF/master/specification/figures/gltf.png">
</p>

# glTF Sample Models

[![Build Status](https://travis-ci.org/KhronosGroup/glTF-Sample-Models.svg?branch=master)](https://travis-ci.org/KhronosGroup/glTF-Sample-Models)

- [glTF 1.0](1.0)
- [glTF 2.0](2.0)

Sample glTF 2.0 models are provided in as many of the following formats as possible:
* glTF (.gltf) with separate resources: .bin (geometry, animation, skins), .glsl (shaders), and image files
* glTF (.gltf) with embedded resources
* Binary glTF (.glb) using the [binary container format](https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#glb-file-format-specification)
* glTF (.gltf) using the [KHR_materials_pbrSpecularGlossiness](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness) extension
* Original COLLADA (.dae) or other source format

See the `README.md` in each model's directory for usage restrictions.

Sample models help the glTF ecosystem, if you are able to contribute a model, see the [contributing section](#contributing-sample-models) below.

## Model Publishing Services with glTF Download Capability

* [Sketchfab](https://sketchfab.com/features/gltf) offers auto-conversion of all of its downloadable models, including PBR models, to glTF format.
* [Microsoft's Remix3D](https://www.remix3d.com/) can download 3D models into Paint3D, which offers a "Save As GLB" export (GLB is the binary form of glTF).
* [Google's Poly](https://poly.google.com/) offers certain 3D assets for download in glTF format.

## Other glTF Models

For addition glTF models, see:

* Cesium's [demo models](https://github.com/AnalyticalGraphicsInc/cesium/tree/master/Apps/SampleData/models) and [unit test models](https://github.com/AnalyticalGraphicsInc/cesium/tree/master/Specs/Data/Models).
* Flightradar24's [GitHub repo](https://github.com/kalmykov/fr24-3d-models) of aircrafts.
* [Kenney • Assets](https://kenney.nl/assets?q=3d) hundreds of themed low-poly assets (nature, space, castle, furniture, etc.) provided by Kenney under CC0 licenses.
   * [30+ pirate themed models](https://kenney.nl/assets/pirate-kit) by Kenney under CC0 license.

## Contributing Sample Models

We appreciate sample model contributions; they help ensure a consistent glTF ecosystem.

To contribute a model, open a pull request with:
* A new subdirectory containing
   * The model in as many glTF variations as possible (using the same directory structure as the others ([example](1.0/Box))).  Tools for converting to glTF are [here](https://github.com/KhronosGroup/glTF#converters).
   * A README.md with any usage restrictions.
* Add the new model to the appropriate table.

If you have any questions, submit an [issue](https://github.com/KhronosGroup/glTF-Sample-Models/issues).
