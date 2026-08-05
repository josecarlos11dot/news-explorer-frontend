import "./NewsCard.css";

function formatDate(dateString) {
  const date = new Date(dateString);
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

function NewsCard({ article }) {
  const { source, title, publishedAt, description, urlToImage } = article;

  return (
    <li className="news-card">
  <div className="news-card__image-wrapper">
    <img className="news-card__image" src={urlToImage} alt={title} />
   <button
  className="news-card__save-button"
  type="button"
  title="Inicia sesión para guardar artículos"
>
  <svg
    width="50"
    height="50"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26 12V27.9424L20.6182 23.7139L20 23.2285L19.3818 23.7139L14 27.9424V12H26Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
</button>
  </div>
  <p className="news-card__date">{formatDate(publishedAt)}</p>
  <h3 className="news-card__title">{title}</h3>
  <p className="news-card__description">{description}</p>
  <span className="news-card__source">{source?.name}</span>
</li>
  );
}

export default NewsCard;