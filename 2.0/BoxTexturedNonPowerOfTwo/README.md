# Box Textured

This model uses a Non Power-Of-Two texture with REPEAT mode wrapping.  This is an edge case that is technically a valid gltf model, but needs some renderer work to resize the texture before uploading to the GPU.  According to the spec:

glTF does not guarantee that a texture's dimensions are a power-of-two. At runtime, if a texture's width or height is not a power-of-two, it may have problems with certain wrapping or filtering modes.

See the Non-Power-Of-Two note at the bottom of the [Samplers section](https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#samplers) of the spec.

## Screenshot

![screenshot](screenshot/screenshot.png)

## License Information

Donated by Cesium for glTF testing.  Please follow the [Cesium Trademark Terms and Conditions](https://github.com/AnalyticalGraphicsInc/cesium/wiki/CesiumTrademark.pdf).

This model is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
