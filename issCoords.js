import db from './db.js'
import ajax from "./ajax.js";

// let latitude = ;
// let longitude = -81.224740;
ajax("http://api.open-notify.org/iss-now.json", (res) => {
    let r = JSON.parse(res);
    console.log (r)
    //let myArry= []
    db.push(r.iss_position.latitude)
    db.push(r.iss_position.longitude)
    console.log ("this is working")
    // console.log(myArry)
    console.log(res)
   //db.push(myArry)
    // makeCard()
});


console.log('populate DB is running')




//import {makeCard} from "./makecard.js"