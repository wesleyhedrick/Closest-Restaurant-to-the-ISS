import {creatElement, createBio, createElement} from "./helper.js"
import { createBio } from "./helper.js";
import {renderNav} from './renderNav.js'

export function renderBio(){
    let body = document.querySelector("body"); 
    let container = creatElement("div", "container");
    let h1 = creatElement("h1")
    let bio = createElement("div","bio")
    let src = "./Images/desktop-astro.png"
    let nav = renderNav("Home")
    
    let shoel = createBio("Shoel Uddin", "this is bio", container, src )
    let wes = createBio("Wes Hedrick", "this is bio", container, src )
    let melody = createBio("Melody Ulep", "this is bio", container, src )
    let david =createBio("David Vaughan", "this is bio", container, src ) // createBio(sp, par, container, src)

    container.append(h1)
    bio.append(shoel,wes,melody,david)
    container.append(bio)

    return container
}

{/* <div class="container">
            <h1>The Office Team</h1>
            <div class="bio">
                <div class="team-member">
                    <img
                        src="images/desktop-astro.png"
                        alt="Picture of astronaut"
                    />
                    <span>Wes Hendrick</span>
                    <p>
                        Lorem ipsum dolor sit ame */}