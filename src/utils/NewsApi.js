const NEWS_API_BASE_URL = "https://newsapi.org/v2";
const PROXY_URL = "https://corsproxy.io/?url=";
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
  const targetUrl = `${NEWS_API_BASE_URL}/everything?q=${encodeURIComponent(
    keyword
  )}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`;
  const proxiedUrl = `${PROXY_URL}${encodeURIComponent(targetUrl)}`;
  return fetch(proxiedUrl).then(checkResponse);
}
