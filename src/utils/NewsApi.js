const BASE_URL = "https://newsapi.org/v2";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function getDateRange() {
  const today = new Date();
  const weekAgo = new Date();
  weekAgo.setDate(today.getDate() - 7);

  const format = (date) => date.toISOString().split("T")[0];

  return {
    from: format(weekAgo),
    to: format(today),
  };
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function searchNews(keyword) {
  const { from, to } = getDateRange();
  const url = `${BASE_URL}/everything?q=${encodeURIComponent(
    keyword
  )}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`;

  return fetch(url).then(checkResponse);
}