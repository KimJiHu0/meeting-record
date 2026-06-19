# 프론트엔드 AI 개발 가이드

작성일: 2026-06-18  
목적: MeetingFlow 프론트엔드 개발 시 AI가 반드시 지킬 최소 규칙을 정의한다.

## 1. 먼저 읽을 문서

- `AGENTS.md`
- `docs/base/common/기술스택.md`
- 작업과 관련된 `docs/base/request/*`, `docs/base/response/*`
- Next.js 작업 시 `node_modules/next/dist/docs/`의 관련 문서

## 2. 기본 원칙

- Next.js App Router 기준으로 작성한다.
- 기본은 Server Component로 작성한다.
- `use client`는 상태, 이벤트, 브라우저 API가 필요한 최소 컴포넌트에만 붙인다.
- TypeScript를 엄격히 사용하고 `any`는 쓰지 않는다.
- 기존 구조, 네이밍, 스타일을 우선 따른다.
- 새 패키지, 큰 폴더 구조 변경, 대규모 리팩터링은 필요한 이유가 명확할 때만 한다.

## 3. React 작성 규칙

- 라우트 파일(`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`)은 `export default function Page()` 형태를 기본으로 한다.
- 재사용 컴포넌트는 `const ComponentName = ({ ... }: Props) => { ... }` 형태를 기본으로 한다.
- props 타입은 컴포넌트 바로 위에 `type ComponentNameProps = { ... }`로 둔다.
- 이벤트 핸들러와 유틸 함수는 arrow function을 사용한다.
- 컴포넌트는 한 가지 역할만 하도록 작게 나눈다.

## 4. 데이터와 상태

- 서버 데이터 조회, secret 사용, 초기 화면 구성은 Server Component 또는 서버 전용 함수에서 처리한다.
- Client Component에는 서버 전용 코드, secret, DB 접근 코드를 넣지 않는다.
- Server Component에서 Client Component로 넘기는 props는 직렬화 가능한 값만 사용한다.
- 컴포넌트 내부 상태는 `useState`를 사용한다.
- 검색어, 필터, 페이지 번호처럼 공유 가능한 상태는 URL query에 둔다.
- Zustand는 녹음 상태, 업로드 진행 상태, 사이드바 열림 같은 클라이언트 전역 상태에만 사용한다.
- 서버 데이터 목록, 사용자 정보, 분석 결과를 Zustand에 복제하지 않는다.

## 5. UI 규칙

- Tailwind CSS와 shadcn/ui를 우선 사용한다.
- `main`, `section`, `article`, `header`, `nav`, `button`, `form` 등 의미 있는 태그를 사용한다.
- 클릭 요소는 `button` 또는 `a`로 만든다.
- 로딩, 빈 상태, 에러 상태를 필요한 범위에서 함께 처리한다.
- 모바일과 데스크톱에서 깨지지 않게 반응형을 고려한다.
- 업무형 UI는 과한 장식보다 밀도, 가독성, 일관성을 우선한다.

## 6. 폼과 검증

- 폼은 React Hook Form을 기본으로 한다.
- 검증은 Zod schema로 작성한다.
- 폼 타입은 Zod schema에서 추론한다.
- 제출 중, 비활성화, 성공, 실패 상태를 처리한다.

## 7. 파일 배치

```txt
app/
  route-name/
    page.tsx
    _components/
    _lib/
    _types/
components/
  ui/
lib/
types/
```

- 라우트 전용 컴포넌트는 해당 라우트의 `_components`에 둔다.
- 라우트 전용 함수는 해당 라우트의 `_lib`에 둔다.
- 여러 라우트에서 재사용하는 UI는 `components/`로 올린다.
- shadcn/ui 컴포넌트는 `components/ui/`에 둔다.
- 전역 유틸은 `lib/`, 전역 타입은 `types/`에 둔다.

## 8. API와 Mock

- 프론트엔드는 NestJS API 서버와 통신하는 구조를 전제로 한다.
- API 호출 코드는 UI 컴포넌트 안에 길게 쓰지 말고 `_lib` 또는 `lib/api`에 분리한다.
- API 응답 타입과 UI 타입을 분리한다.
- API가 준비되지 않은 기능은 mock 데이터를 쓰되 실제 API로 교체하기 쉽게 분리한다.
- 사용자 메시지와 개발 로그용 에러를 구분한다.

## 9. 작업 완료 전 확인

- TypeScript 에러가 없는가?
- ESLint 에러가 없는가?
- 불필요한 `use client`가 없는가?
- 로딩, 빈 상태, 에러 상태가 필요한 만큼 처리됐는가?
- 반응형 레이아웃이 깨지지 않는가?
- 기술스택 문서를 벗어난 선택을 임의로 하지 않았는가?

