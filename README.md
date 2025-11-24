# TODO

## blog

### working with frontend 
* union 추가
   * value: int | float
* fastapi filter 문제
* ref-문제
* datetime return 시 timezone 세팅
* file response에서 content-disposition

### vs
* first vs one_or_none
* joinedload vs selectinload
* cte vs subquery

### 성능 측정
* time.perf_counter
* cProfile, pstats

## docs

### python
* release note
* pydantic

### Network
* OAuth2 Flow

| Flow 종류                                        | 특징                        | 보안 수준    | 현재 권장 여부                     |
| ---------------------------------------------- | ------------------------- | -------- | ---------------------------- |
| **Authorization Code Flow**                    | code → token 교환 (서버가 수행)  | 🔒 매우 높음 | ✅ 권장                         |
| **Implicit Flow**                              | 클라이언트가 직접 access_token 받음 | ⚠️ 낮음    | 🚫 비권장 (SPA/모바일은 PKCE 사용 권장) |
| **Resource Owner Password Credentials (ROPC)** | 사용자 ID/PW를 직접 앱에 입력       | ❌ 매우 위험  | ❌ 폐기됨                        |
| **Client Credentials Flow**                    | 서버 간 통신용 (user 없음)        | 🔒 높음    | ✅ 권장 (machine-to-machine)    |
<!-- | **OIDC Hybrid Flow**                      | | | -->


### codex
* mcp
* prompt