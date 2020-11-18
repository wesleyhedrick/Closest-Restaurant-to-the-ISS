import {createElement} from './helper.js'
import {renderNav} from './renderNav.js'

export function renderMapPage(){
    let body = document.querySelector('body');
    let container = document.querySelector('.container');
    let resultsDiv = createElement('div','results')
    let mapContainer = createElement('div','map-container','map')
    let restaurantListContainer = createElement('div','restaurant-list')
    let nav = renderNav("Bio")
    resultsDiv.append(restaurantListContainer)
    resultsDiv.append(mapContainer);
    body.replaceChild(resultsDiv, container);
    body.append(nav)

}
