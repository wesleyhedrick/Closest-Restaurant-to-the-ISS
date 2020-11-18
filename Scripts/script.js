import ajax from "./latLong.js";
import db from "./db.js"
import {makeCard} from "./makecard.js"

ajax("http://api.open-notify.org/iss-now.json", (res) => {
  let r = JSON.parse(res);
  console.log (r)
  let myArry= []
  myArry.push(r.iss_position.latitude)
  myArry.push(r.iss_position.longitude)
  console.log(myArry)
  console.log(res)
  db.push(myArry)
  makeCard()
});
