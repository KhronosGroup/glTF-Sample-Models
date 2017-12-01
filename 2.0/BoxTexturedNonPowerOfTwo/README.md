# Box Textured

This model uses a Non Power-Of-Two texture with REPEAT mode wrapping.  This is an edge case that is technically a valid gltf model, but needs some renderer work to resize the texture before uploading to the GPU.  According to the spec:

Non-Power-Of-Two Texture Implementation Note: glTF does not guarantee that a texture's dimensions are a power-of-two. At runtime, if a texture's width or height is not a power-of-two, the texture needs to be resized so its dimensions are powers-of-two if the sampler the texture references

## Screenshot

![screenshot](screenshot/screenshot.png)

## License Information

Donated by Cesium for glTF testing.  Please follow the [Cesium Trademark Terms and Conditions](https://github.com/AnalyticalGraphicsInc/cesium/wiki/CesiumTrademark.pdf).