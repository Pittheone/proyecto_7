# Completísimo, aka proyecto 7 🌭🔥

**Completísimo** es una moderna página web para un restaurante de completos (hot dogs) sanos y sabrosos. Ofrece una experiencia sencilla y atractiva tanto en escritorio como en móviles, con una paleta de colores cálidos basada en naranjos suaves que transmiten cercanía, energía y calidez.

## 🔗 Enlace al sitio web

El proyecto está desplegado en Netlify y puedes visitarlo aquí:

👉 [https://app.netlify.com/projects/completisimo/overview](https://app.netlify.com/projects/completisimo/overview) (https://completisimo.netlify.app)


## 🔗 Enlace a render

👉 El backend está en

https://proyecto-6-bc8s.onrender.com

## 🧩 Características

- Registro e inicio de sesión de usuarios
- Visualización de productos (completos)
- Sistema de pagos (con redirección en caso de éxito o cancelación)
- Panel de administración básico (próximamente)
- Animaciones suaves, botones redondeados y diseño coherente con una estética vibrante
- Totalmente responsivo

## 🛠️ Tecnologías utilizadas

- **Frontend**:
  - React
  - TailwindCSS
  - React Router
  - Context API para manejo de estado global
  -Stripe

- **Backend**:
  - Node.js + Express (con despliegue en Render.com)
  - Autenticación de usuarios
  - Gestión de productos
  - API REST

## 🌐 Conexión Frontend ↔ Backend

El frontend está conectado al backend desplegado en **Render.com**. 

## 🚀 Despliegue

- **Frontend:** Desplegado en [Netlify](https://www.netlify.com/)
- **Backend:** Desplegado en [Render](https://render.com/)

---

## ✨ Diseño y estilo

La interfaz se diseñó con una paleta de colores centrada en el naranja (#fb923c) y tonos crema (#fff7f2), logrando un look moderno y apetitoso. Se mantuvo coherencia visual en todos los componentes:

- Botones con bordes redondeados
- Sombras suaves
- Formularios accesibles
- Layouts centrados para facilitar la lectura

---
Para clonar el frontend:
https://github.com/Pittheone/proyecto_7.git

para clonar el backend:
https://github.com/Pittheone/proyecto_6.git



## Uso

El servidor se ejecutará en http://localhost:3000/ por defecto.

## Estructura del Proyecto

proyecto_6/
├── src/
│   └── [archivos fuente]
├── server.js
├── package.json
├── package-lock.json
└── .gitignore


* src/: Carpeta que contiene los archivos fuente de la aplicación.
* server.js: Archivo principal que inicia el servidor Express.
* package.json: Archivo de configuración de npm que lista las dependencias y scripts.
* package-lock.json: Archivo que asegura la consistencia de las versiones de las dependencias.
* .gitignore: Lista de archivos y carpetas que Git debe ignorar.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
