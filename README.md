## <code>감성코어</code> 

> 웹툰, 시, 소설 게시 및 열람 서비스
- 게시판
- 검색
- 마이페이지 및 서재

## 사용 기술
`Next.js` `React` `TypeScript` `tanstack query` `cva`

## 파일 구조

```
.
└── src/
    ├── app(라우팅에 필요한 폴더 및 파일)/
    │   ├── layout.tsx
    │   ├── (withFooter)/
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── login/
    │   │   └── page.tsx
    │   └── oauth/
    │       └── page.tsx
    ├── shared(기능을 가리지 않고 사용되는 component 및 util 등)/
    │   ├── api
    │   ├── constants
    │   ├── hooks
    │   ├── types
    │   ├── ui
    │   └── utils
    └── widget(각 페이지에서 사용되는 위젯, 페이지 기능별 분류)/
        ├── home
        ├── login
        ├── menu
        ├── oauth
        └── search
```
