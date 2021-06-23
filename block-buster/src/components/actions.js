import { Component, createElement } from '../lib/react/index.js'
import Wrapper from './wrapper.js'

{/* <section class="wrapper">
      <div class="actions">
        <form action="" id="search-form">
          <input
            placeholder="Escribe tu película favorita"
            name="title"
            type="Busca una pelicula"
          />
          <button>Buscar</button>
        </form>
        <button id="recommended">Películas recomendadas</button>
        <select name="" id="filter">
          <option value="all">Todas</option>
          <option value="most-valued">Más valoradas</option>
          <option value="least-valued">Menos valoradas</option>
        </select>
      </div>
    </section> */}

class Actions extends Component {
  render() {
    const {children} = this.actions
    return Wrapper ({
      children: createElement('div', {
        class: 'actions',
        children,
      })
    })
  }
}

export default Actions