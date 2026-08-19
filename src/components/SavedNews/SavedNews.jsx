import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function getSortedKeywords(articles) {
  const counts = {};
  articles.forEach(({ keyword }) => {
    if (!keyword) return;
    counts[keyword] = (counts[keyword] || 0) + 1;
  });
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
}

function SavedNews({ userName, savedArticles, onDeleteArticle }) {
  const keywords = getSortedKeywords(savedArticles);

  return (
    <main className="saved-news">
      <SavedNewsHeader
        userName={userName}
        savedCount={savedArticles.length}
        keywords={keywords}
      />
      <section className="saved-news__results">
        <NewsCardList
          articles={savedArticles}
          isSavedView
          onDeleteArticle={onDeleteArticle}
        />
      </section>
    </main>
  );
}

export default SavedNews;
