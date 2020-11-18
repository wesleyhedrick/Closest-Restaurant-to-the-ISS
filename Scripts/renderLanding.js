import {createElement} from './helper.js'

export function renderLanding(){
    let body = document.querySelector('body');
    let container = createElement('div','container');
    let h1 = createElement('h1');
    let button = createElement('button');
    let p = createElement('p');
    h1.innerText = 'Dine with ISS'
    p.innerText = 'Search The Nearest Restaurant To The ISS';
    button.innerText = 'Search';

    container.append(h1);
    container.append(p);
    container.append(button);
    body.append(container);

}
    
