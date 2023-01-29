Single page application

npx create-next-app@latest --experimental-app

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    npm i next-themes

    module.exports = {
    darkMode: "class",
    content: [


import { ThemeProvider } from 'next-themes'

npm install react-icons --save

Adding URL config for BG-Image

backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
