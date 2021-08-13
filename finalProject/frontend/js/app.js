import {
    createNavbar
} from "./navbar.js"

import {
    createFooter
} from "./footer.js"

import {
    displayLandingPage
} from "./landPage.js"


const container = document.querySelector(".container");

const mainContainer = document.createElement("main");

mainContainer.classList.add("main-content");
container.append(createNavbar());
mainContainer.appendChild(displayLandingPage());
container.appendChild(mainContainer);

