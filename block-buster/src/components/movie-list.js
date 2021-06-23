import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import movies from "../movies.js";
import Movie from "./movie.js";
import Wrapper from "./wrapper.js";

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  render() {
    return Wrapper({
      children: MovieListStyled({
        children: movies.map((movie) => new Movie(movie)),
      }),
    });
  }
}

export default MovieList;
