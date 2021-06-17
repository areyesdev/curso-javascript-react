import movies from "./movies.js";
import render from "./render.js";

const search = window["search-form"];

search.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");
  const movies = filterByTitle(title);
  render(movies);
});

function filterByTitle(title) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(title.toLowerCase());
  });
}
