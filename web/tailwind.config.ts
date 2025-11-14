// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Configuración del Dark Mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Fuentes que leen las variables CSS (definidas en globals.css)
      fontFamily: {
        'sans': 'var(--font-geist-sans)',
        'mono': 'var(--font-geist-mono)',
      },
      
      // Aquí definimos TODAS tus clases de color
      colors: {
        // ==============================================
        // === 1. PALETA SEMÁNTICA (Cambia con Tema) ===
        // ==============================================
        // Estas clases leen las variables de globals.css
        'background': 'rgb(var(--color-background) / <alpha-value>)',
        'foreground': 'rgb(var(--color-foreground) / <alpha-value>)',
        'card': 'rgb(var(--color-card) / <alpha-value>)',
        
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'accent-rose': 'rgb(var(--color-accent-rose) / <alpha-value>)',
        'accent-yellow': 'rgb(var(--color-accent-yellow) / <alpha-value>)',

        // =========================================================
        // === 2. PALETA ESTÁTICA (No cambia con Tema) ===
        // =========================================================
        // Esto es un objeto JavaScript, así que usamos la sintaxis de JS
        'mardi-gras': {
          DEFAULT: '#822e81',
          '100': '#1a091a',
          '200': '#351334',
          '300': '#4f1c4e',
          '400': '#6a2569',
          '500': '#822e81',
          '600': '#b540b3',
          '700': '#cb6cca',
          '800': '#dd9ddb',
          '900': '#eeceed',
        },
        'china-rose': {
          DEFAULT: '#aa6373',
          '100': '#231317',
          '200': '#46262e',
          '300': '#693a45',
          '400': '#8b4d5b',
          '500': '#aa6373',
          '600': '#bb8390',
          '700': '#cca2ac',
          '800': '#ddc1c8',
          '900': '#eee0e3',
        },
        'vanilla': {
          DEFAULT: '#f0f2a6',
          '100': '#45470a',
          '200': '#8b8f14',
          '300': '#d0d61f',
          '400': '#e3e85e',
          '500': '#f0f2a6',
          '600': '#f3f5b8',
          '700': '#f6f7c9',
          '800': '#f9fadb',
          '900': '#fcfced',
        },
        'russian-violet': {
          DEFAULT: '#392061',
          '100': '#0b0613',
          '200': '#170d26',
          '300': '#221339',
          '400': '#2d194d',
          '500': '#392061',
          '600': '#5a3399',
          '700': '#7f53c6',
          '800': '#aa8cd9',
          '900': '#d4c6ec',
        },
        'raisin-black': {
          DEFAULT: '#1a1b25',
          '100': '#050507',
          '200': '#0a0b0e',
          '300': '#0f1015',
          '400': '#14151d',
          '500': '#1a1b25',
          '600': '#3f4158',
          '700': '#64678d',
          '800': '#9699b4',
          '900': '#caccda',
        },
      },
    },
  },
}
export default config