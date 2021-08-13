import { artistProfile } from "./artistProfile.js";

import{
    loginPage
} from "./loginPage.js"

import {
    displayAllPros, displayProsBySpecialty
} from "./professionals.js";

export const createNavbar = function (professionals) {

  const navbar = buildElement("nav","nav-bar");
  const logo = buildElement("img","logo");
  logo.src = "images/Logo1-2.png";
  navbar.appendChild(logo);

  //-----------------Hair------------------
  const hairDropDown = buildElement("div", "dropdown");
  const hairDropDownContent = buildElement("div","dropdown-content");
  const hairDropBtn = buildElement("button", "dropbtn", "Hair");
  const hairBothBtn = buildElement("a", undefined, "Both");
  hairBothBtn.addEventListener("click", () => {
    displayProsBySpecialty("Barber");
  });
  const barbers = buildElement("a", undefined,"Barbers");
  barbers.addEventListener("click", () => {
    displayProsBySpecialty("Barber");
  });
  const hairStylists = buildElement("a", undefined, "Hair Stylists");
  hairStylists.addEventListener("click", () => {
    displayProsBySpecialty("HairStylist");
  });
  hairDropDownContent.append(hairBothBtn, barbers, hairStylists);
  hairDropDown.append(hairDropBtn, hairDropDownContent);
  navbar.appendChild(hairDropDown);

  //-----------------Nails------------------
  const nailDropDown = buildElement("div","dropdown");
  const nailDropBtn = buildElement("button", "dropbtn", "Nails");
  const nailDropDownContent = buildElement("div", "dropdown-content");
  const nailBothBtn = buildElement("a", undefined,"Both");
  nailBothBtn.addEventListener("click", () => {
    displayProsBySpecialty("Manicurist");
  });
  const pedicure = buildElement("a", undefined, "Pedicure");
  pedicure.addEventListener("click", () => {
    displayProsBySpecialty("Pedicurist");
  });
  const manicure = buildElement("a", undefined, "Manicure");
  manicure.addEventListener("click", () => {
    displayProsBySpecialty("Manicurist");
  });
  nailDropDownContent.append(nailBothBtn, manicure, pedicure);
  nailDropDown.append(nailDropBtn, nailDropDownContent);
  navbar.appendChild(nailDropDown);

  //-----------------Tattoos------------------
  const tattooDropDown = buildElement("div","dropdown");
  const tattooDropBtn = buildElement("button","dropbtn","Tattoos");
  const tattooDropDownContent = buildElement("div","dropdown-content");
  const tattooBothBtn = buildElement("a",undefined,"Both");
  tattooBothBtn.addEventListener("click", () => {
    displayProsBySpecialty("TattooArtist");
  });
  const coloredInk = buildElement("a", undefined, "Colored Ink");
  coloredInk.addEventListener("click", () => {
    displayProsBySpecialty("TattooArtist");
  });
  const blackInk = buildElement("a", undefined, "Black Ink Only");
  blackInk.addEventListener("click", () => {
    displayProsBySpecialty("TattooArtist")
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
};
