## Todo app _ test

- node 18
- react(18) + ts + nextjs(13.5.4) + tailwind

### command

```bash
# 의존성 설치
yarn

# 개발서버 실행
yarn dev

# 빌드
yarn build
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
