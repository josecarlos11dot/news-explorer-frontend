# News Explorer — Frontend

Proyecto final del bootcamp de Desarrollo Web de TripleTen. Aplicación que permite buscar noticias mediante News API, ver los resultados en tarjetas, y (próximamente, con el backend) guardar artículos en una cuenta personal.

## Demo

🔗 URL del proyecto desplegado: *(pendiente)*

## Tecnologías

- React + Vite
- React Router
- News API (`https://newsapi.org/v2/everything`)
- CSS puro (BEM), fuentes propias vía `@font-face`
- ESLint (Airbnb base)

## Funcionalidades

- Búsqueda de noticias por palabra clave
- Resultados paginados de 3 en 3 ("Mostrar más")
- Estado de carga (preloader) y estado vacío ("No se ha encontrado nada")
- Diseño responsive: desktop, tablet (768px) y mobile (480px)
- Popups de inicio de sesión, registro y confirmación
- Sección "Acerca del autor"

## Instalación local

1. Clona el repositorio:
```bash
   git clone https://github.com/josecarlos11dot/news-explorer-frontend.git
   cd news-explorer-frontend
```

2. Instala las dependencias:
```bash
   npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con tu propia clave de [News API](https://newsapi.org/):




```
   VITE_NEWS_API_KEY=tu_clave_aqui
   ```
4. Ejecuta el proyecto en modo desarrollo:
```bash
   npm run dev
```

5. Para generar el build de producción:
```bash
   npm run build
```

## Repositorio relacionado

- [Backend](https://github.com/josecarlos11dot/news-explorer-backend)
