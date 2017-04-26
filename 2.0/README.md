# glTF 2.0 Sample Models

## Simple models for testing individual features

| Model                                                                     | Screenshot                                                      | Description|
|---------------------------------------------------------------------------|-----------------------------------------------------------------|------------|
| [Triangle Without Indices](TriangleWithoutIndices)                        | ![](TriangleWithoutIndices/screenshot/screenshot.png)           | The simplest possible glTF asset: A single `scene` with a single `node` and a single `mesh` with a single `mesh.primitive` with a single triangle with a single attribute, without indices and without a `material` |
| [Triangle](Triangle)                                                      | ![](Triangle/screenshot/screenshot.png)                         | A very simple glTF asset: The basic structure is the same as in [Triangle Without Indices](TriangleWithoutIndices), but here, the `mesh.primitive` describes an *indexed* geometry
| [Animated Triangle](AnimatedTriangle)                                     | ![](AnimatedTriangle/screenshot/screenshot.gif)                 | This sample is similar to the [Triangle](Triangle), but the `node` has a `rotation` property that is modified with a simple `animation` |
| [Simple Material](SimpleMaterial)                                         | ![](SimpleMaterial/screenshot/screenshot.png)                   | This sample is similar to the [Triangle](Triangle), but additonally defines a `material` that consists of an emissive color |
| [Simple Meshes](SimpleMeshes)                                             | ![](SimpleMeshes/screenshot/screenshot.png)                     | A simple `scene` with two `nodes`, both containing the same `mesh`, namely a `mesh` with a single `mesh.primitive` with a single indexed triangle with *multiple* attributes (positions, normals and texture coordinates), but without a `material` |
| [Advanced Material](AdvancedMaterial) **(not yet updated to glTF 2.0)**   | ![](AdvancedMaterial/screenshot/screenshot.png)                 | This sample is similar to the [Simple Meshes](SimpleMeshes), but defines a `material` that includes a light, and thus shows the effect of the normals attribute |
| [Simple Opacity](SimpleOpacity) **(not yet updated to glTF 2.0)**         | ![](SimpleOpacity/screenshot/screenshot.png)                    | A simple `scene` with multiple `nodes`, `meshes` and `materials`, where each `material` has different opacity values, ranging from fully transparent to fully opaque |
| [Simple Texture](SimpleTexture)                                           | ![](SimpleTexture/screenshot/screenshot.png)                    | A sample with a `material` that uses a single `texture` |
| [Cameras](Cameras)                                                        | ![](Cameras/screenshot/screenshot.png)                          | A sample with two different `camera` objects |
| [Simple Skin](SimpleSkin) **(not yet updated to glTF 2.0)**               | ![](SimpleSkin/screenshot/screenshot.gif)                       | A sample with a `skin`, showing very basic vertex skinning. **Note: Parts of the skinning definitions still have to be finalized for glTF 1.1!** |

## PBR models

| Model                 | Screenshot                                | Normal Map         | Occlusion Map      | Emissive Map       |
|-----------------------|:-----------------------------------------:|:------------------:|:------------------:|:------------------:|
| [Boom Box](BoomBox)   | ![](BoomBox/screenshot/screenshot.jpg)    | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Corset](Corset)      | ![](Corset/screenshot/screenshot.jpg)     | :white_check_mark: | :white_check_mark: |                    |
| [Lantern](Lantern)    | ![](Lantern/screenshot/screenshot.jpg)    | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## Further PBR models

| Model                                                  | Screenshot                                                      | Description|
|--------------------------------------------------------|-----------------------------------------------------------------|------------|
| [Two Sided Plane](TwoSidedPlane)                       | ![](TwoSidedPlane/screenshot/screenshot.jpg)                    | A plane having the two sided material parameter enabled.       |
| [Cube](Cube)                                           | ![](Cube/screenshot/screenshot.jpg)                             | A cube with non-smoothed faces.                                |
| [Animated Cube](AnimatedCube)                          | ![](AnimatedCube/screenshot/screenshot.gif)                     | Same as previous cube having a linear rotation animation.      |
| [Suzanne](Suzanne)                                     | ![](Suzanne/screenshot/screenshot.jpg)                          | Suzanne from Blender with smoothed faces.                      |
| [Sci Fi Helmet](SciFiHelmet)                           | ![](SciFiHelmet/screenshot/screenshot.jpg)                      | Sci Fi Helmet having unsigned integer indices.                 |
