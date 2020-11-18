export {createElement}

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

