<p align="center">
<img src="2.0/glTF_RGB_June16.svg" height="100">
</p>

# glTF Sample Models

## Deprecating

**This repo has been ARCHIVED. All new Issues and Pull Requests should be filed in the new repo - [glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets).**

**All existing Issues have been addressed and closed. All existing PRs were either merged or closed. Closed PRs have an issue in the new repo. All questions, comments, or requests must be handled in the new repo.**

## Original README

[![glTF Validation](https://github.com/KhronosGroup/glTF-Sample-Models/workflows/glTF%20Validation/badge.svg?branch=master)](https://github.com/KhronosGroup/glTF-Sample-Models/actions)

- [glTF 1.0](1.0)
- [glTF 2.0](2.0) - See [the full list](2.0).

Sample glTF 2.0 models are provided in one or more of the following forms of glTF:

* glTF (`.gltf`) with separate resources: `.bin` (geometry, animation, skins) and `.jpg` or `.png` image files.  The supporting files are easily examined when separated like this, but must be kept together with the parent glTF file for the model to work.
* glTF (`.gltf`) with embedded resources (as Data URIs).  This form tends to be larger than the others, but Data URIs do have their uses.
* Binary glTF (`.glb`) using the [binary container format](https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#glb-file-format-specification).  These are easily shared due to the bundling of all the textures and mesh data into a single file.

See the `README.md` in each model's directory for license information.

Sample models help the glTF ecosystem, if you are able to contribute a model, see the [contributing section](#contributing-sample-models) below.

## Model Publishing Services with glTF Download Capability

* [Sketchfab](https://sketchfab.com/features/gltf) offers auto-conversion of all of its downloadable models, including PBR models, to glTF format.
* [Poimandres Market](https://market.pmnd.rs/) offers 3D assets for download in glTF format.
* [Poly Haven](https://polyhaven.com/) offers CC0 (public domain equivalent) HDRIs, PBR textures, and glTF models.

## Other glTF Models

For addition glTF models, see:

* [Khronos glTF Asset Generator](https://github.com/KhronosGroup/glTF-Asset-Generator) offers an extensive suite of test models to exercise each part of the glTF specification.
* Cesium's [demo models](https://github.com/AnalyticalGraphicsInc/cesium/tree/master/Apps/SampleData/models) and [unit test models](https://github.com/AnalyticalGraphicsInc/cesium/tree/master/Specs/Data/Models).
* Flightradar24's [GitHub repo](https://github.com/kalmykov/fr24-3d-models) of aircrafts.
* [Kenney • Assets](https://kenney.nl/assets?q=3d) hundreds of themed low-poly assets (nature, space, castle, furniture, etc.) provided by Kenney under CC0 licenses, including [30+ pirate themed models](https://kenney.nl/assets/pirate-kit).
* [Smithsonian open access 3D models](https://3d.si.edu/explore)

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
