# 🌍 Country Explorer - React App

Aplicación web desarrollada con **React** como parte de una prueba técnica. Originalmente consistía en consumir una API pública de países y mostrarlos en una tabla interactiva con filtros, ordenamiento y paginación. Posteriormente, se amplió para incluir funcionalidades **CRUD (crear, editar, eliminar países)** a través de formularios modales.
Se implementó **Context API** para compartir estado global entre componentes, separación de lógica con hooks personalizados y buenas prácticas de organización de carpetas.

## 🚀 Funcionalidades

- ✅ Consulta de API pública de países (`https://restcountries.com/v3.1/all?fields=name,cca2,flags,capital,region,population`)
- 🔎 Filtro en tiempo real por nombre de país
- 📊 Ordenamiento por nombre común y región
- 📄 Paginación para navegar entre los resultados
- CRUD de países

## 🧑‍💻 Tecnologías utilizadas

- **React**
- **JavaScript (ES6+)**
- **Fetch API**

## 🛠️ Instalación y ejecución

1. Clona el repositorio:

```bash
git clone git@github.com:JabCol/CountryExplorer.git
```

2. Dirigete a la carpeta del proyecto:

```bash
cd CountryExplorer
```

3. Instala las dependencias necesarias

```bash
npm install
```

4. Ejecuta el proyecto

```bash
npm run dev
```
