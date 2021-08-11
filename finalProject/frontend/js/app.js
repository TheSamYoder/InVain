import {
    createNavbar
} from "./navbar.js"

import {
    displayLandingPage
} from "./landPage.js"

import {
    artistProfile
} from "./artistProfile.js"

const container = document.querySelector(".container");

const mainContainer = document.createElement("main");

mainContainer.classList.add("main-content");
container.append(createNavbar());
mainContainer.appendChild(displayLandingPage());
// mainContainer.appendChild(artistProfile())
container.appendChild(mainContainer);