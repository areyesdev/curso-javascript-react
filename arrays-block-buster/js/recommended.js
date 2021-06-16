import movies from "./movies.js";
import render from "./render.js";

const $button = window.recommended;

$button.addEventListener("click", () => {
  render(setRecomendedMovies(movies));
});

function setRecomendedMovies(movies) {
  return movies.map((movie, index) => {
    return { ...movie, recommended: movie.vote_average > 7 };
  });
}
