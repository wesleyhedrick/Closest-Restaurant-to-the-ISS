import {createElement} from "./helper.js"

export function renderNav(textArray, clssArray){
    let button;
    let buttonContainer = createElement("div", "button-container");
    for(let i=0;i<clssArray.length;i++){
        button = createElement("button", clssArray[i]);
        button.innerText = textArray[i];
        buttonContainer.append(button);
    }
    
    return buttonContainer
}