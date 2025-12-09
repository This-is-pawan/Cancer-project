vite + react
```js
install cmd :: npm create vite@latest my-project -- --template react
cd my-project
```
```js
tailwindcss:: version v3.4.17
1)npm install -D tailwindcss@3 postcss autoprefixer
2)npx tailwindcss init -p
```
```js
use in tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```js
index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```js
npm run dev
```
