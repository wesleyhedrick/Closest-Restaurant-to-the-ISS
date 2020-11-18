export {createElement, createBio}

function createElement(element, clss, id){
    let el = document.createElement(element);
    if(clss != ""){
        el.classList.add(clss)
    }
    if(id){
        el.id = id
    }
    return el
}

function createBio(sp, par, container, src) {
    let bio = createElement("div", "bio");
    let teamMember = createElement("div", "team-member")
    let img = createElement ("img")
    let name = createElement("span")
    let p = createElement("p")

    name.innerText=sp
    p.innerText= par
    img.src= src;
    teamMember.append(img)
    teamMember.append(name)
    teamMember.append(p)
    bio.append(teamMember)
    container.append(bio)
}
