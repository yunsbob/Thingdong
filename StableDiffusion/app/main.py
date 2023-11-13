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
    gifPath: str


model = Model()


@spaces.GPU
async def run_generate3d(prompt: str):
    glb_path = await model.make_glb(prompt=prompt)
    gif_path, png_path = await model.make_img(prompt=prompt)
    model.make_transparent(png_path)

    return glb_path, png_path, gif_path


@app.get("/")
def health_check():
    return {"Hello": "World"}


@app.post("/")
async def get_3d(resource_req: ResourceReq):
    input_sentence = resource_req.sentence
    glb_path, png_path, gif_path = await run_generate3d(input_sentence)
    pre = "https://thingdong.com/resources/"
    glb_path = pre + glb_path[20:]
    png_path = pre + png_path[20:]
    gif_path = pre + gif_path[20:]

    resource_res = ResourceRes(pngPath=png_path, glbPath=glb_path, gifPath=gif_path)

    return resource_res
