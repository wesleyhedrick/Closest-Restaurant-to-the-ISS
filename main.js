import db from './db.js';
import {getISSCoords} from './issCoords.js'
import {initMap, loader} from './googleMaps.js'

let button = document.querySelector('button')

window.addEventListener('issloaded', () => {
    console.log(db)
    button.addEventListener("click", () => {
        loader.load().then(() => {
            // initMap(center.lat, center.lng)
            let map = initMap(db[0],db[1]);
            console.log(db[0],db[1])
            console.log(map)
            
        });
    });
})

getISSCoords()