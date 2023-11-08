import os
import trimesh
import tempfile
import numpy as np
import torch

from diffusers import ShapEPipeline
from diffusers.utils import export_to_ply, export_to_gif

import PIL.Image

torch.cuda.set_device(2)

current_directory = os.path.dirname(os.path.abspath(__file__))
static_directory = os.path.join(current_directory, "static")
png_directory = os.path.join(static_directory, "png")
gif_directory = os.path.join(static_directory, "gif")
ply_directory = os.path.join(static_directory, "ply")
glb_directory = os.path.join(static_directory, "glb")


class Model:
    def __init__(self):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.pipe = ShapEPipeline.from_pretrained(
            "openai/shap-e", torch_dtype=torch.float16
        )
        self.pipe.to(self.device)

    def gif_to_png(self, gif_path: str, png_path: str):
        gif_image = Image.open(gif_path)
        first_frame = gif_image.convert("RGBA")
        first_frame.save(png_path, format="PNG")

    def make_transparent(self, png_path):
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

    def make_gif_transparent_png(
        self,
        prompt: str,
        seed: int = 0,
    ):
        generator = torch.Generator(device=self.device).manual_seed(seed)
        images = self.pipe(
            prompt,
            generator=generator,
            guidance_scale=7.5,
            num_inference_steps=40,
        ).images

        gif_path = tempfile.NamedTemporaryFile(
            suffix=".gif", delete=False, dir=gif_directory
        )
        export_to_gif(images[0], gif_path.name)

        png_path = tempfile.NamedTemporaryFile(
            suffix=".png", delete=False, dir=png_directory
        )
        self.gif_to_png(gif_path=gif_path, png_path=png_path)
        self.make_transparent(png_path=png_path)

        return (gif_path.name, png_path.name)

    def make_glb(
        self,
        prompt: str,
        seed: int = 0,
    ):
        generator = torch.Generator(device=self.device).manual_seed(seed)
        images = self.pipe(
            prompt,
            generator=generator,
            guidance_scale=7.5,
            num_inference_steps=40,
            output_type="mesh",
        ).images

        ply_path = tempfile.NamedTemporaryFile(
            suffix=".ply", delete=False, dir=ply_directory
        )
        export_to_ply(images[0], ply_path.name)

        mesh = trimesh.load(ply_path, file_type="ply")
        rot = trimesh.transformations.rotation_matrix(-np.pi / 2, [1, 0, 0])
        mesh = mesh.apply_transform(rot)
        rot = trimesh.transformations.rotation_matrix(np.pi, [0, 1, 0])
        mesh = mesh.apply_transform(rot)

        glb_path = tempfile.NamedTemporaryFile(
            suffix=".glb", delete=False, dir=glb_directory
        )
        mesh.export(glb_path.name, file_type="glb")

        return glb_path.name
