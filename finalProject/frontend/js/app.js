import {
    createNavbar
} from "./navbar.js"

import {
    createFooter
} from "./footer.js"

import {
    displayLandingPage
} from "./landPage.js"

import {
    artistProfile
} from "./artistProfile.js"

import {
    displayAllPros
} from "./professionals.js"

const container = document.querySelector(".container");

const mainContainer = document.createElement("main");

mainContainer.classList.add("main-content");
container.append(createNavbar());
mainContainer.appendChild(displayLandingPage());
// mainContainer.appendChild(artistProfile())
container.appendChild(mainContainer);

// await fetch("http://localhost:8080/api/professionals")
//     .then(response => response.json())
//     .then(professionals => displayAllPros(professionals))
//     .catch(error => console.log(error));
    
