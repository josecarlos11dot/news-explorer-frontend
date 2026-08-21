# News Explorer — Frontend

Proyecto final del bootcamp de Desarrollo Web de TripleTen. Aplicación full stack que permite buscar noticias mediante News API, iniciar sesión con una cuenta real, y guardar/eliminar artículos asociados a esa cuenta a través de un backend propio.

## Demo (Etapa 3 — Autorización con React)

🔗 [https://news-explorer-frontend-git-stage-461a1e-joses-projects-02fb5149.vercel.app](https://news-explorer-frontend-git-stage-461a1e-joses-projects-02fb5149.vercel.app)

> Este es un Preview Deployment de Vercel para la rama `stage-react-auth`, ya que el Pull Request de esta etapa permanece abierto sin fusionar (ver nota más abajo). El deploy en producción (`main`) corresponde a la Etapa 1.

> ⚠️ **Nota sobre News API en producción:** el plan gratuito (Developer) de [News API](https://newsapi.org/) restringe las solicitudes del navegador únicamente a `localhost`. Al desplegar en un dominio público, las peticiones de búsqueda de noticias se bloquean automáticamente por política del propio servicio, sin relación con el código del proyecto. El registro, inicio de sesión, guardado y eliminación de artículos funcionan correctamente en producción, ya que dependen del backend propio, no de News API. Para ver la búsqueda de noticias funcionando, se recomienda clonar el repositorio y ejecutarlo en modo local (ver instrucciones abajo).

## Tecnologías

- React + Vite
- React Router (incluyendo `ProtectedRoute`)
- Context API (`CurrentUserContext`)
- News API (`https://newsapi.org/v2/everything`)
- Backend propio ([news-explorer-backend](https://github.com/josecarlos11dot/news-explorer-backend)) para autenticación y artículos guardados
- CSS puro (BEM), fuentes propias vía `@font-face`
- ESLint (Airbnb base + jsx-a11y)

## Funcionalidades

- Búsqueda de noticias por palabra clave
- Resultados paginados de 3 en 3 ("Mostrar más")
- Estado de carga (preloader) y estado vacío ("No se ha encontrado nada")
- Registro e inicio de sesión reales, con JWT persistente en `localStorage`
- Ruta `/saved-news` protegida (`ProtectedRoute`): redirige a `/` con el popup de inicio de sesión si no hay sesión activa
- Guardar y eliminar artículos reales desde una cuenta autenticada
- Página "Artículos guardados" con contador y palabras clave ordenadas por popularidad
- Diseño responsive: desktop, tablet (768px) y mobile (480px)

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

3. Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_NEWS_API_KEY=tu_clave_de_news_api
VITE_MAIN_API_URL=http://localhost:3000
```


Puedes obtener tu clave gratuita en [newsapi.org](https://newsapi.org/). Para `VITE_MAIN_API_URL`, asegúrate de tener corriendo [news-explorer-backend](https://github.com/josecarlos11dot/news-explorer-backend) localmente.

4. Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

5. Para generar el build de producción:

```bash
npm run build
```

## Nota sobre el hosting del frontend

El frontend está desplegado en Vercel (dominio propio de la plataforma, con HTTPS automático), mientras que el backend está desplegado en una VM de Google Cloud con dominio propio (`api.newsexplorerjose.mooo.com`). Ambos cumplen con ser accesibles públicamente por nombre de dominio, aunque en plataformas distintas. Se optó por Vercel para el frontend por sus ventajas de despliegue automático, HTTPS gestionado y CDN, sin necesidad de mantenimiento manual de servidor para archivos estáticos.

## Nota sobre el flujo de Git

A diferencia de la Etapa 1 (donde hice merge de `stage-react-api` a `main` para practicar el flujo completo), en esta entrega dejo intencionalmente el Pull Request de `stage-react-auth` → `main` **abierto sin fusionar**, tal como indica la consigna oficial del proyecto: el merge debe realizarse únicamente después de que el trabajo sea acreditado por el revisor.

## Repositorio relacionado

- [Backend](https://github.com/josecarlos11dot/news-explorer-backend)
