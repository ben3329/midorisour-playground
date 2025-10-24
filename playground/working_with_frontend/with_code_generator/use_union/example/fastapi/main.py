# poetry run fastapi dev use_union.py


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Cat(BaseModel):
    name: str
    meow_volume: int


class Dog(BaseModel):
    name: str
    bark_volume: int


class Ant(BaseModel):
    name: str
    ant_type: str


class Ants(BaseModel):
    ant_list: list[Ant] = Field(..., description="List of Ant")


class AnimalHouseResponse(BaseModel):
    pet: Cat | Dog | Ants
    mammalia: Cat | Dog


@app.get("/animal-house")
async def get_animal_house() -> AnimalHouseResponse:
    res = AnimalHouseResponse(
        pet=Ants(
            ant_list=[
                Ant(name="Anty", ant_type="Leafcutter"),
                Ant(name="Tiny", ant_type="Fire"),
            ]
        ),
        mammalia=Dog(name="Rex", bark_volume=7),
    )
    return res
