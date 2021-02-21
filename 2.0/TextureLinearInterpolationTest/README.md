# Texture Linear Interpolation Test

## Screenshot

![screenshot](screenshot/screenshot.png)

## Description

This asset tests that linear texture interpolation is performed on linear values, i.e. after sRGB decoding. The test passes when two spheres are rendered with nearly the same color.

* The first (leftmost) sphere uses only JSON-stored emissive factor of `0.5` green.

* The second sphere samples its color as an interpolated value from a `2x1` texture. When interpolation happens after sRGB decoding, the final emissive value should also be about `0.5` green. An example of incorrect interpolation is shown below.

  ![incorrect](screenshot/incorrect.png)

## License Information

Public domain ([CC0](https://creativecommons.org/publicdomain/zero/1.0/))
