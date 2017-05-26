# glTF Sample Model Tools
## generateSampleModels.py
Python script to generate glTF models from COLLADA [source models](../sourceModels) using [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF).

Place a built COLLADA2GLTF binary in the tools folder and execute the script.

This script automates the generation of the glTF model variants. For each COLLADA model found in [source models](../sourceModels), the following glTF models will be generated:

* glTF (default, separate buffer and shaders)
* glTF-pbrSpecularGlossiness (uses KHR_materials_pbrSpecularGlossiness extension)
* glTF-Embedded (embedded buffers and shaders)
* glTF-MaterialsCommon (uses KHR_materials_common extension)
* glTF-techniqueWebGL (use KHR_technique_webgl extension with shaders)

The default output directory is `2.0`, but this can be changed by specifying the argument.

## Usage
```bash
python generateSampleModels.py [target]
```
### Options
| Argument| Default | Required | Description |
| --- | --- | --- | --- |
| ${1} | `2.0` | No | Specifies the name of the output directory where the results should be placed. |
