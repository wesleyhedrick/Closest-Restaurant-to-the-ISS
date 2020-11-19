import {createElement} from './helper.js'
import {renderNav} from './renderNav.js'
import {renderLanding} from './renderLanding.js'
import { renderBio } from './renderBio.js';

export function renderMapPage(){
    let body = document.querySelector('body');
    let container = document.querySelector('.container');
    let wrapper = createElement('div','wrapper')
    let mapContainer = createElement('div','map-container','map')
    let restaurantListContainer = createElement('div','restaurant-list')
    let nav = renderNav(['Home', 'Bio'], ['navigate-home', 'navigate-to-bio'])
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
