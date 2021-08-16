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
const mainContainer = buildElement("main","main-content");

mainContainer.appendChild(displayLandingPage());
container.append(createNavbar(), mainContainer, createFooter());


