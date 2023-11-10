import os
import sys
import spaces
import random
import uvicorn

from fastapi import FastAPI
from pydantic import BaseModel
from model import Model


app = FastAPI()


# Pydantic 모델을 사용하여 요청 객체 정의
class ResourceReq(BaseModel):
    sentence: str


class ResourceRes(BaseModel):
    pngPath: str
    glbPath: str


model = Model()


@spaces.GPU
def run_generate3d(prompt: str):
    seed = random.randint(0, 2100000000)
    glb_path = model.make_glb(prompt=prompt, seed=seed)

    png_path = model.glb2img(glb_path)
    model.make_transparent(png_path)

    return glb_path, png_path


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/")
def get_3d(resource_req: ResourceReq):
    input_sentence = resource_req.sentence
    glb_path, png_path = run_generate3d(input_sentence)
    pre = "https://masoori.site/resources/"
    glb_path = pre + glb_path[20:]
    png_path = pre + png_path[20:]

    resource_res = ResourceRes(pngPath=png_path, glbPath=glb_path)

    return resource_res


if __name__ == "__main__":
    current_dir = os.path.dirname(__file__)

    sys.path.append(current_dir)

    uvicorn.run("main:app", host="0.0.0.0", port=1234, reload=True)
