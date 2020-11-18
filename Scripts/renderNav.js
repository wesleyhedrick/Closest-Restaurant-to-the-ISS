import {createElement} from "./helper.js"

export function renderNav(text){
    let buttonContainer = createElement("div", "button-container")
    let button = createElement("button", "nav-button")

    button.innerText = text

    buttonContainer.append(button)
    return buttonContainer
}