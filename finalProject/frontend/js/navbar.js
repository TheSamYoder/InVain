import {
    artistProfile
} from "./artistProfile.js"

import{
    loginPage
} from "./loginPage.js"

import {
    displayAllPros, displayProsBySpecialty
} from "./professionals.js";

export const createNavbar = function (professionals) {
    const container = document.querySelector(".container")
    const navbar = document.createElement("nav");
    navbar.classList.add("nav-bar");
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "images/Logo1-2.png";

    navbar.appendChild(logo);

    //-----------------Hair------------------
    const hairDropDown = document.createElement("div");
    hairDropDown.classList.add("dropdown");
    const hairDropDownContent = document.createElement("div");
    hairDropDownContent.classList.add("dropdown-content");
    const hairDropBtn = document.createElement("button");
    hairDropBtn.innerText = "Hair";
    hairDropBtn.classList.add("dropbtn");
    const hairBothBtn = document.createElement("a");
    hairBothBtn.innerText = "Both";
    hairBothBtn.addEventListener("click", artistProfile);

    const barbers = document.createElement("a");
    barbers.innerText = "Barbers";
    barbers.addEventListener("click", () => {
        const barbersTab = window.open('http://google.com', '_self');
    });

    const hairStylists = document.createElement("a");
    hairStylists.innerText = "Hair Stylists";
    hairStylists.addEventListener("click", () => {
        displayProsBySpecialty("HairStylist");
    });

    hairDropDownContent.appendChild(hairBothBtn);
    hairDropDownContent.appendChild(barbers);
    hairDropDownContent.appendChild(hairStylists);
    hairDropDown.appendChild(hairDropBtn);
    hairDropDown.appendChild(hairDropDownContent);
    navbar.appendChild(hairDropDown);


    //-----------------Nails------------------
    const nailDropDown = document.createElement("div");
    nailDropDown.classList.add("dropdown");
    const nailDropBtn = document.createElement("button");
    nailDropBtn.innerText = "Nails";
    nailDropBtn.classList.add("dropbtn");
    const nailDropDownContent = document.createElement("div");
    nailDropDownContent.classList.add("dropdown-content");
    const nailBothBtn = document.createElement("a");
    nailBothBtn.innerText = "Both";
    nailBothBtn.addEventListener("click", () => {
        const nailTab = window.open('http://google.com', '_self');
    });

    const pedicure = document.createElement("a");
    pedicure.innerText = "Pedicure";
    pedicure.addEventListener("click", () => {
        const pedicureTab = window.open('http://google.com', '_self');
    });

    const manicure = document.createElement("a");
    manicure.innerText = "Manicure";
    manicure.addEventListener("click", () => {
        const manicureTab = window.open('http://google.com', '_self');
    });

    nailDropDownContent.appendChild(nailBothBtn);
    nailDropDownContent.appendChild(pedicure);
    nailDropDownContent.appendChild(manicure);
    nailDropDown.appendChild(nailDropBtn);
    nailDropDown.appendChild(nailDropDownContent);
    navbar.appendChild(nailDropDown);
    

    //-----------------Tattoos------------------
    const tattooDropDown = document.createElement("div");
    tattooDropDown.classList.add("dropdown");
    const tattooDropBtn = document.createElement("button");
    tattooDropBtn.innerText = "Tattoos";
    tattooDropBtn.classList.add("dropbtn");
    const tattooDropDownContent = document.createElement("div");
    tattooDropDownContent.classList.add("dropdown-content");
    const tattooBothBtn = document.createElement("a");
    tattooBothBtn.innerText = "Both";
    tattooBothBtn.addEventListener("click", () => {
        const tattooTab = window.open('http://google.com', '_self');
    });

    const coloredInk = document.createElement("a");
    coloredInk.innerText = "Colored Ink";
    coloredInk.addEventListener("click", () => {
        const coloredInkTab = window.open('http://google.com', '_self');
    });

    const blackInk = buildElement("a", undefined, "Black Ink Only");
    blackInk.addEventListener("click", () => {
        const blackInkTab = window.open('http://google.com', '_self');
    });

    tattooDropDownContent.append(tattooBothBtn, coloredInk, blackInk);
    tattooDropDown.append(tattooDropBtn, tattooDropDownContent);
    navbar.append(tattooDropDown);

    //-----------------Login/Join Btn------------------
    const loginDropDown = document.createElement("div");
    loginDropDown.classList.add("dropdown");
    const loginDropBtn = document.createElement("button");
    loginDropBtn.innerText = "Login / Join";
    loginDropBtn.classList.add("dropbtn");
    const loginDropDownContent = document.createElement("div");
    loginDropDownContent.classList.add("dropdown-content");
    const login = buildElement("a", undefined, "Login");
    // login.addEventListener("click", () => {
    //     const loginTab = window.open('http://google.com', '_self');
    // });
    login.addEventListener("click", loginPage);

    const join = buildElement("a", undefined, "Delete this button");
    join.addEventListener("click", () => {
        const join = window.open('http://google.com', '_self');
    });

    loginDropDownContent.append(login, join);
    loginDropDown.append(loginDropBtn, loginDropDownContent);
    navbar.append(loginDropDown);

    return navbar;
}