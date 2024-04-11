## Todo app

- next.JS와 다양한 라이브러리 사용을 목표로 기획 및 UI는 공개되어진 Figma 템플릿을 사용
- 미흡한 기획과 기능은 BE와 협의하여 추가, 수정하는 형태로 진행

- [storybook](https://6617c7ab7da9bcd9f302affc-hzetnaltab.chromatic.com/?path=/docs/configure-your-project--docs)

### skill

- node 20
- react(18) + ts + nextjs(14) + tailwind
- hook-form, zustand, headlessui
- ci/cd
  - github-action ( 빌드, docker 이미지 빌드, 배포)
- 서버
  - docker 기반 서버 구성
  - 도메인, HTTPS 적용 (https://todo.devhong.cc)
- figma
  - [링크](https://www.figma.com/file/t9iTdY05UF7CHXTP4yf1NN/TodoApp?type=design&node-id=0-1&mode=design)

### command

```bash
# 의존성 설치
pnpm install

# 개발서버 실행
pnpm dev

# 빌드
pnpm build
```

### code convention

- vscode extension
  - Prettier - Code formatter, ESLint, Tailwind CSS IntelliSense,
- vscode setting

  - .vscode/setting.json
  - 저장 시 자동 정렬 및 포멧터 pritter로 사용

  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  ```

- forder naming
  - camelCase
  - ex. userName, userAge, phoneNumber
- react component(.tsx) file naming
  - pascalCase
  - ex. UserName.tsx, UserCard,tsx
- etc file naming
  - camelCase
  - ex. userService.js

### folder structure

- src/app
  - nextjs app-router 경로
- components
  - ui 컴포넌트 경로
    - 각 컴포넌트 별 폴더 생성 후 컴포넌트 생성
    - ex) src/components/atoms/button/Button.tsx
  - atoms
    - 최소단위 컴포넌트.
    - Button, Input 등
  - molecules
    - atom 컴포넌트를 사용하여 만든 컴포넌트
    - SearchBar, UserCard
  - organisms
    - atom와 molecule를 사용하여 만든 컴포넌트
    - Header, footer, form
  - templates
    - atom, molecule, organisms를 사용하여 만든 컴포넌트
    - 실제 src/app/..page에 사용할 컴포넌트
- service
  - BE api서비스
  - 도메인 별 폴더를 생성 후 파일 생성
