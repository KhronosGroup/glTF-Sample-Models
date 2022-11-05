# Animated Waterfall

## Screenshots

## Purpose

This sample model demonstrates the `KHR_animation_pointer` extension which allows animating most properties of a glTF file, in contrast to "regular" animation which can only animate node transforms and morph target weights. These new capabilities bring glTF on par with other powerful animation systems such as USD, Blender, Unity.  

The model simulates a rough day-and-night cycle through light animation, and water animation through animated texture transforms on the water. 

## Known Issues

- Many viewers use Image-Based Lighting by default which makes the day-and-night cycle hard to see. Turn off IBL if possible.  
- Three.js-based viewers do not show the emissive texture transform correctly.  

## Description

List of animated properties found in this sample:  
```
/nodes/<ID>/rotation
/extensions/KHR_lights_punctual/lights/<ID>/color
/extensions/KHR_lights_punctual/lights/<ID>/intensity
/materials/<ID>/emissiveTexture/extensions/KHR_texture_transform/scale
/materials/<ID>/emissiveTexture/extensions/KHR_texture_transform/offset
/materials/<ID>/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/scale
/materials/<ID>/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/offset
```

## License Information

CC-BY 4.0 https://creativecommons.org/licenses/by/4.0/ Felix Herbst, prefrontal cortex and Needle