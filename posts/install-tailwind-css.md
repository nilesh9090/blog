---
title: Installing Tailwind Css in Next Js Project
date: 'october 5, 2022'
desc: 'This is tutorial to install Tailwind css In next js project and create beautiful website.'
cover_image: '/images/blog4.png'
slug: install-tailwind-css
keyword: ['How to Install tailwind css','tailwind css next js','tailwind css with react js',Nilesh Darji','tailwind css blog']
---

## How To Install Tailwind Css

##### Installing Tailwind CSS as a PostCSS plugin is the most seamless way to integrate it with build tools like webpack, Rollup, Vite, and Parcel.

### What Is Tailwind Css?

Tailwind is a popular utility first CSS framework for rapidly building custom User Interfaces. It provides low-level classes, those classes combine to create styles for various components. You can learn more about Tailwind CSS [here](https://tailwindcss.com/).

### What Is Next JS?

Next.js is a React-based full-stack framework developed by vertical that enables functionalities like pre-rendering of web pages. Unlike traditional react app where the entire app is loaded on the client, Next.js allow the web page to be rendered on the server, which is great for performance and SEO. You can learn more about Next.js [here](https://nextjs.org/).

---

1. Create Your Next Js Project

Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use Create Next App
```shell
npx create-next-app codesktop
cd my-project
```
---
2. Install Tailwind CSS 

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---
3. Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---
4. Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./styles/globals.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---
4. Start your build process

Run your build process with npm run dev.

```bash
npm run dev
```
---

5. Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

```js
export default function Home() {
    return (
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
    )
}
```

### Output

![Output](/images/blog4_1.png)





