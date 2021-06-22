function setProperties(prop, value, element) {
    const attribute = value
    return element.setAttribute(prop, attribute)
}


export function createElement(type, props, content) {

    // creando tipo de elemento 
    const element = document.createElement(type)

    //Contenido
    if(content) {
        element.textContent = content
    }

    //propiedades
    Object.keys(props).forEach(prop => setProperties(prop, props[prop], element ))
    return element
}