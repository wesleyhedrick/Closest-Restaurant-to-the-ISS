export {createElement, createBio}

function createElement(element, clss, id){
    let el = document.createElement(element);
    if(clss == ""){
    } else {
        el.classList.add(clss);
    }
    if(id){
        el.id = id
    }
    return el
}

function createBio(nameInput, text, container, src) {
    let bio = createElement("div", "bio");
    let img = createElement ("img")
    let name = createElement("div", "member-name")
    let bioText = createElement("p")
    
    img.src = src;
    name.innerText = nameInput;
    bioText.innerText = text;
    bio.append(img, name, bioText);
    container.append(bio)
}
