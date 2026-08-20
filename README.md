## Last Night

<sub>:> PROJECT BORA</sub>

## Contents

<table>
    <tr>
        <th align="center"><sub>Setup</sub></th>
        <th align="left"><sub>Description</sub></th>
    </tr>
    <tr>
        <td align="center"><sub><a href="#reset">Reset</a></sub></td>
        <td align="left"><sub>기본 화면 상태로 되돌리는 명령어</sub></td>
    </tr>
</table>

<table>
    <tr>
        <th align="center"><sub>Day</sub></th>
        <th align="left"><sub>Work</sub></th>
    </tr>
    <tr>
        <td align="center"><sub><a href="#day-260816">260816</a></sub></td>
        <td align="left"><sub>초기 프로젝트 구조 확인</sub></td>
    </tr>
    <tr>
        <td align="center"><sub><a href="#day-260821">260821</a></sub></td>
        <td align="left"><sub>. . .</sub></td>
    </tr>
</table>

---

<a id="reset"></a>

## Reset

<sub>프로젝트를 기본 화면 상태로 되돌릴 때 사용하는 명령어.</sub>

```bash
cd /home/hanabi/Untitled/LastNight

: > src/App.css
printf "@import 'tailwindcss';\n" > src/index.css

cat > src/App.tsx <<'EOF'
function App() {
    return (
        <main>
            <h1>Get started</h1>
        </main>
    );
}

export default App;
EOF

cat > src/main.tsx <<'EOF'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
EOF

cat > index.html <<'EOF'
<!doctype html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Last Night</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
    </body>
</html>
EOF

npm run check
npm run build
```

<sub>파일. 폴더 제거 명령어.</sub>

```bash
rm -rf src/features
rm -rf src/types
```

---

<a id="day-260816"></a>

## ![Day](https://img.shields.io/badge/Day-260816-233D4D?labelColor=464858)

<sub>초기 Vite React 프로젝트 구조 확인.</sub>

```txt
LastNight/
├─ index.html
├─ public/
└─ src/
   ├─ App.tsx
   ├─ App.css
   ├─ index.css
   └─ main.tsx
```

---

<a id="day-260821"></a>

## ![Day](https://img.shields.io/badge/Day-260821-233D4D?labelColor=464858)

<sub>styles, types 기본 구조 추가.</sub>

```txt
src/styles/
├─ reset.css
└─ theme.css

src/types/
└─ global.d.ts
```
