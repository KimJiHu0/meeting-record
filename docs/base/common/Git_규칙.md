# Git 규칙

## 브랜치 규칙

- 새 기능을 개발할 때에는 반드시 `main`을 기준으로 브랜치를 생성한다.
- 기능 브랜치는 `feature/[기능명]` 형식을 사용한다.
- 기능명은 소문자로 작성하고, 길 경우 하이픈(`-`)으로 구분한다.
- 작업 브랜치는 `main`과 `feature/*`만 사용한다.
- 모든 기능 작업은 `feature/*` 브랜치에서 진행한다.
- `main` 브랜치에는 직접 commit/push 하지 않는다.

## 커밋 규칙

- 커밋 전 `git status`로 변경 파일과 변경 내용을 확인한다.
- 사용자 요청 범위 밖의 변경은 커밋에 포함하지 않는다.
- 커밋 메시지는 Conventional Commits 형식을 따른다.

```txt
<type>: <description>
```

허용하는 `type`은 다음과 같다.

- `feat`: 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 의미가 바뀌지 않는 포맷팅, 스타일 수정
- `refactor`: 기능 변경 없는 리팩토링
- `test`: 테스트 추가 또는 수정
- `chore`: 설정, 패키지, 빌드 보조 작업 등 기타 변경
- `ci`: GitHub Actions 등 CI 설정 변경

## Push 및 PR 규칙

- push 대상은 현재 작업 중인 `feature/*` 브랜치로 한다.
- `main` 브랜치로 직접 push 하지 않는다.
- push 전 커밋 메시지가 규칙에 맞는지 확인한다.
- 작업 완료 후 현재 `feature/*` 브랜치에 commit/push 한 뒤, `main` 대상으로 Pull Request를 생성한다.
- 모든 내용은 한글로 작성한다.
