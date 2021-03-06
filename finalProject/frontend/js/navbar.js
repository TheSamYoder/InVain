import {
  barberLogic,
  stylistLogic,
  maniLogic,
  pediLogic,
  blackInkLogic,
  colorInkLogic
} from "./specialtyPage/eventListeners.js";

import {
  loginPage
} from "./loginPage.js"

import {
  displayLandingPage
} from "./landPage.js"

import {
  displayProsBySpecialty,
  displayAllPros,
  renderProfessionals
} from "./hair.js"

export const createNavbar = function () {

  const navbar = buildElement("nav", "nav-bar");
  const logo = buildElement("img", "logo");
  logo.src = "images/Logo1-2.png";
  logo.addEventListener("click", () => {
    location.reload();
  });
  navbar.appendChild(logo);

  //-----------------Hair------------------
  const hairDropDown = buildElement("div", "dropdown");
  const hairDropDownContent = buildElement("div", "dropdown-content");
  const hairDropBtn = buildElement("button", "dropbtn", "Hair");
  const hairBothBtn = buildElement("a", undefined, "Both");
  hairBothBtn.addEventListener("click", () => {
    const promise = displayAllPros(Promise.resolve([]));
    promise.then(() => {
      barberLogic();
      stylistLogic();
      renderProfessionals();
    });
  });
  const barbers = buildElement("a", undefined, "Barbers");
  barbers.addEventListener("click", () => {
    displayProsBySpecialty("Barber");
    barberLogic();
  });
  const hairStylists = buildElement("a", undefined, "Stylists");
  hairStylists.addEventListener("click", () => {
    displayProsBySpecialty("Stylist");
    stylistLogic();
  });
  hairDropDownContent.append(hairBothBtn, barbers, hairStylists);
  hairDropDown.append(hairDropBtn, hairDropDownContent);
  navbar.appendChild(hairDropDown);

  //-----------------Nails------------------
  const nailDropDown = buildElement("div", "dropdown");
  const nailDropBtn = buildElement("button", "dropbtn", "Nails");
  const nailDropDownContent = buildElement("div", "dropdown-content");
  const nailBothBtn = buildElement("a", undefined, "Both");
  nailBothBtn.addEventListener("click", () => {
    const promise = displayAllPros(Promise.resolve([]));
    promise.then(() => {
          maniLogic();
          pediLogic();
          renderProfessionals();
  });
  });
  const pedicure = buildElement("a", undefined, "Pedicure");
  pedicure.addEventListener("click", () => {
    displayProsBySpecialty("Pedicurist");
    pediLogic();
  });
  const manicure = buildElement("a", undefined, "Manicure");
  manicure.addEventListener("click", () => {
    displayProsBySpecialty("Manicurist");
    maniLogic();
  });
  nailDropDownContent.append(nailBothBtn, manicure, pedicure);
  nailDropDown.append(nailDropBtn, nailDropDownContent);
  navbar.appendChild(nailDropDown);

  //-----------------Tattoos------------------
  const tattooDropDown = buildElement("div", "dropdown");
  const tattooDropBtn = buildElement("button", "dropbtn", "Tattoos");
  const tattooDropDownContent = buildElement("div", "dropdown-content");
  const tattooBothBtn = buildElement("a", undefined, "Both");
  tattooBothBtn.addEventListener("click", () => {
     const promise = displayAllPros(Promise.resolve([]));
     promise.then(() => {
           blackInkLogic();
           colorInkLogic();
           renderProfessionals();
  });
});
  const coloredInk = buildElement("a", undefined, "Colored Ink");
  coloredInk.addEventListener("click", () => {
    displayProsBySpecialty("ColorTattoo");
    colorInkLogic();
  });
  const blackInk = buildElement("a", undefined, "Black Ink Only");
  blackInk.addEventListener("click", () => {
    displayProsBySpecialty("BlackInk");
    blackInk();
  });
  tattooDropDownContent.append(tattooBothBtn, coloredInk, blackInk);
  tattooDropDown.append(tattooDropBtn, tattooDropDownContent);
  navbar.append(tattooDropDown);

  //-----------------Login/Join Btn------------------
  const loginDropDown = document.createElement("div");
  loginDropDown.classList.add("dropdown");
  const loginDropBtn = document.createElement("button");
  loginDropBtn.innerText = "Login";
  loginDropBtn.classList.add("loginBtn");
  loginDropBtn.addEventListener("click", loginPage);
  loginDropDown.append(loginDropBtn);
  navbar.append(loginDropDown);

  return navbar;
};