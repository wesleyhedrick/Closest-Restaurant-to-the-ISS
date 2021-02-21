import db from './db.js'
import ajax from "./ajax.js";
const issCoordsLoadedEvent = new Event('issloaded');

export const getISSCoords = () => {
    ajax("https://api.open-notify.org/iss-now.json", (res) => {
        let r = JSON.parse(res);
        db.push(r.iss_position.latitude)
        db.push(r.iss_position.longitude)  
        window.dispatchEvent(issCoordsLoadedEvent)
    })
};

