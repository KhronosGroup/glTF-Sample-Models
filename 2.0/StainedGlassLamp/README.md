# StainedGlassLamp

## Screenshot

![screenshot](screenshot/screenshot_large.jpg)

Above:  screenshot from [Babylon.js](https://sandbox.babylonjs.com/).

## Description

This model represents a real product, a Tiffany-style stained glass table lamp sold on [the Wayfair website](https://www.wayfair.com/). 

The model is made of eight parts, each with their own materials and using PNG textures, mostly 2048x2048. All UVs are arranged between 0 and 1, except for a few overlapping parts which have been offset 1 UV unit to avoid texture baking errors. The model uses 55,428 triangles and 51,174 vertices.

The model demonstrates the following extensions: 
* [KHR_materials_clearcoat](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_clearcoat/README.md)
* [KHR_materials_ior](https://github.com/KhronosGroup/glTF/pull/1718)
* [KHR_materials_transmission](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_transmission/README.md)
* [KHR_materials_variants](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_variants/README.md)
* [KHR_materials_volume](https://github.com/KhronosGroup/glTF/pull/1726)
* [KHR_texture_basisu](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_texture_basisu/)

## Reference Photos

The use of real-world photographic reference is meant to help glTF developers with calibrating material features and renderer behavior, to more accurately represent e-commerce products. 

![photo reference next to screenshot](screenshot/photo_and_screenshot.jpg)

Above: photo of the real product (left) next to a path-traced render in Dassault Systèmes [Enterprise PBR Sample Renderer](https://github.com/DassaultSystemes-Technology/dspbr-pt).

Below: additional reference photos of the real product.

![photo reference 2](screenshot/photo2.jpg)![photo reference 3](screenshot/photo3.jpg)

## glTF-JPG-PNG

The model in `\glTF-JPG-PNG` uses no extensions for the widest compatibility. Base color textures with alpha were kept in PNG format, while the rest were converted into JPG. The textures were downsized from 2048x2048 to various sizes, based on importance and their size on the model. 

The red embedded glass gems and the amber hanging plastic beads were set to Alpha Coverage in Blend mode, at 0.75. This approximates a transparent surface without requiring extensions. Real-world transparent surfaces often both reflect and transmit light, and completely clear glass transmits light from behind it but it is also very reflective. Alpha Coverage does not represent this behavior correctly, it simply controls the visibility of the surface; Alpha Coverage dims all surface characteristics at once. Partial alpha allows the Base Color and reflections to be partially seen, for a rough approximation of clear surfaces. This is better than no transparency at all but is not physically correct.

![screenshot of JPG-PNG model](screenshot/screenshot_jpg-png.jpg)

Above: screenshot from [Babylon.js](https://sandbox.babylonjs.com/) of model with textures in JPG/PNG formats and no extensions.

## KHR_materials_variants

The models in `\glTF` and `\glTF-KTX-BasisU` use the extension [KHR_materials_variants](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_variants/README.md) to add a variant with the emissive textures disabled to simulate the lights being turned off. 

![animated screenshot of variants](screenshot/screenshot_variants_on-off.gif)

Above: animated GIF of switching to the variant "lamp off" in [Babylon.js](https://sandbox.babylonjs.com/).

## KHR_materials_transmission

The models in `\glTF` and `\glTF-KTX-BasisU` use the extension [KHR_materials_transmission](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_transmission/README.md) for the stained glass, the red embedded glass gems, and the amber hanging plastic beads to show colored translucency and specular reflection.

![animated screenshot of transmission](screenshot/screenshot_transmission_on-off.gif)

Above: animated GIF showing transmission enabled and disabled, in the [glTF Sample Viewer](https://github.khronos.org/glTF-Sample-Viewer-Release/).

The stained glass material uses roughness to simulate the microfacet scattering of light through a thin surface, effectively blurring light transmitted from behind it. Behind the glass you should be able to see blurry hints of opaque surfaces like the bright lamp bulbs and the dark hardware. This is especially evident with the "lamp off" variant and a bright background.

![animated screenshot of transmission](screenshot/screenshot_transmission_rotation.gif)

The stained glass material uses alpha-as-coverge in MASK mode to cut out holes where the red beads are present. This is meant to prevent the stained glass geometry from interfering with the transmission of the red beads. 

## KHR_materials_clearcoat

The models in `\glTF` and `\glTF-KTX-BasisU` use the extension [KHR_texture_clearcoat](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_clearcoat/README.md) on the multicolored stained glass to add smooth reflections on top of the glass. The glass material must be rough for `KHR_materials_transmission` to create microsurface refractions, so clearcoat restores shiny surface reflections to the smooth outer surfaces of the stained glass.

The two textures for transmissionTexture and clearcoatTexture have been packed together into a single bitmap `StainedGlassLamp_glass_transmission-clearcoat` using the red and green channels to optimize memory use. 

![animated screenshot of clearcoat](screenshot/screenshot_clearcoat_on-off.gif)

Above: animated GIF showing clearcoat enabled and disabled, in [Babylon.js](https://sandbox.babylonjs.com/).

## KHR_materials_volume and KHR_materials_ior

The models in `\glTF` and `\glTF-KTX-BasisU` use the extensions [KHR_materials_volume]() and [KHR_materials_ior]() on the red embedded glass "gems" and the amber hanging plastic beads to produce an effect similar to the bending of light via refraction. The vertex normals on the amber beads have been split to create faceted refractions similar to the facets seen in cut and polished crystals or glass, whereas the red glass gems use smoothed normals for a rounded-glass effect. The amber beads are made of plastic so they use IOR 1.4, while the red gems are glass so they use IOR 1.52. The amber beads use volume thicknessFactor 0.02, while the red glass gems use thicknessFactor 0.03.

![animated screenshot of volume](screenshot/screenshot_volume_on-off.gif)

Above: animated GIF showing volume enabled and disabled, in [Babylon.js](https://sandbox.babylonjs.com/).

## KHR_textures_basisu

The model in `\glTF-KTX-BasisU` uses [Basis Universal](https://github.com/KhronosGroup/KTX-Software) texture compression and the extension [KHR_texture_basisu](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_texture_basisu/). 

The aim was to achieve the same visual quality as the original JPG/PNG textures, while compressing both file size and GPU memory size. 

The textures were compressed from PNG source into KTX2 using [toktx](https://github.com/KhronosGroup/KTX-Software) via a combination of compression settings that favored high quality. UASTC was used for ORM and Normal textures and ETCS1 for Base Color and Emissive textures, however exceptions were made based on analyzing results... the `glass_basecolor-alpha` and `glass_emissive` textures were changed from ETC1S to UASTC since these were prominently displayed on the model and contained a lot of color variation. 

toktx compression settings:
```
set mipmap=--genmipmap
set uastc=--uastc 4 --uastc_rdo_l .5 --uastc_rdo_d 65536 --zcmp 22
set uastchq=--uastc 4 --uastc_rdo_l .25 --uastc_rdo_d 65536 --zcmp 22
set etcs1=--bcmp --clevel 4 --qlevel 255
toktx %mipmap% %etcs1% StainedGlassLamp_base_basecolor.ktx2 StainedGlassLamp_base_basecolor.png
toktx %mipmap% %etcs1% StainedGlassLamp_base_emissive.ktx2 StainedGlassLamp_base_emissive.png
toktx %mipmap% %uastc% StainedGlassLamp_glass_basecolor-alpha.ktx2 StainedGlassLamp_glass_basecolor-alpha.png
toktx %mipmap% %uastc% StainedGlassLamp_glass_emissive.ktx2 StainedGlassLamp_glass_emissive.png
toktx %mipmap% %etcs1% StainedGlassLamp_grill_basecolor-alpha.ktx2 StainedGlassLamp_grill_basecolor-alpha.png
toktx %mipmap% %etcs1% StainedGlassLamp_grill_emissive.ktx2 StainedGlassLamp_grill_emissive.png
toktx %mipmap% %etcs1% StainedGlassLamp_hardware_basecolor.ktx2 StainedGlassLamp_hardware_basecolor.png
toktx %mipmap% %etcs1% StainedGlassLamp_hardware_emissive.ktx2 StainedGlassLamp_hardware_emissive.png
toktx %mipmap% %uastchq% --assign_oetf linear --assign_primaries none StainedGlassLamp_base_normal.ktx2 StainedGlassLamp_base_normal.png
toktx %mipmap% %uastchq% --assign_oetf linear --assign_primaries none StainedGlassLamp_base_occlusion-rough-metal.ktx2 StainedGlassLamp_base_occlusion-rough-metal.png
toktx %mipmap% %uastc% --assign_oetf linear --assign_primaries none StainedGlassLamp_bulbs_occlusion-rough-metal.ktx2 StainedGlassLamp_bulbs_occlusion-rough-metal.png
toktx %mipmap% %uastchq% --assign_oetf linear --assign_primaries none StainedGlassLamp_glass_normal.ktx2 StainedGlassLamp_glass_normal.png
toktx %mipmap% %uastc% --assign_oetf linear --assign_primaries none StainedGlassLamp_glass_occlusion-rough-metal_transmission.ktx2 StainedGlassLamp_glass_occlusion-rough-metal_transmission.png
toktx %mipmap% %uastc% --assign_oetf linear --assign_primaries none StainedGlassLamp_glass_transmission-clearcoat.ktx2 StainedGlassLamp_glass_transmission-clearcoat.png
toktx %mipmap% %uastchq% --assign_oetf linear --assign_primaries none StainedGlassLamp_grill_normal.ktx2 StainedGlassLamp_grill_normal.png
toktx %mipmap% %uastc% --assign_oetf linear --assign_primaries none StainedGlassLamp_grill_occlusion-rough-metal.ktx2 StainedGlassLamp_grill_occlusion-rough-metal.png
toktx %mipmap% %uastchq% --assign_oetf linear --assign_primaries none StainedGlassLamp_hardware_normal.ktx2 StainedGlassLamp_hardware_normal.png
toktx %mipmap% %uastc% --assign_oetf linear --assign_primaries none StainedGlassLamp_hardware_occlusion-rough-metal.ktx2 StainedGlassLamp_hardware_occlusion-rough-metal.png
toktx %mipmap% %uastc% --assign_oetf linear --assign_primaries none StainedGlassLamp_steel_occlusion-rough-metal.ktx2 StainedGlassLamp_steel_occlusion-rough-metal.png
```

![screenshots of jpg/png versus ktx](screenshot/screenshot_ktx.jpg)

Above: screenshots from [Babylon.js](https://sandbox.babylonjs.com/): JPG and PNG textures (left), KTX textures (right), with size information from [glTF-Transform](https://github.com/donmccurdy/glTF-Transform). Below: chart comparing the sizes.

![chart comparing file and GPU sizes](screenshot/chart_jpg-ktx.jpg)

## Path Traced Render Examples ##

This model has been tested in a few other non-rasterized renderers, which often require a few adjustments. E.g. emissive textures that simulate light bounce should be removed, allowing the path tracing to create more accurate bounce lighting. 

![model rendered in OSPRay Studio](screenshot/render_ospray.jpg)

Above: ray-traced render in Intel [OSPRay Studio](https://github.com/ospray/ospray_studio).

Below: path-traced render in Dassault Systèmes [Enterprise PBR Sample Renderer](https://github.com/DassaultSystemes-Technology/dspbr-pt).

![model rendered in OSPRay Studio](screenshot/render_enterprisepbr.jpg)

## Authoring Details ##

The model was created with [3ds Max](https://www.autodesk.com/products/3ds-max/) and exported to glTF via the [Max2Babylon](https://github.com/BabylonJS/Exporters/tree/master/3ds%20Max) exporter. The glTF file was then edited manually in [Visual Studio Code](https://code.visualstudio.com) with the [glTF Tools](https://github.com/AnalyticalGraphicsInc/gltf-vscode) extension to add KHR extensions. [KTX Software](https://gltf-transform.donmccurdy.com/cli.html) was used to compress textures into KTX2 format. 

The textures were created from photo reference, augmented with procedural textures and hand-painted detail. The emissive textures were pre-rendered in 3ds Max using the V-Ray renderer and sphere lights, and the textures were hand-tuned to work with baseColor and transmission.

## License Information

(C) 2021, Wayfair LLC. CC-BY 4.0 International https://creativecommons.org/licenses/by/4.0/. 
