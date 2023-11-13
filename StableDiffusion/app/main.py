from fastapi import FastAPI
from pydantic import BaseModel
import generate

app = FastAPI()


# Pydantic 모델을 사용하여 요청 객체 정의
class ResourceReq(BaseModel):
    sentence: str


class ResourceRes(BaseModel):
    pngPath: str
    gifPath: str
    glbPath: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/")
def get_3d(resource_req: ResourceReq):
    input_sentence = resource_req.sentence
    png_path, gif_path, glb_path = generate.run(input_sentence, 7.5, 40)
    resource_res = ResourceRes(pngPath=png_path, gifPath=gif_path, glbPath=glb_path)
    return resource_res
