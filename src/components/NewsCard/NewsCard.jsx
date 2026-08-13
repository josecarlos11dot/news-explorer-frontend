import "./NewsCard.css";

function formatDate(dateString) {
  const date = new Date(dateString);
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

function NewsCard({ article, isSavedView }) {
  const { source, title, publishedAt, description, urlToImage, keyword } =
    article;

  return (
    <li className="news-card">
      <div className="news-card__image-wrapper">
        <img className="news-card__image" src={urlToImage} alt={title} />

        {isSavedView && keyword && (
          <span className="news-card__keyword-badge">{keyword}</span>
        )}

        {isSavedView ? (
        <button
         className="news-card__delete-button"
         type="button"
         title="Eliminar de guardados"
         arial-label="Eliminar de guardados"
        >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
          fillRule="evenodd"
         clipRule="evenodd"
         d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z"
         fill="currentColor"
        />
        </svg>
        </button>
        ) : (
          <button
            className="news-card__save-button"
            type="button"
            title="Inicia sesión para guardar artículos"
            arial-label="Inicia sesión para guardar artículos"
          >
            <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26 12V27.9424L20.6182 23.7139L20 23.2285L19.3818 23.7139L14 27.9424V12H26Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        )}
      </div>
      <p className="news-card__date">{formatDate(publishedAt)}</p>
      <h3 className="news-card__title">{title}</h3>
      <p className="news-card__description">{description}</p>
      <span className="news-card__source">{source?.name}</span>
    </li>
  );
}

export default NewsCard;