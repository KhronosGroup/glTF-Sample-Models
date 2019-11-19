# glTF 2.0 Sample Models

## Simple models for testing individual features

| Model                                                  | Screenshot                                                      | Description |
|--------------------------------------------------------|-----------------------------------------------------------------|-------------|
| [Triangle Without Indices](TriangleWithoutIndices)     | ![](TriangleWithoutIndices/screenshot/screenshot.png)           | The simplest possible glTF asset: A single `scene` with a single `node` and a single `mesh` with a single `mesh.primitive` with a single triangle with a single attribute, without indices and without a `material` |
| [Triangle](Triangle)                                   | ![](Triangle/screenshot/screenshot.png)                         | A very simple glTF asset: The basic structure is the same as in [Triangle Without Indices](TriangleWithoutIndices), but here, the `mesh.primitive` describes an *indexed* geometry
| [Animated Triangle](AnimatedTriangle)                  | ![](AnimatedTriangle/screenshot/screenshot.gif)                 | This sample is similar to the [Triangle](Triangle), but the `node` has a `rotation` property that is modified with a simple `animation` |
| [Animated Morph Cube](AnimatedMorphCube)               | ![](AnimatedMorphCube/screenshot/screenshot.gif)                | Demonstrates a simple cube with two simple morph targets and an animation that transitions between them both. |
| [Animated Morph Sphere](AnimatedMorphSphere)           | ![](AnimatedMorphSphere/screenshot/screenshot.gif)              | This sample is similar to the [Animated Morph Cube](AnimatedMorphCube), but the two morph targets move many more vertices and are more extreme than with the cube. |
| [Simple Meshes](SimpleMeshes)                          | ![](SimpleMeshes/screenshot/screenshot.png)                     | A simple `scene` with two `nodes`, both containing the same `mesh`, namely a `mesh` with a single `mesh.primitive` with a single indexed triangle with *multiple* attributes (positions, normals and texture coordinates), but without a `material` |
| [Simple Morph](SimpleMorph)                            | ![](SimpleMorph/screenshot/screenshot.png)                      | A triangle with a morph animation applied |
| [Simple Sparse Accessor](SimpleSparseAccessor)         | ![](SimpleSparseAccessor/screenshot/screenshot.png)             | A simple mesh that uses sparse accessors |
| [Cameras](Cameras)                                     | ![](Cameras/screenshot/screenshot.png)                          | A sample with two different `camera` objects |
| [Interpolation Test](InterpolationTest)                | ![](InterpolationTest/screenshot/screenshot.gif)                | A sample with three different `animation` interpolations |

## More complex models

| Model                                         | Screenshot                                       | Description |
|-----------------------------------------------|--------------------------------------------------|-------------|
| [Box](Box)                                    | ![](Box/screenshot/screenshot.png)               | One mesh and one material. Start with this. |
| [Box Interleaved](BoxInterleaved)             | ![](BoxInterleaved/screenshot/screenshot.png)    | Box example with interleaved position and normal attributes. |
| [Box Textured](BoxTextured)                   | ![](BoxTextured/screenshot/screenshot.png)       | Box with one texture. Start with this to test textures. |
| [Box Textured NPOT](BoxTexturedNonPowerOfTwo) | ![](BoxTexturedNonPowerOfTwo/screenshot/screenshot.png) | Box with a non-power-of-2 (NPOT) texture.  Not all implementations support NPOT textures. |
| [Box Vertex Colors](BoxVertexColors)          | ![](BoxVertexColors/screenshot/screenshot.png)   | Box with vertex colors applied. |
| [Duck](Duck)                                  | ![](Duck/screenshot/screenshot.png)              | The COLLADA duck. One texture. |
| [2 Cylinder Engine](2CylinderEngine)          | ![](2CylinderEngine/screenshot/screenshot.png)   | Small CAD data set, including hierarchy. |
| [Reciprocating Saw](ReciprocatingSaw)         | ![](ReciprocatingSaw/screenshot/screenshot.png)  | Small CAD data set, including hierarchy. |
| [Gearbox Assy](GearboxAssy)                   | ![](GearboxAssy/screenshot/screenshot.png)       | Medium-sized CAD data set, including hierarchy. |
| [Buggy](Buggy)                                | ![](Buggy/screenshot/screenshot.png)             | Medium-sized CAD data set, including hierarchy |
| [Box Animated](BoxAnimated)                   | ![](BoxAnimated/screenshot/screenshot.gif)       | Rotation and Translation Animations. Start with this to test animations. |
| [Cesium Milk Truck](CesiumMilkTruck)          | ![](CesiumMilkTruck/screenshot/screenshot.gif)   | Textured. Multiple nodes/meshes. Animations. |
| [Rigged Simple](RiggedSimple)                 | ![](RiggedSimple/screenshot/screenshot.gif)      | Animations. Skins. Start with this to test skinning. |
| [Rigged Figure](RiggedFigure)                 | ![](RiggedFigure/screenshot/screenshot.gif)      | Animations. Skins. |
| [Cesium Man](CesiumMan)                       | ![](CesiumMan/screenshot/screenshot.gif)         | Textured. Animations. Skins. |
| [Monster](Monster)                            | ![](Monster/screenshot/screenshot.gif)           | Textured. Animations. Skins. |
| [BrainStem](BrainStem)                        | ![](BrainStem/screenshot/screenshot.gif)         | Animations. Skins. |
| [Virtual City](VC)                            | ![](VC/screenshot/screenshot.gif)                | Textured. Animations. Skins. |
| [Sponza](Sponza)                              | ![](Sponza/screenshot/screenshot.jpg)            | Building interior, often used to test lighting. |

## PBR models

