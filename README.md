<p align="center">
<img src="https://raw.githubusercontent.com/KhronosGroup/glTF/master/specification/figures/gltf.png">
</p>

# glTF Sample Models

[![Build Status](https://travis-ci.org/KhronosGroup/glTF-Sample-Models.svg?branch=master)](https://travis-ci.org/KhronosGroup/glTF-Sample-Models)

- [glTF 1.0](1.0)
- [glTF 2.0](2.0)

Sample models are provided in as many of the following formats as possible:
* glTF (.gltf) with separate resources: .bin (geometry, animation, skins), .glsl (shaders), and image files
* glTF (.gltf) with embedded resources
* Binary glTF (.glb) using the [KHR_binary_glTF](https://github.com/KhronosGroup/glTF/blob/master/extensions/Khronos/KHR_binary_glTF/README.md) extension
* glTF (.gltf) using the [KHR_materials_common](https://github.com/KhronosGroup/glTF/blob/master/extensions/Khronos/KHR_materials_common/README.md) extension
* Original COLLADA (.dae) or other source format

See the `README.md` in each model's directory for usage restrictions.

Sample models help the glTF ecosystem, if you are able to contribute a model, see the [contributing section](#contributing-sample-models) below.

## Other glTF Sample Models

For addition glTF models, see:

* Cesium's [demo models](https://github.com/AnalyticalGraphicsInc/cesium/tree/master/Apps/SampleData/models) and [unit test models](https://github.com/AnalyticalGraphicsInc/cesium/tree/master/Specs/Data/Models).
* Flightradar24's [GitHub repo](https://github.com/kalmykov/fr24-3d-models) of aircrafts.
* Sketchfab's [glTF samples](https://sketchfab.com/features/gltf).

## Contributing Sample Models

We appreciate sample model contributions; they help ensure a consistent glTF ecosystem.

To contribute a model, open a pull request with:
* A new subdirectory containing
   * The model in as many glTF variations as possible (using the same directory structure as the others ([example](1.0/Box))).  Tools for converting to glTF are [here](https://github.com/KhronosGroup/glTF#converters).
   * A README.md with any usage restrictions.
* Add the new model to the appropriate table.

If you have any questions, submit an [issue](https://github.com/KhronosGroup/glTF-Sample-Models/issues).
