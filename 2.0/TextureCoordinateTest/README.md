# Texture Coordinate Test

## Screenshot

![screenshot](screenshot/screenshot.png)

## Description

This model demonstrates the orientation of texture coordinates.  The materials and accessors have all been named according to function.  In particular, the last accessor is named `TopLeft_TEXCOORD_0`, and shows that the upper-left portion of the texture image is represented by texture coordinates ranging from `0.0` to roughly `0.4`.

```
{
    "bufferView": 2,
    "byteOffset": 32,
    "componentType": 5126,
    "count": 4,
    "max": [
        0.3999999165534973,
        0.3999999761581421
    ],
    "min": [
        0.0,
        0.0
    ],
    "type": "VEC2",
    "name": "TopLeft_TEXCOORD_0"
}
```

Looking at the POSITION attributes min/max, you can see that the left side is +X, the top is +Y, the back plane is +Z (facing away from the default camera), and the default camera sits on the -Z side looking toward the origin with +Y up.  The "front" of the model faces -Z, and this is reflected in the NORMAL accessors of all except the back plane.

Here is a modified copy of these values, with small epsilons rounded off just for clarity.  The "TopLeft" positions are all positive, and their normal is -Z.

```
{
    "max": [
        0.0,
        0.0,
        -1.0
    ],
    "min": [
        0.0,
        0.0,
        -1.0
    ],
    "type": "VEC3",
    "name": "TopLeft_NORMAL"
},
{
    "max": [
        1.2,
        1.2,
        0.0
    ],
    "min": [
        0.2,
        0.2,
        0.0
    ],
    "type": "VEC3",
    "name": "TopLeft_POSITION"
}
```

## License Information

Copyright 2017 Analytical Graphics, Inc.
CC-BY 4.0 https://creativecommons.org/licenses/by/4.0/
Model and textures by Ed Mackey.
