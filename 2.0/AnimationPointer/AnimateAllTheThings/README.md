# Animate All The Things

## Screenshots

## Purpose

This sample model demonstrates the `KHR_animation_pointer` extension which allows animating most properties of a glTF file, in contrast to "regular" animation which can only animate node transforms and morph target weights. These new capabilities bring glTF on par with other powerful animation systems such as USD, Blender, Unity.  

The model serves as a complex integration case to test and ensure which specific extensions and animation capabilities are available in a specific viewer. 

## Support

Known runtimes that support `KHR_animation_pointer` at the time of writing are:  

- [Gestaltor](https://gestaltor.io/)  
- [Babylon.js](https://sandbox.babylonjs.com/)  
- [three.js (Needle's fork)](https://three.needle.tools/examples/?q=loader_mu#webgl_loader_multiple)  
- [Needle Engine](https://needle.tools)  

Known exporters that support `KHR_animation_pointer` at the time of writing are:  

- [UnityGltf (prefrontal cortex' fork)](https://github.com/prefrontalcortex/unitygltf)  

## Description

List of animated properties found in this sample:
```
/nodes/<ID>/translation
/nodes/<ID>/rotation
/nodes/<ID>/scale
/nodes/<ID>/weights

/cameras/<ID>/perspective/yfov
/cameras/<ID>/perspective/znear
/cameras/<ID>/perspective/zfar
/cameras/<ID>/orthographic/ymag
/cameras/<ID>/orthographic/xmag

/materials/<ID>/emissiveFactor
/materials/<ID>/alphaCutoff
/materials/<ID>/normalTexture/scale
/materials/<ID>/occlusionTexture/strength
/materials/<ID>/pbrMetallicRoughness/baseColorFactor
/materials/<ID>/pbrMetallicRoughness/roughnessFactor
/materials/<ID>/pbrMetallicRoughness/metallicFactor
/materials/<ID>/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/scale
/materials/<ID>/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/offset

/materials/<ID>/extensions/KHR_materials_emissive_strength/emissiveStrength
/materials/<ID>/extensions/KHR_materials_iridescence/iridescenceFactor
/materials/<ID>/extensions/KHR_materials_iridescence/iridescenceIor
/materials/<ID>/extensions/KHR_materials_iridescence/iridescenceThicknessMaximum
/materials/<ID>/extensions/KHR_materials_volume/thicknessFactor
/materials/<ID>/extensions/KHR_materials_volume/attenuationDistance
/materials/<ID>/extensions/KHR_materials_volume/attenuationColor
/materials/<ID>/extensions/KHR_materials_ior/ior
/materials/<ID>/extensions/KHR_materials_transmission/transmissionFactor

/extensions/KHR_lights_punctual/lights/<ID>/intensity
/extensions/KHR_lights_punctual/lights/<ID>/color
/extensions/KHR_lights_punctual/lights/<ID>/range
/extensions/KHR_lights_punctual/lights/<ID>/spot/outerConeAngle
/extensions/KHR_lights_punctual/lights/<ID>/spot/innerConeAngle
```

## License Information

CC-BY 4.0 https://creativecommons.org/licenses/by/4.0/ Felix Herbst, prefrontal cortex and Needle