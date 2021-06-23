import { Component, createElement } from "../lib/react/index.js";
import Select from "./select.js";

class Filter extends Component {
  render() {
    return Select({
      children: [
        createElement("option", { value: "all" }, "Todas"),
        createElement("option", { value: "mostValued" }, "Más Valoradas"),
        createElement("option", { value: "leastValued" }, "Menos Valoradas"),
      ],
    });
  }
}

export default Filter;
