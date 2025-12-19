vite + react
install cmd ::
```js
 npm create vite@latest my-project -- --template react
cd my-project
```
tailwindcss:: version v3.4.17
```js
1)npm install -D tailwindcss@3 postcss autoprefixer
2)npx tailwindcss init -p
```
use in tailwind.config.js
```js
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
index.css
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```js
npm run dev
```
..
