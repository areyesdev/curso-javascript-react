import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Actions from "./actions.js";
import Filter from "./filter.js";
import Header from "./header.js";
import Search from "./search.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new Actions({
          children: [new Search(), new Filter()],
        }),
      ],
    });
  }
}

export default App;
