# Emissive Fireflies

## Screenshots

## Purpose

This sample model demonstrates the `KHR_animation_pointer` extension which allows animating most properties of a glTF file, in contrast to "regular" animation which can only animate node transforms and morph target weights. These new capabilities bring glTF on par with other powerful animation systems such as USD, Blender, Unity.  

The model animates the base color, emission and emissive strength of simple spheres. In viewers that support HDR rendering and/or special effects such as bloom/glow and tonemapping, the emissive strength should have a noticeable impact.  

## Description

List of animated properties found in this sample:  
```
/materials/0/emissiveFactor
/materials/0/pbrMetallicRoughness/baseColorFactor
/materials/0/extensions/KHR_materials_emissive_strength/emissiveStrength
```

## License Information

CC-BY 4.0 https://creativecommons.org/licenses/by/4.0/ Felix Herbst, prefrontal cortex and Needle