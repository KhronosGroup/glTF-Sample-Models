# Texture Transform Test

## Screenshot

![screenshot](screenshot/screenshot.jpg)

## Description

This model demonstrates the usage of the KHR_texture_transform extension. There are six quads in this model using two main textures.

UV  
<img src="glTF/UV.png" height="172" height="172" />

Arrow  
<img src="glTF/Arrow.png" height="86" height="86" />

Note: Both textures have a gray border and use a sampler that clamps and disables mipmapping.

### Offsets

The top row tests different combinations of the offset parameter with UV coordinates of `(0.0, 0.0)` to `(0.5, 0.5)` and offsets of `(0.5, 0.0)`, `(0.0, 0.5)`, and `(0.5, 0.5)` respectively from left to right, using the UV texture. A yellow image indicates that offset was not applied.

### Rotation

The bottom left quad tests the rotation parameter with UV coordinates of `(0.0, 0.0)` to `(1.0, 1.0)` and a rotation angle of `‪0.392699‬` radians or `22.5` degrees, using the arrow texture. The green marker indicates the correct rotation. The yellow marker indicates the rotation was not applied. The red marker indicates the rotation was applied in the opposite direction.

### Scale

The bottom middle quad tests the scale parameter with UV coordinates of `(0.0, 0.0)` to `(1.0, 1.0)` and a scale of `1.5`, using the arrow texture. The green marker indicates the correct scale. The yellow marker indicates the scale was not applied.

### All

The bottom right quad tests offset, rotation, and scale at the same time. If everything is supported correctly, the arrow should point to the green marker.

## License Information

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)  
To the extent possible under law, Microsoft has waived all copyright and related or neighboring rights to this asset.
