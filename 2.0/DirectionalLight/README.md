# Directional Light

## Screenshot

## Purpose

The purpose of this test model is to verify that the BRDF and microfacet model used by a renderer preserves energy.  
It is intended as a test to measure the amount of light factored in by the distribution functions (normal, shadowing and occlusion) - in this case especially the normal distribution function.  
At least for realtime rasterizers it is common that the factor returned by this function is applied to the incoming light to calculate specular highlights.  
In order to preserve energy it is important that this factor does not add light energy.  

The directional lightsource is defined as:

Intensity = 1.0 lumen / m2
Color = [0.9, 0.8, 0.1]  - in linear RGB space.  

Material roughess:
Left = 0, Middle = 0.16, Right = 0.33

This means that the color of the specular highlight shall retain the same hue as the lightsource.  
Where hue is the color without reference to how dull or satururated the color is.  
This value can be calculated by dividing each RGB component by the total:  
redHue = R / R + G + B  
greenHue = G / R + G + B  
blueHue = B / R + G + B  

Lightsource color = RGB[0.9, 0.8, 0.1]  
Hue of the lightsource = [0.9 / 1.8, 0.8 / 1.8, 0.1 / 1.8] = [0.5, 0.444, 0.0555]  

The displayed (concentrated) specuar highlight shall retain this hue.  
Note that the lightvalues are in linear RGB space.    
If display uses sRGB then the sRGB transfer (gamma) function will be applied to resulting scene linear light values.  
In this case the values will be roughly [0.96, 0.91, 0.38] depending on exactly what transfer function is applied (this is not specified in the core glTF spec).  

This will of course not be an exact measure since values are read and written with different precision.  
There will also be a mix with basecolor as the material changes roughness.

## How to check for correct output

The main function tested is the specular highlights, as created by the included directional light.  
As the lightsource has an intensity of 1 (lumen / m2) and display output can be considered to be candela / m2 it should never be the case that light contribution go above:
(Color * Intensity) = [0.9, 0.8, 0.1] - in linear space.  

Check the specular hightlight with a color picker and verify that the original hue is retained.  
For an sRGB display this should be around, depending on the exact gamma/transfer function that is used.  
HEX : F3E759

Important to note is that the RG values should not be so high that they are clipped, ie if they are FFFF then that may be a sign that energy has been added and further investigation is needed.  


## License Information

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)  
