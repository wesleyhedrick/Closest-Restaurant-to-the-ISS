import {createElement} from './helper.js'
import {renderNav} from './renderNav.js'
import {renderLanding} from './renderLanding.js'
import { renderBio } from './renderBio.js';

export function renderMapPage(){
    let body = document.querySelector('body');
    body.classList.add('mapAndBioBody');
    body.classList.remove('landing')
    let container = document.querySelector('.container');
    let wrapper = createElement('div','wrapper')
    let mapContainer = createElement('div','map-container','map')
    let restaurantListContainer = createElement('div','restaurant-list')
    let nav = renderNav(['Home', 'Bio'], ['navigate-home', 'navigate-to-bio'])
    let resultsText = 'If no restaurants appear, it is because the ISS is over a sparsely populated area or the ocean. It spends much of its time over these parts of the globe. Don\'t worry, since it moves at over 17,000 mph, it will be back over densely populated areas soon.'
    restaurantListContainer.innerText = resultsText;
    wrapper.append(restaurantListContainer)
    wrapper.append(mapContainer);
    body.replaceChild(wrapper, container);
    body.append(nav);
    

    let navToBio = document.querySelector('.navigate-to-bio');
    let navHome = document.querySelector('.navigate-home');
    navToBio.addEventListener('click', ()=>{
        renderBio();
    })
    navHome.addEventListener('click', () => {
        location.reload();
    })

}
