#!/usr/bin/env python
import json
import os


def generate_index(root):
    os.chdir(root)
    index = []
    for model in os.listdir("."):
        if not os.path.isdir(model):
            continue
        os.chdir(model)
        model_contents = os.listdir(".")
        gltf_variant_dirs = [d for d in model_contents if d.startswith("glTF")]
        variants = []
        for variant_dir in gltf_variant_dirs:
            if (not os.path.exists("{}/{}.gltf".format(variant_dir, model))
                    and not os.path.exists("{}/{}.glb".format(variant_dir, model))):
                print "WARNING: did not find model file for {} {}".format(variant_dir, model)
                continue
            variants.append(variant_dir)
        if "screenshot" not in model_contents:
            print "WARNING: no screenshot found for {}".format("model")
        index.append({
            "name": model,
            "variants": variants,
            "screenshot": "screenshot/" + os.listdir("screenshot")[0]
        })
        os.chdir("..")

    with open("model-index.json", "w") as f:
        json.dump(index, f, indent=2, sort_keys=True)
        f.write("\n")

    os.chdir("..")

generate_index("1.0")
generate_index("2.0")
