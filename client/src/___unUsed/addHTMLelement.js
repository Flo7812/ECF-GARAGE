
export default function addHTML(tagName, text = '', atributs = {} ){
    const element = document.createElement(tagName)
    element.textContent = text
    for(const [atr, value =''] of Object.entries(atributs)){
        element.setAttribute(atr, value)
    }
    return element
}