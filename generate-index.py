#!/usr/bin/env python
import json
import os


def generate_index(root):
    os.chdir(root)
    index = []
    for model in sorted(os.listdir(".")):
        if not os.path.isdir(model):
            continue
        os.chdir(model)
        model_contents = os.listdir(".")
        gltf_variant_dirs = [d for d in model_contents if d.startswith("glTF")]
        variants = {}
        for variant_dir in gltf_variant_dirs:
            model_file_list = [f for f in os.listdir(variant_dir)
                          if f.endswith(".glb") or f.endswith(".gltf")]
            if (len(model_file_list) > 0):
                variants[variant_dir] = model_file_list[0]
        if not variants:
            print ("WARNING: no model files found for {}".format(model))
        else:
            model_info = {
                "name": model,
                "variants": variants,
                "screenshot": None
            }
            if "screenshot" not in model_contents:
                print ("WARNING: no screenshot found for {}".format(model))
            else:
                model_info["screenshot"] = "screenshot/" + [s for s in os.listdir("screenshot") if s.startswith("screenshot.")][0]
            index.append(model_info)
        os.chdir("..")

    with open("model-index.json", "w") as f:
        json.dump(index, f, indent=2, sort_keys=True)
        f.write("\n")

    os.chdir("..")

generate_index("1.0")
generate_index("2.0")
