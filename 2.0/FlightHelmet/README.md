# Flight Helmet

## Screenshot

![screenshot](screenshot/screenshot.jpg)

## KHR_texture_basisu

The model in [glTF-KTX-BasisU](./glTF-KTX-BasisU) has been processed with [glTF-Transform](https://gltf-transform.donmccurdy.com/) to convert the images from PNG to [KTX](https://www.khronos.org/ktx/) with Basis Universal texture compression and the extension KHR_texture_basisu. The model uses glTF-Transform to compress the color textures using ETC1S and the non-color textures using UASTC with default settings.

### Texture Sizes

| Name                                |     Before  |      After  |       Delta  | Type  |
|:------------------------------------|------------:|------------:|-------------:|:------|
| GlassPlasticMat_BaseColor           |   `2.20 MB` | `303.30 KB` |   `-1.90 MB` | ETC1S |
| GlassPlasticMat_Normal              |   `2.53 MB` |   `2.63 MB` | `+103.96 KB` | UASTC |
| GlassPlasticMat_OcclusionRoughMetal |   `3.52 MB` |   `3.64 MB` | `+121.54 KB` | UASTC |
| LeatherPartsMat_BaseColor           |   `5.22 MB` | `483.02 KB` |   `-4.75 MB` | ETC1S |
| LeatherPartsMat_Normal              |   `5.41 MB` |   `3.63 MB` |   `-1.78 MB` | UASTC |
| LeatherPartsMat_OcclusionRoughMetal |   `4.17 MB` |   `3.96 MB` | `-214.13 KB` | UASTC |
| LensesMat_BaseColor                 | `679.98 KB` | `201.58 KB` | `-478.41 KB` | ETC1S |
| LensesMat_Normal                    |   `5.44 KB` |   `1.63 KB` |   `-3.81 KB` | UASTC |
| LensesMat_OcclusionRoughMetal       | `587.50 KB` | `686.60 KB` |  `+99.09 KB` | UASTC |
| MetalPartsMat_BaseColor             |   `2.56 MB` | `462.95 KB` |   `-2.10 MB` | ETC1S |
| MetalPartsMat_Normal                |   `3.12 MB` |   `3.39 MB` | `+272.53 KB` | UASTC |
| MetalPartsMat_OcclusionRoughMetal   |   `2.84 MB` |   `2.96 MB` | `+121.10 KB` | UASTC |
| RubberWoodMat_BaseColor             |   `3.43 MB` | `434.70 KB` |   `-3.00 MB` | ETC1S |
| RubberWoodMat_Normal                |   `3.17 MB` |   `3.31 MB` | `+135.08 KB` | UASTC |
| RubberWoodMat_OcclusionRoughMetal   |   `3.63 MB` |   `3.34 MB` | `-302.25 KB` | UASTC |

### Texture Size Totals

|   Before   |    After   |      Delta  |
|-----------:|-----------:|------------:|
| `43.06 MB` | `29.37 MB` | `-13.69 MB` |

## License Information

Donated by Microsoft for glTF testing

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)  
To the extent possible under law, Microsoft has waived all copyright and related or neighboring rights to this asset.
