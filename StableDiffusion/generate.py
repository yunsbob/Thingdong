import trimesh
import tempfile
import numpy as np
import torch

from diffusers import ShapEImg2ImgPipeline, ShapEPipeline
from diffusers.utils import export_to_ply, export_to_gif

import random
import spaces
import PIL.Image

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

pipe = ShapEPipeline.from_pretrained("openai/shap-e", torch_dtype=torch.float16)
pipe.to(device)


def ply2glb(ply_path: str) -> str:
    mesh = trimesh.load(ply_path)
    rot = trimesh.transformations.rotation_matrix(-np.pi / 2, [1, 0, 0])
    mesh = mesh.apply_transform(rot)

    mesh_path = tempfile.NamedTemporaryFile(suffix=".glb", delete=False, dir="./")
    mesh.export(mesh_path.name, file_type="glb")

    return mesh_path.name


def make_transparent(png_path):
    image = Image.open(png_path)
    image = image.convert("RGBA")
    data = image.getdata()

    new_data = []
    for item in data:
        if item[:3] == (255, 255, 255):
            new_data.append((255, 255, 255, 0))  # 알파 채널을 0으로 설정하여 투명하게 만듭니다.
        else:
            new_data.append(item)

    image.putdata(new_data)
    image.save(png_path)


def gif_to_png(gif_path, png_path):
    gif_image = Image.open(gif_path)
    first_frame = gif_image.convert("RGBA")
    first_frame.save(png_path, format="PNG")


# output_type  defaults to "pil" Choose between "pil" (PIL.Image.Image) or mesh (MeshDecoderOutput)
def run_text(
    prompt,
    seed,
    guidance_scale=7.5,
    num_steps=40,
):
    generator = torch.Generator(device=device).manual_seed(seed)
    images = pipe(
        prompt,
        generator=generator,
        guidance_scale=guidance_scale,
        num_inference_steps=num_steps,
        output_type="mesh",
    ).images

    ply_path = tempfile.NamedTemporaryFile(suffix=".ply", delete=False, dir="./ply/")
    gif_path = tempfile.NamedTemporaryFile(suffix=".gif", delete=False, dir="./gif/")
    png_path = tempfile.NamedTemporaryFile(suffix=".png", delete=False, dir="./png/")
    export_to_gif(images[0], gif_path.name)
    export_to_ply(images[0], ply_path.name)
    gif_to_png(gif_path.name, png_path.name)
    make_transparent(png_path=png_path.name)

    return png_path.name, gif_path.name, to_glb(ply_path.name)


@spaces.GPU
def run(prompt, seed, guidance_scale, num_inference_steps):
    return run_text(prompt, seed, guidance_scale, num_inference_steps)


glb_path = run(
    "An airplane that looks like a banana", random.randint(0, 2100000000), 7.5, 40
)
