# testing-ground

## Flux
클라이언트 사이드 웹 어플리케이션을 만들기 위한 패턴

> Flux는 단방향 데이터 흐름을 사용하여 애플리케이션 상태를 예측 가능하게 만들고, 이를 통해 복잡한 상호작용을 쉽게 관리

### Flux의 핵심 개념

- Dispatcher: 모든 데이터 흐름을 관리하는 중앙 허브
- Stores: 애플리케이션의 상태와 로직을 포함
- Views (React Components): 사용자와 상호작용하고, 상태를 렌더링
- Actions: 사용자 상호작용이나 서버 요청 등에 응답하여 Dispatcher로 전달되는 데이터 조각