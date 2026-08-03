import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const CARDS_PER_PAGE = 3;

function NewsCardList({ articles }) {
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);

  function handleShowMore() {
    setVisibleCount((prev) => prev + CARDS_PER_PAGE);
  }

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <section className="news-card-list">
      <ul className="news-card-list__list">
        {visibleArticles.map((article, index) => (
          <NewsCard key={`${article.url}-${index}`} article={article} />
        ))}
      </ul>
      {hasMore && (
        <button
          className="news-card-list__more-button"
          type="button"
          onClick={handleShowMore}
        >
          Mostrar más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;