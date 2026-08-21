import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { CARDS_PER_PAGE } from "../../utils/constants";
import "./NewsCardList.css";


function NewsCardList({
  articles,
  isSavedView,
  isLoggedIn,
  savedArticles,
  onSaveArticle,
  onDeleteArticle,
  onRegisterRequired,
}) {
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);

  function handleShowMore() {
    setVisibleCount((prev) => prev + CARDS_PER_PAGE);
  }

  const visibleArticles = isSavedView
    ? articles
    : articles.slice(0, visibleCount);
  const hasMore = !isSavedView && visibleCount < articles.length;

  return (
    <section className="news-card-list">
      <ul className="news-card-list__list">
        {visibleArticles.map((article) => (
          <NewsCard
            key={article._id || article.url}
            article={article}
            isSavedView={isSavedView}
            isLoggedIn={isLoggedIn}
            savedArticles={savedArticles}
            onSaveArticle={onSaveArticle}
            onDeleteArticle={onDeleteArticle}
            onRegisterRequired={onRegisterRequired}
          />
        ))}
      </ul>
      {hasMore && (
        <button
          className="news-card-list__more-button"
          type="button"
          onClick={handleShowMore}
        >
          Ver más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
