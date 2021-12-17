# React, Nextjs, typescript, tailwind boilerplate
## 1. Init Nextjs project with typescript
```
npx create-next-app@latest --ts
```
https://nextjs.org/docs/basic-features/typescript

## 2. Install Tailwind CSS
Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## 3. Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
```
module.exports = {
  content: [
      "./components/**/*.{js,jsx,ts,tsx}","./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## 4. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./style/globals.css file.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## 5. Import the global css in custom App (./pages/_app.tsx)

```
import { AppProps } from 'next/app'

import './../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
```

## 7. start dev
```
$ yarn dev
```
