# SimpleInstancing

A simple example for the `EXT_mesh_gpu_instancing` extension.

## Screenshot

![screenshot](screenshot/screenshot_large.png)

## Data

The sample contains a single mesh, with a single mesh primitive of a unit cube. The node that contains this mesh defines the `EXT_mesh_gpu_instancing` extension object:
```
"extensions" : {
    "EXT_mesh_gpu_instancing" : {
        "attributes" : {
          "TRANSLATION" : 3,
          "ROTATION" : 4,
          "SCALE" : 5
        }
    }
}
```
The object refers to three accessors: One for the `TRANSLATION`, one for the `ROTATION`, and one for the `SCALE` of the instances. The data from these accessors causes 125 instances to be rendered. These instances are arranged in a 5x5x5 cube.

- The translation ranges from 0.0 to 10.0 along each axis
- The rotation ranges from 0.0 to 90.0 degrees along each axis
- The scale ranges from 1.0 to 2.0 along each axis

This means that the first instance that is rendered is the unmodified unit cube, and the last instance is a cube at (10.,10.0,10.0) that is rotated around the axis (1.0,1.0,1.0) by 90.0 degrees, and scaled by (2.0, 2.0, 2.0).

## License Information

Public domain ([CC0](https://creativecommons.org/publicdomain/zero/1.0/))

