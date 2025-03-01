# React + TypeScript + Vite + TailwindCSS + Shadcn/UI

# My Todo List

## 프로젝트 소개

📌 React 와 vite, typescript를 사용하여 만든 투두 리스트 웹애플리케이션

### 주요 기능

- 사용자는 할 일을 추가, 수정, 삭제하여 할 일들을 관리합니다.
- 할 일 카드를 클릭하면 입력하신 전체 내용을 수정하거나 확인할 수 있습니다.
- 할 일을 추가할 때는 제목, 내용, 만료일을 입력합니다. Left 탭에서는 앞으로 해야 할 모든 일들을 남은 날짜와 함께 확인할 수 있습니다!
- 체크버튼을 누르면 할 일이 완료된 것으로 표시되며, completed 탭에서 확인할 수 있습니다.
- today 탭에서는 만료일이 오늘이고 만료되지 않은 할 일들을 확인할 수 있습니다.
- 삭제 버튼을 누르면 soft-delete 처리되어 삭제되지 않고 보관되지만, 사용자는 확인할 수 없습니다.

## 사용한 기술 스택

- React : 19.0.0
- vite : 6.1.0
- typescript : 5.7.2
- tailwindcss : 4.0.5
- shadcn/ui : 2.3.0

### 프로젝트 구조

src/
├── components/
│   ├── ui/               # shadcn UI 컴포넌트
│   └── component/        # 커스텀 컴포넌트
│       ├── AddDialog.tsx
│       ├── Card.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Popover.tsx
│       └── Tabs.tsx
│
├── hooks/                # 커스텀 훅
│   └── useTodo.ts
│
├── store/               # 상태 관리
│   └── todoState.ts
│
├── types/               # 타입 정의
│   └── todo.ts
│
├── pages/               # 페이지 컴포넌트
│   ├── Home.tsx
│   ├── TodoListPage.tsx
│   └── todopages/
│       ├── AllTodo.tsx
│       ├── CompletedTodo.tsx
│       ├── ExpiredTodo.tsx
│       ├── LeftTodo.tsx
│       └── TodayTodo.tsx
│
├── data/                # 더미 데이터
│   └── dummyTodo.ts
│
├── App.tsx              # 루트 컴포넌트
├── main.tsx            # 엔트리 포인트
├── App.css
└── index.css
