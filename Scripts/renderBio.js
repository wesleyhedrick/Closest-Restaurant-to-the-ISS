import {createElement, createBio} from "./helper.js"
import {renderNav} from './renderNav.js'
import {renderLanding} from './renderLanding.js'
// import {rerenderLanding} from './masterFunction';


export function renderBio(){
    let body = document.querySelector("body"); 
    body.innerHTML = '';
    body.classList.add('mapAndBioBody');
    body.classList.remove('landing')
    body.style.background = 'url(\'./Images/team-bg@2x.png\')';
    let wrapper = createElement("div", "wrapper");
    let h1Container = createElement('div', 'h1-bio-container');
    let bioContainer = createElement('div', 'bio-container-body');
    let h1 = createElement("h1");
    let bio = createElement("div","bio-individual")
    let src = "./Images/desktop-astro.png"
    let nav = renderNav(['Home'],['navigate-home'])
    let shoelBioText = 'Hello, I’m Shoel. Army Veteran (EOD tech), husband and father, and future software developer.'
    let wesBioText = 'My name is Wes. I like to ride my motorcycle, be good to my cat, read a ton, solve problems with code, and use the Oxford comma.'
    let melodyBioText = 'Aloha, I’m Melody. I like surfing, designing, and learning how to code.'
    let davidBioText = 'Hey! I’m David, and I’m an aspiring Software Developer during the day, but at night, I’m an ancient history lover and a huge movie buff.'
    
    let shoel = createBio("Shoel Uddin", shoelBioText, bioContainer, src )
    let wes = createBio("Wes Hedrick", wesBioText, bioContainer, src )
    let melody = createBio("Melody Ulep", melodyBioText, bioContainer, src )
    let david = createBio("David Vaughan", davidBioText, bioContainer, src ) 

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