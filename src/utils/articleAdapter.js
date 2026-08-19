export function toApiArticle(article) {
  return {
    keyword: article.keyword,
    title: article.title,
    text: article.description,
    date: article.publishedAt,
    source: article.source?.name || article.source,
    link: article.url,
    image: article.urlToImage,
  };
}

export function toDisplayArticle(article) {
  return {
    _id: article._id,
    keyword: article.keyword,
    title: article.title,
    description: article.text,
    publishedAt: article.date,
    source: { name: article.source },
    urlToImage: article.image,
    url: article.link,
  };
}
