import os
import sys
import spaces
import random
import uvicorn

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from generator import Model


app = FastAPI()

current_directory = os.path.dirname(os.path.abspath(__file__))
static_directory = os.path.join(current_directory, "static")
app.mount("/static", StaticFiles(directory=static_directory), name="static")


# Pydantic 모델을 사용하여 요청 객체 정의
class ResourceReq(BaseModel):
    sentence: str


class ResourceRes(BaseModel):
    pngPath: str
    gifPath: str
    glbPath: str


model = Model()


@spaces.GPU
def run(prompt: str):
    seed = random.randint(0, 2100000000)
    model.make_glb(prompt=prompt, seed=seed)
    model.make_gif_transparent_png(prompt=prompt, seed=seed)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/")
def get_3d(resource_req: ResourceReq):
    input_sentence = resource_req.sentence

    resource_res = ResourceRes(
        pngPath="path_to_png", gifPath="path_to_gif", glbPath="path_to_glb"
    )

    return resource_res


if __name__ == "__main__":
    current_dir = os.path.dirname(__file__)

    sys.path.append(current_dir)

    uvicorn.run("main:app", host="0.0.0.0", port=8888, reload=True)
