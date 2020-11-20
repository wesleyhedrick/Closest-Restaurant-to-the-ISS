import {createElement} from './helper.js'
import {renderNav} from './renderNav.js'
import {renderBio} from './renderBio.js'

export function renderLanding(){
    let body = document.querySelector('body');
    body.classList.add('landing');
    body.innerHTML = '';
    body.style.background = 'url(\'./Images/landingpage.png\')';
    body.style.backgroundSize = 'cover'
    let container = createElement('div','container');
    let h1 = createElement('h1');
    let renderMap = createElement('button', 'render-map');
    let p = createElement('p', 'landingP');
    let nav = renderNav(['Bio'],['navigate-to-bio'])
    h1.innerText = 'Dine with ISS'
    p.innerText = 'Find The Nearest Restaurant To The ISS';
    renderMap.innerText = 'Search';

    container.append(h1);
    container.append(p);
    container.append(renderMap);
    container.append(nav)
    body.append(container);

    let navButton = document.querySelector('.navigate-to-bio');
    navButton.addEventListener('click', () => {
        console.log('You pressed bio button')
        renderBio()
    })
    

}
    
