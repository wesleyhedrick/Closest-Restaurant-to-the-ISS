import db from './db.js';
import {getISSCoords} from './issCoords.js'
import {initMap, loader} from './googleMaps.js'
import {renderLanding} from './Scripts/renderLanding.js'
import {renderMapPage} from './Scripts/renderMapPage.js'

window.addEventListener('issloaded', () => {
    console.log(db)
    renderLanding();
    let button = document.querySelector('button');
    button.addEventListener("click", () => {
        renderMapPage()
        console.log('You clicked me')
        loader.load().then(() => {
            // initMap(center.lat, center.lng)
            let map = initMap(db[0],db[1]);
            console.log(db[0],db[1])
            console.log(map)
            
        });
    });
});



getISSCoords();