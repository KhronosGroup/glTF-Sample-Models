# StainedGlassLamp

## Screenshot

![screenshot](screenshot/screenshot_large.jpg)

Above: screenshot from the [Babylon.js Sandbox](https://sandbox.babylonjs.com/).

## Description

This model represents a real product, a Tiffany-style stained glass table lamp being sold [on the Wayfair website](https://www.wayfair.com/lighting/pdp/fleur-de-lis-living-credle-275-table-lamp-fdlv3095.html). 

The model is made of eight parts, each with their own materials and using five 2048x2048 PNG textures, seven 1024x1024 PNGs, five 512x512 PNGs, and two 256x256 PNGs. All UVs are arranged between 0 and 1, except for a few overlapping parts which have been offset 1 UV unit to avoid texture baking errors. The model uses 70,588 triangles and 46,828 vertices.

The model demonstrates several extensions: 
* [KHR_materials_clearcoat](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_clearcoat/README.md)
* [KHR_materials_ior](https://github.com/KhronosGroup/glTF/pull/1718)
* [KHR_materials_translucency](https://github.com/KhronosGroup/glTF/pull/1825)
* [KHR_materials_transmission](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_transmission/README.md)
* [KHR_materials_variants](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_variants/README.md)
* [KHR_materials_volume](https://github.com/KhronosGroup/glTF/pull/1726)
* [KHR_texture_basisu](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_texture_basisu/)

## Reference Photos

The use of real-world photographic reference is meant to help glTF developers with calibrating material features and renderer behavior, so we can more accurately represent e-commerce products. Additional photo reference is available [on the Wayfair website](https://www.wayfair.com/lighting/pdp/fleur-de-lis-living-credle-275-table-lamp-fdlv3095.html).

![photo reference next to screenshot](screenshot/photo_and_screenshot.jpg)

Above: Photo of the real product (left) next to a screenshot of the glTF 3D model (right).

Below: More reference photos of the real product.

![photo reference 2](screenshot/photo2.jpg)![photo reference 3](screenshot/photo3.jpg)

## KHR_materials_variants

The model in `\glTF` uses the extension [KHR_materials_variants](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_variants/README.md) to add two variants: one using emissive textures to simulate the lights being turned on, and another with the emissives disabled to simulate the lights being turned off. 

![animated screenshot of variants](screenshot/screenshot_variants_on-off.gif)

Above: Animated GIF showing variants "Lamp on" and "Lamp off".

## KHR_materials_transmission

The model in `\glTF` uses the extension [KHR_materials_transmission](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_transmission/README.md) for the stained glass, the red embedded glass gems, and the amber hanging plastic beads to show colored translucency and specular reflection.

The stained glass material uses roughness to simulate the microfacet scattering of light through the thin surface, effectively blurring the transmitted light. Behind the glass you should be able to see blurry hints of opaque surfaces like the bright lamp bulbs and the dark hardware. 

`KHR_materials_transmission` does not accurately portray the refraction that should occur on the red and amber beads. This extension offers an incremental improvement over alpha-as-coverage for glass-like transparency, by coloring the transmitted light, and allowing accurate specular reflections. These surfaces could be further improved with future extensions [KHR_materials_ior](https://github.com/KhronosGroup/glTF/pull/1718) and [KHR_materials_volume](https://github.com/KhronosGroup/glTF/pull/1726). Transmission works fine for the stained glass because the glass is thin enough and rough enough that refraction would not be that obvious.

The stained glass material uses alpha-as-coverge in alpha-test mode to cut out holes where the red beads are present. This is meant to prevent the stained glass geometry from interfering with the transmission of the red beads.

![animated screenshot of transmission](screenshot/screenshot_transmission_on-off.gif)

Above: Animated GIF showing transmission enabled and disabled.

## KHR_materials_clearcoat

The model in `\glTF` uses the extension [KHR_texture_clearcoat](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_materials_clearcoat/README.md) on the multicolored stained glass to add smooth reflections on top of the glass. The glass material must be rough for `KHR_materials_transmission` to create microsurface refractions, so clearcoat restores shiny surface reflections to the smooth outer surfaces of the stained glass.

The two textures for transmissionTexture and clearcoatTexture have been packed together into a single bitmap `FDLV3095_glass_transmission-clearcoat.png` using the red and green channels, to help optimize the asset. 

![animated screenshot of clearcoat](screenshot/screenshot_clearcoat_on-off.gif)

Above: Animated GIF showing clearcoat enabled and disabled.

## KHR_materials_translucency

The model in `\glTF-Translucency` uses the extension [KHR_materials_translucency](https://github.com/KhronosGroup/glTF/pull/1825) for the stained glass instead of `KHR_materials_transmission`. Translucency emulates the microfacet scattering of the light bulbs shining light through to the outside surface of the stained glass. 

`KHR_materials_transmission` remains on the red embedded glass gems and the amber hanging plastic beads to show colored translucency and specular reflection. `KHR_materials_ior` and `KHR_materials_volume` have been added to these materials to enable refraction. The red glass gems use IOR 1.52 and the amber plastic beads use IOR 1.46.

Three punctual point lights have been added to the model to demonstrate translucency, positioned within the three light bulbs, two in the upper area and one inside the base. The intensities have been adjusted "by eye" in Babylon.js to emulate the reference photos.

The redundant emissive texture has been removed from the stained glass material, because translucency dynamically shows the effect of light being refracted through the surface. Emissive textures remain however for the rest of the surfaces, because rasterized renderers like Babylon.js do not calculate bounce lighting.

Clearcoat is not needed on the stained glass because translucency does not use surface roughness to control scattering. Therefore the roughness texture has been revised from the original to make the glass smooth again.

![animated screenshot of translucency](screenshot/screenshot_translucency_on-off.gif)

Above: Animated GIF showing translucency enabled and disabled.

## KHR_textures_basisu

The model in `\glTF-KTX` uses [Basis Universal](https://github.com/KhronosGroup/KTX-Software) texture compression and the extension [KHR_texture_basisu](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_texture_basisu/).

The PNG textures were first downsampled to decrease overall file size. Most of the textures were 2048x2048; they were downsized into five 2048x2048 PNG textures, seven 1024x1024 PNGs, five 512x512 PNGs, and two 256x256 PNGs. Then [glTF-Transform](https://gltf-transform.donmccurdy.com/cli.html) was used to compress the PNG textures into KTX using ETC1S compression, using the command:

```
gltf-transform etc1s StainedGlassLamp.gltf StainedGlassLamp_ktx.gltf --quality 255
```

![screenshots of png versus ktx](screenshot/screenshot_ktx.jpg)

Above left: 26.8 MB with all PNG textures (120.5 MB on GPU), above right: 6 MB with all KTX textures (5.5 MB on GPU)

## Path Traced Render Examples ##

This model has been tested in a few other non-rasterized renderers, which often require a few adjustments. E.g. emissive textures should be removed from non-emissive parts, allowing path tracing to create more accurate bounce lighting. 

![model rendered in OSBRay Studio](screenshot/render_ospray.jpg)

Above: Ray-traced render in Intel [OSPRay Studio](https://github.com/ospray/ospray_studio).

Below: Path-traced render in Dassault Systèmes [Enterprise PBR Sample Renderer](https://github.com/DassaultSystemes-Technology/dspbr-pt).

![model rendered in OSBRay Studio](screenshot/render_enterprisepbr.jpg)

## Authoring Details ##

The model was created with [Autodesk 3ds Max](https://www.autodesk.com/products/3ds-max/) and exported to glTF via the [Max2Babylon](https://github.com/BabylonJS/Exporters/tree/master/3ds%20Max) exporter. The glTF file was then edited manually in [Visual Studio Code](https://code.visualstudio.com) with the [glTF Tools](https://github.com/AnalyticalGraphicsInc/gltf-vscode) extension to add KHR extensions. [glTF-Transform](https://gltf-transform.donmccurdy.com/cli.html) was used to compress the PNG textures into KTX using ETC1S compression. 

The textures were created from photo reference, then augmented with procedural textures and hand-painted detail. The emissive textures were pre-rendered in 3ds Max using the V-Ray renderer and sphere lights, and the textures were hand-tuned to look better in Babylon.js. Because the emissives do not represent physically-accurate lighting, they can only simulate diffuse lighting not reflection/refraction, so the pure-metal and plastic-bead materials do not have emissive textures.

## License Information

(C) 2021, Wayfair LLC. CC-BY 4.0 International https://creativecommons.org/licenses/by/4.0/. 
