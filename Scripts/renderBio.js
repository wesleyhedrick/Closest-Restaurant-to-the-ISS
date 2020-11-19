import {createElement, createBio} from "./helper.js"
import {renderNav} from './renderNav.js'
import {renderLanding} from './renderLanding.js'
// import {rerenderLanding} from './masterFunction';


export function renderBio(){
    let body = document.querySelector("body"); 
    body.style.background = 'url(\'./Images/team-bg@2x.png\')';
    body.innerHTML = '';
    let wrapper = createElement("div", "wrapper");
    let h1Container = createElement('div', 'h1-bio-container');
    let bioContainer = createElement('div', 'bio-container-body');
    let h1 = createElement("h1");
    let bio = createElement("div","bio-individual")
    let src = "./Images/desktop-astro.png"
    let nav = renderNav(['Home'],['navigate-home'])
    let shoel = createBio("Shoel Uddin", "this is bio", bioContainer, src )
    let wes = createBio("Wes Hedrick", "this is bio", bioContainer, src )
    let melody = createBio("Melody Ulep", "this is bio", bioContainer, src )
    let david = createBio("David Vaughan", "this is bio", bioContainer, src ) // createBio(sp, par, container, src)

    h1.classList.add('h1-bio');
    h1.innerText = 'Creators';
    h1Container.append(h1);    wrapper.append(h1Container);
    wrapper.append(bioContainer);
    body.append(wrapper);
    body.append(nav);

    let button = document.querySelector('.navigate-home');
    button.addEventListener('click', ()=>{
        location.reload();
    })
    
}