# 들어가기 전에...

필자가 사용하는 환경은 다음과 같다.

* Backend: fastapi
* Frontend: flutter
* Code Generator: [openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli)
* 테스트 코드 : [Test Code](https://github.com/ben3329/midorisaur-playground/tree/main/working_with_frontend/with_code_generator)

# 문제 정의

Backend 업무를 하다보면 아래 코드 처럼 Response의 Union 필드에 Object와 List를 같이 넣고 싶을 때가 가끔 있다.

자주 사용하는 방식은 아니지만 기술적으로 충분히 가능한 스펙이다.

```python
from pydantic import BaseModel


class Cat(BaseModel):
    name: str
    meow_volume: int


class Dog(BaseModel):
    name: str
    bark_volume: int


class Ant(BaseModel):
    name: str
    ant_type: str


class AnimalHouseResponse(BaseModel):
    pet: Cat | Dog | list[Ant]
    mammalia: Cat | Dog
```

Backend가 API를 만들면 Frontend는 이 API에 접근 하는 코드를 매번 만들 수 없기에 보통 Code Generator를 사용한다.

그런데 Frontend가 React처럼 커뮤니티가 큰 프레임워크를 사용한다면 Code Generator도 완성도가 높기 때문에 문제가 안 되지만,
Flutter 같은 커뮤니티가 작은 프레임워크를 사용한다면 Code Generator의 완성도가 떨어져 위의 코드처럼 자주 사용하지 않는 형식은 코드를 잘 생성하지 못한다.

위의 예시를 openapi.json으로 뽑으면 아래 처럼 나온다.

```json
{
  ...,
  "paths": {
    "/animal-house": {
      "get": {
        "summary": "Get Animal House",
        "operationId": "get_animal_house_animal_house_get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AnimalHouseResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "AnimalHouseResponse": {
        "properties": {
          "pet": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/Cat"
              },
              {
                "$ref": "#/components/schemas/Dog"
              },
              {
                "items": {
                  "$ref": "#/components/schemas/Ant"
                },
                "type": "array"
              }
            ],
            "title": "Pet"
          },
          "mammalia": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/Cat"
              },
              {
                "$ref": "#/components/schemas/Dog"
              }
            ],
            "title": "Mammalia"
          }
        },
        "type": "object",
        "required": [
          "pet",
          "mammalia"
        ],
        "title": "AnimalHouseResponse"
      },
      ...
    }
  }
}
```

Web에서 사용하는 npm 패키지 중 하나인 orval을 사용하면 아래 코드가 생성된다.
확인해보면 Union에서 object와 list가 함께 있어도 잘 인식하는것을 볼 수 있다.

```ts
import axios from 'axios';
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';

export type AnimalHouseResponsePet = Cat | Dog | Ant[];

export type AnimalHouseResponseMammalia = Cat | Dog;

export interface AnimalHouseResponse {
  pet: AnimalHouseResponsePet;
  mammalia: AnimalHouseResponseMammalia;
}

export interface Ant {
  name: string;
  ant_type: string;
}

export interface Cat {
  name: string;
  meow_volume: number;
}

export interface Dog {
  name: string;
  bark_volume: number;
}

/**
 * @summary Get Animal House
 */
export const getAnimalHouseAnimalHouseGet = <TData = AxiosResponse<AnimalHouseResponse>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/animal-house`,options
    );
  }

export type GetAnimalHouseAnimalHouseGetResult = AxiosResponse<AnimalHouseResponse>
```

테스트 페이지를 만들어서 테스트 해보면 잘 동작한다.

![로컬 이미지](./example/web/capture.png)


하지만 flutter에서 사용할 수 있는 openapi-generator를 보면 다르다. 아래는 serializers.g.dart에 생성된 코드이다.

```dart
Serializers _$serializers = (Serializers().toBuilder()
      ..add(AnimalHouseResponse.serializer)
      ..add(Ant.serializer)
      ..add(Cat.serializer)
      ..add(Dog.serializer)
      ..add(Mammalia.serializer)
      ..add(Pet.serializer))
    .build();
```

본래 정상적으로 인식 됐다면 아래 처럼 `list[Ant]`관련 코드가 들어가야 한다.

```dart
Serializers _$serializers = (Serializers().toBuilder()
      ..add(AnimalHouseResponse.serializer)
      ..add(Ant.serializer)
      ..add(Cat.serializer)
      ..add(Dog.serializer)
      ..add(Mammalia.serializer)
      ..add(Pet.serializer)
      ..addBuilderFactory(
          const FullType(BuiltList, const [const FullType(Ant)]),
          () => ListBuilder<Ant>()))
    .build();
```

실제로 처음 코드로 테스트 해보면 아래처럼 에러가 나는 것을 확인할 수 있다.

![로컬 이미지](./example/flutter/capture.png)


# 해결 방안

이에 대한 대응 방법은 몇 가지가 있다.

1. Frontend에서 Code Generator Tool을 바꾼다.
2. Frontend에서 코드 생성 후 일부 코드를 수정한다.
3. Backend에서 API 스펙을 수정한다.

앞서 말했듯이 이 문제는 커뮤니티가 작아 발생하는 문제이다. 다른 대안이 있다면 다행이지만 다른 Tool을 사용한다고 해도 비슷한 문제를 겪을 확률이 매우 높다.
코드 생성 후 문제가 되는 코드를 수정하는 것은 유지보수 측면에서 문제가 크다. 문제가 되는 코드를 수정한 후 API 스팩 변경이 생겼을 때 다시 코드를 생성할 경우 변경된 코드가 API 스펙 변경으로 인한 것인지 기존의 문제를 수정하기 위한 것인지 히스토리를 모르면 알 수 없다.
때문에 필자는 API 스펙 수정을 제안한다.

이 문제의 원인은 AnyOf에 Object와 List를 혼합해서 사용했기 때문에 발생한 문제이다.
때문에 List를 다시 Object로 감싸주면 해결된다.
아래는 수정 예시이다.

```python
from pydantic import BaseModel


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
    ant_list: list[Ant]


class AnimalHouseResponse(BaseModel):
    pet: Cat | Dog | Ants
    mammalia: Cat | Dog
```

코드를 생성했을 때도 정상적으로 나오는 걸 확인할 수 있다.

```dart
Serializers _$serializers = (Serializers().toBuilder()
      ..add(AnimalHouseResponse.serializer)
      ..add(Ant.serializer)
      ..add(Ants.serializer)
      ..add(Cat.serializer)
      ..add(Dog.serializer)
      ..add(Mammalia.serializer)
      ..add(Pet.serializer)
      ..addBuilderFactory(
          const FullType(BuiltList, const [const FullType(Ant)]),
          () => ListBuilder<Ant>()))
    .build();
```

실행해보면 정상 동작한다.

![로컬 이미지](./example/flutter/capture2.png)