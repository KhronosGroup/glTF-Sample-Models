# glTF 2.0 Sample Models

## Simple models for testing individual features

| Model                                                  | Screenshot                                                      | Description|
|--------------------------------------------------------|-----------------------------------------------------------------|------------|
| [Triangle Without Indices](TriangleWithoutIndices)     | ![](TriangleWithoutIndices/screenshot/screenshot.png)           | The simplest possible glTF asset: A single `scene` with a single `node` and a single `mesh` with a single `mesh.primitive` with a single triangle with a single attribute, without indices and without a `material` |
| [Triangle](Triangle)                                   | ![](Triangle/screenshot/screenshot.png)                         | A very simple glTF asset: The basic structure is the same as in [Triangle Without Indices](TriangleWithoutIndices), but here, the `mesh.primitive` describes an *indexed* geometry
| [Animated Triangle](AnimatedTriangle)                  | ![](AnimatedTriangle/screenshot/screenshot.gif)                 | This sample is similar to the [Triangle](Triangle), but the `node` has a `rotation` property that is modified with a simple `animation` |
| [Animated Morph Cube](AnimatedMorphCube)               | ![](AnimatedMorphCube/screenshot/screenshot.gif)                | Demonstrates a simple cube with two simple morph targets and an animation that transitions between them both. |
| [Animated Morph Sphere](AnimatedMorphSphere)           | ![](AnimatedMorphSphere/screenshot/screenshot.gif)              | This sample is similar to the [Animated Morph Cube](AnimatedMorphCube), but the two morph targets move many more vertices and are more extreme than with the cube. |
| [Simple Meshes](SimpleMeshes)                          | ![](SimpleMeshes/screenshot/screenshot.png)                     | A simple `scene` with two `nodes`, both containing the same `mesh`, namely a `mesh` with a single `mesh.primitive` with a single indexed triangle with *multiple* attributes (positions, normals and texture coordinates), but without a `material` |
| [Cameras](Cameras)                                     | ![](Cameras/screenshot/screenshot.png)                          | A sample with two different `camera` objects |

## More complex models

| Model                                         | Screenshot                                       | Description|
|-----------------------------------------------|--------------------------------------------------|------------|
| [Box](Box)                                    | ![](Box/screenshot/screenshot.png)               | One mesh and one material. Start with this. |
| [Box Textured](BoxTextured)                   | ![](BoxTextured/screenshot/screenshot.png)       | Box with one texture. Start with this to test textures. |
| [Duck](Duck)                                  | ![](Duck/screenshot/screenshot.png)              | The COLLADA duck. One texture. |
| [Smiling Face](SmilingFace)                   | ![](SmilingFace/screenshot/screenshot.png)       | A smiling face with multiple textures. |
| [2 Cylinder Engine](2CylinderEngine)          | ![](2CylinderEngine/screenshot/screenshot.png)   | Small CAD data set, including hierarchy. |
| [Reciprocating Saw](ReciprocatingSaw)         | ![](ReciprocatingSaw/screenshot/screenshot.png)  | Small CAD data set, including hierarchy. |
| [Gearbox Assy](GearboxAssy)                   | ![](GearboxAssy/screenshot/screenshot.png)       | Medium-sized CAD data set, including hierarchy. |
| [Buggy](Buggy)                                | ![](Buggy/screenshot/screenshot.png)             | Medium-sized CAD data set, including hierarchy |
| [Box Animated](BoxAnimated)                   | ![](BoxAnimated/screenshot/screenshot.gif)       | Rotation and Translation Animations. Start with this to test animations. |
| [Cesium Milk Truck](CesiumMilkTruck)          | ![](CesiumMilkTruck/screenshot/screenshot.gif)   | Textured. Multiple nodes/meshes. Animations. |
| [Rigged Simple](RiggedSimple)                 | ![](RiggedSimple/screenshot/screenshot.gif)      | Animations. Skins. Start with this to test skinning. |
| [Rigged Figure](RiggedFigure)                 | ![](RiggedFigure/screenshot/screenshot.gif)      | Animations. Skins. |
| [Walking Lady](WalkingLady)                   | ![](WalkingLady/screenshot/screenshot.gif)       | Animations. Skins. |
| [Cesium Man](CesiumMan)                       | ![](CesiumMan/screenshot/screenshot.gif)         | Textured. Animations. Skins. |
| [Monster](Monster)                            | ![](Monster/screenshot/screenshot.gif)           | Textured. Animations. Skins. |
| [BrainStem](BrainStem)                        | ![](BrainStem/screenshot/screenshot.gif)         | Animations. Skins. |
| [Virtual City](VC)                            | ![](VC/screenshot/screenshot.gif)                | Textured. Animations. Skins. |

## PBR models

| Model                             | Screenshot                                       | Normal Map         | Occlusion Map      | Emissive Map       |
|-----------------------------------|:------------------------------------------------:|:------------------:|:------------------:|:------------------:|
| [Avocado](Avocado)                | ![](Avocado/screenshot/screenshot.jpg)           | :white_check_mark: | :white_check_mark: |                    |
| [Barramundi Fish](BarramundiFish) | ![](BarramundiFish/screenshot/screenshot.jpg)    | :white_check_mark: | :white_check_mark: |                    |
| [Boom Box](BoomBox)               | ![](BoomBox/screenshot/screenshot.jpg)           | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Corset](Corset)                  | ![](Corset/screenshot/screenshot.jpg)            | :white_check_mark: | :white_check_mark: |                    |
| [Lantern](Lantern)                | ![](Lantern/screenshot/screenshot.jpg)           | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [MetalRoughSpheres](MetalRoughSpheres)  | ![](MetalRoughSpheres/screenshot/screenshot.png)   |                    |                    |                    |
| [NormalTangentTest](NormalTangentTest)  | ![](NormalTangentTest/screenshot/screenshot.png)   | :white_check_mark: |                    |                    |

## Further PBR models

| Model                                                  | Screenshot                                                      | Description|
|--------------------------------------------------------|-----------------------------------------------------------------|------------|
| [Two Sided Plane](TwoSidedPlane)                       | ![](TwoSidedPlane/screenshot/screenshot.jpg)                    | A plane having the two sided material parameter enabled.       |
| [Cube](Cube)                                           | ![](Cube/screenshot/screenshot.jpg)                             | A cube with non-smoothed faces.                                |
| [Animated Cube](AnimatedCube)                          | ![](AnimatedCube/screenshot/screenshot.gif)                     | Same as previous cube having a linear rotation animation.      |
| [Suzanne](Suzanne)                                     | ![](Suzanne/screenshot/screenshot.jpg)                          | Suzanne from Blender with smoothed faces.                      |
| [Sci Fi Helmet](SciFiHelmet)                           | ![](SciFiHelmet/screenshot/screenshot.jpg)                      | Sci Fi Helmet having unsigned integer indices.                 |
