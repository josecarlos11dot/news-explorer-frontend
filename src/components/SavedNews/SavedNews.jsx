import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

const MOCK_SAVED_ARTICLES = [
  {
    keyword: "Naturaleza",
    title: "Todo el mundo necesita un lugar de reflexión en la naturaleza",
    description:
      "Desde que leí el influyente libro de Richard Louv, 'El último niño en el bosque', la idea de tener un 'lugar de reflexión' especial para mí se me ha quedado grabada. Este consejo, que...",
    publishedAt: "2020-11-04",
    source: { name: "Treehugger" },
    urlToImage:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400",
    url: "mock-1",
  },
  {
    keyword: "Naturaleza",
    title: "La naturaleza te hace mejor",
    description:
      "Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.",
    publishedAt: "2019-02-19",
    source: { name: "National Geographic" },
    urlToImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    url: "mock-2",
  },
  {
    keyword: "Yellowstone",
    title: "Fotos nostálgicas hechas por turistas en los parques nacionales de Estados Unidos",
    description:
      "Uri Løvevild Golman y Helle Løvevild Golman son exploradores de National Geographic y fotógrafos de conservación que acaban de completar un proyecto y un libro que llaman su...",
    publishedAt: "2020-10-19",
    source: { name: "National Geographic" },
   urlToImage:
  "https://images.unsplash.com/photo-1533109721025-d1ae7de8f690?w=400&h=272&fit=crop",
    url: "mock-3",
  },
  {
    keyword: "Parques",
    title: "El Grand Teton renueva el histórico Camino de la Cresta",
    description:
      "La unión de los senderos de la Cascada y del Cañón de la Muerte en sus picos tuvo lugar el 1 de octubre de 1933, y marcó el primer paso en la realización de un plan por el que el...",
    publishedAt: "2020-11-04",
    source: { name: "National Parks Traveler" },
    urlToImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
    url: "mock-4",
  },
  {
    keyword: "Fotografía",
    title: "Los científicos no saben por qué la estrella polar es tan extraña",
    description:
      "Los seres humanos se han basado durante mucho tiempo en la estrella polar para orientarse...",
    publishedAt: "2020-03-16",
    source: { name: "Treehugger" },
    urlToImage:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
    url: "mock-5",
  },
];

function SavedNews() {
  const keywords = [...new Set(MOCK_SAVED_ARTICLES.map((a) => a.keyword))];

  return (
    <div className="saved-news">
      <SavedNewsHeader
        userName="Elise"
        savedCount={MOCK_SAVED_ARTICLES.length}
        keywords={keywords}
      />
      <NewsCardList articles={MOCK_SAVED_ARTICLES} isSavedView />
    </div>
  );
}

export default SavedNews;