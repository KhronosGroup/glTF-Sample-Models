# Directional Light

## Screenshot

## Purpose

The purpose of this test model is to verify that the BRDF and microfacet model used by a renderer preserves energy.  
It is intended as a test to measure the amount of light factored in by the distribution functions (normal, shadowing and occlusion) - in this case especially the normal distribution function.  
At least for realtime rasterizers it is common that the factor returned by this function is applied to the incoming light to calculate specular highlights.  
In order to preserve energy it is important that this factor does not add light energy.  

The directional lightsource is defined as:

Intensity = 1.0 lumen / m2
Color = [0.9, 0.8, 0.1]  

Material basecolor =  [0.6, 0.6, 0.6]
Material roughess:
Left = 0, Middle = 0.16, Right = 0.33



This means that the color of the specular highlight shall retain the same chromaticity as: RGB[0.9, 0.8, 0.1] * [0.6, 0.6, 0.6] = [0.54, 0.48, 0.06] = Chroma [0.48, 0.42, 0.09]








## License Information

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)  
