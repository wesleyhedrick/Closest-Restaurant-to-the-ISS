import db from './db.js'
import ajax from "./ajax.js";
const evt = new Event('issloaded');

export const getISSCoords = () => {
    ajax("http://api.open-notify.org/iss-now.json", (res) => {
        let r = JSON.parse(res);
        db.push(r.iss_position.latitude)
        db.push(r.iss_position.longitude)  
        window.dispatchEvent(evt)
    })
};

