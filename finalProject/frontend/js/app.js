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
    contentPage
}   from "./hair.js"

const container = document.querySelector(".container");

const mainContainer = document.createElement("main");

mainContainer.classList.add("main-content");
container.append(createNavbar());
// mainContainer.appendChild(displayLandingPage());
mainContainer.appendChild(createFooter());
mainContainer.appendChild(contentPage());
container.appendChild(mainContainer);