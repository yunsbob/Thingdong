import torch
from diffusers import ShapEPipeline
from diffusers.utils import export_to_gif

torch.backends.cuda.matmul.allow_tf32 = True
torch.backends.cudnn.benchmark = True

pipe = ShapEPipeline.from_pretrained("openai/shap-e", torch_dtype=torch.float16).to(
    "cuda"
)
pipe.enable_xformers_memory_efficient_attention()


images = pipe(
    prompt="a shark",
    guidance_scale=8,
    num_inference_steps=40,
    frame_size=256,
).images

gif_path = export_to_gif(images[0], "shark_3d.gif")
