# glTF Sample Model Tools
## generateSampleModels.py
Python script to generate glTF models from COLLADA [source models](../sourceModels) using [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF).

Place a built COLLADA2GLTF binary in the tools folder and execute the script.
```bash
python generateSampleModels.py [target]
```

The default target directory is `2.0`, but other directories can be targeted by specifying the argument.
