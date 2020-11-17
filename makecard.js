import db from "./db.js"
const root = document.querySelector("#root");
export const makeCard = () => {
  let myArry = db[0]
  let card = document.createElement("div");

  let name = document.createElement("h3");
  name.innerText = `${myArry}`;

  let remove = document.createElement("button");
  remove.innerText = "X";
  remove.addEventListener("click", (evt) => {
    console.dir(evt.target);
    evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
  });

  card.append(name, remove);
  root.append(card);
};