# Emissive Strength Test

## Screenshots

### Plain Rendering

![plain screenshot](screenshot/screenshot_large_plain.jpg)

### Render with Bloom Enabled

![screenshot with bloom](screenshot/screenshot_large_bloom.jpg)

These screenshots were rendered in BabylonJS with the default IBL strength dialed
down to help the glow stand out.  The second screenshot has a "Bloom" effect applied
using the BabylonJS Default Rendering Pipeline.

## Description

This model tests if the `KHR_materials_emissive_strength` extension is available in a
given implementation.  If it is not, the cubes will all emit the same shade of
light blue.  For implementations that support this extension, the cubes will be
progressively brighter to the right.

With a simple output mapping, the cube on the far right may appear as
plain white, due to all of its color components being clamped to the 1.0 upper limit.
If "bloom" effects are enabled, some cubes may appear to glow.  In a path-tracing
engine, all of these cubes may emit light, but the ones on the right should
emit substantially more light.

## License Information

Copyright 2022 Analytical Graphics, Inc.
CC-BY 4.0 https://creativecommons.org/licenses/by/4.0/
Model and textures by Ed Mackey.