| Model                                         | Screenshot                                       | Normal Map         | Occlusion Map      | Emissive Map       |
|-----------------------------------------------|:------------------------------------------------:|:------------------:|:------------------:|:------------------:|
| [Avocado](Avocado)                            | ![](Avocado/screenshot/screenshot.jpg)           | :white_check_mark: |                    |                    |
| [Barramundi Fish](BarramundiFish)             | ![](BarramundiFish/screenshot/screenshot.jpg)    | :white_check_mark: | :white_check_mark: |                    |
| [Boom Box](BoomBox)                           | ![](BoomBox/screenshot/screenshot.jpg)           | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Corset](Corset)                              | ![](Corset/screenshot/screenshot.jpg)            | :white_check_mark: | :white_check_mark: |                    |
| [Damaged Helmet](DamagedHelmet)               | ![](DamagedHelmet/screenshot/screenshot.png)     | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Flight Helmet](FlightHelmet)                 | ![](FlightHelmet/screenshot/screenshot.jpg)      | :white_check_mark: | :white_check_mark: |                    |
| [Lantern](Lantern)                            | ![](Lantern/screenshot/screenshot.jpg)           | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Water Bottle](WaterBottle)                   | ![](WaterBottle/screenshot/screenshot.jpg)       | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## Further PBR models

| Model                                                  | Screenshot                                                      | Description |
|--------------------------------------------------------|-----------------------------------------------------------------|-------------|
| [Two Sided Plane](TwoSidedPlane)                       | ![](TwoSidedPlane/screenshot/screenshot.jpg)                    | A plane having the two sided material parameter enabled.       |
| [Cube](Cube)                                           | ![](Cube/screenshot/screenshot.jpg)                             | A cube with non-smoothed faces.                                |
| [Animated Cube](AnimatedCube)                          | ![](AnimatedCube/screenshot/screenshot.gif)                     | Same as previous cube having a linear rotation animation.      |
| [Suzanne](Suzanne)                                     | ![](Suzanne/screenshot/screenshot.jpg)                          | Suzanne from Blender with smoothed faces.                      |
| [Sci Fi Helmet](SciFiHelmet)                           | ![](SciFiHelmet/screenshot/screenshot.jpg)                      | Sci Fi Helmet having unsigned integer indices.                 |
| [Antique Camera](AntiqueCamera)                        | ![](AntiqueCamera/screenshot/screenshot.png)                    | Old camera model having various materials.                       |

## Feature Test Models

| Model                                                 | Screenshot                                                    | Description |
|-------------------------------------------------------|---------------------------------------------------------------|-------------|
| [Alpha Blend Mode Test](AlphaBlendModeTest)           | ![](AlphaBlendModeTest/screenshot/screenshot.png)             | Tests alpha modes and settings. |
| [Boom Box With Axes](BoomBoxWithAxes)                 | ![](BoomBoxWithAxes/screenshot/screenshot.jpg)                | Shows X, Y, and Z axis default orientations. |
| [Metal Rough Spheres](MetalRoughSpheres)              | ![](MetalRoughSpheres/screenshot/screenshot.png)              | Tests various metal and roughness values (texture mapped). |
| [Metal Rough Spheres (Textureless)](MetalRoughSpheresNoTextures) | ![](MetalRoughSpheresNoTextures/screenshot/screenshot.png) | Tests various metal and roughness values (textureless). |
| [Morph Primitives Test](MorphPrimitivesTest)          | ![](MorphPrimitivesTest/screenshot/screenshot.jpg)            | Tests a morph target on multiple primitives. |
| [Multi UV Test](MultiUVTest)                          | ![](MultiUVTest/screenshot/screenshot.jpg)                    | Tests a second set of texture coordinates. |
| [Normal Tangent Test](NormalTangentTest)              | ![](NormalTangentTest/screenshot/screenshot.png)              | Tests an engine's ability to automatically generate tangent vectors for a normal map. |
| [Normal Tangent Mirror Test](NormalTangentMirrorTest) | ![](NormalTangentMirrorTest/screenshot/screenshot.png)        | Tests an engine's ability to load supplied tangent vectors for a normal map. |
| [Orientation Test](OrientationTest)                   | ![](OrientationTest/screenshot/screenshot.png)                | Tests node translations and rotations. |
| [Texture Coordinate Test](TextureCoordinateTest)      | ![](TextureCoordinateTest/screenshot/screenshot.png)          | Shows how XYZ and UV positions relate to displayed geometry. |
| [Texture Settings Test](TextureSettingsTest)          | ![](TextureSettingsTest/screenshot/screenshot.png)            | Tests single/double-sided and various texturing modes. |
| [Vertex Color Test](VertexColorTest)                  | ![](VertexColorTest/screenshot/screenshot.png)                | Tests if vertex colors are supported. |

## Extension Test Models

| Model                                                 | Screenshot                                                    | Description |
|-------------------------------------------------------|---------------------------------------------------------------|-------------|
| [Environment Test](EnvironmentTest)                   | ![](EnvironmentTest/screenshot/screenshot.png)                | A simple `scene` with metal and dielectric spheres that range between 0 and 1 roughness. Useful for testing environment lighting. |
| [SpecGloss Vs MetalRough](SpecGlossVsMetalRough)      | ![](SpecGlossVsMetalRough/screenshot/screenshot.jpg)          | Tests if the KHR_materials_pbrSpecularGlossiness extension is supported properly. |
| [Texture Transform Test](TextureTransformTest)        | ![](TextureTransformTest/screenshot/screenshot.jpg)           | Tests if the KHR_texture_transform extension is supported properly. |
| [Unlit Test](UnlitTest)                               | ![](UnlitTest/screenshot/screenshot.png)                      | Tests if the KHR_materials_unlit extension is supported properly. |
