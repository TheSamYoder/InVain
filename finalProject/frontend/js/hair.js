import {
  fetchPros,
  fetchProBySpecialty,
  fetchProBySpecialties
} from "./fetch.js";

import {
  contentCardCreator
}
from "./contentCardCreator.js";

import {
  showAllButtonLogic,
  barberLogic,
  stylistLogic,
  maniLogic,
  pediLogic,
  blackInkLogic,
  colorInkLogic,
  openWeekendsLogic,
  onlineSchButtonLogic,
  weekdayButtonLogic,
  acceptsCashAppLogic,
  acceptsCashLogic,
  acceptsCreditLogic,
  lowPriceLogic,
  highPriceLogic,
  mostExperienceLogic
} from "./specialtyPage/eventListeners.js";

export const displayAllPros = function (professionals) {
  const mainElement = document.querySelector(".main-content");
  clearChildren(mainElement);

  const hairDiv = buildElement("div");
  const hairTitle = buildElement("h1", undefined, "Professionals Near You");
  const filterElement = buildElement("div", "filter-h2", "Filters");
  const filterBox = buildElement("div", "filter-box");
  const filterButtonContainer = buildElement("div", "mnBtnContainer");
  filterBox.appendChild(filterButtonContainer);
  hairDiv.append(hairTitle, filterElement, filterBox);

  const contentCardContainer = buildElement("div", "cards-container");
  hairDiv.append(contentCardContainer);
  mainElement.append(hairDiv);

  const showAllButton = buildElement("button", ["btn", "show-all-button"], "Show all");
  const barberButton = buildElement("button", ["btn", "barber-button", "hair-pros"], "Barber");
  const stylistButton = buildElement("button", ["btn", "stylist-button", "hair-pros"], "Stylist");
  const maniButton = buildElement("button", ["btn", "mani-button","nail-pros"], "Manicurist");
  const pediButton = buildElement("button", ["btn", "pedi-button", "nail-pros"], "Pedicurist");
  const blackInkButton = buildElement("button", ["btn", "bw-button", "tattoo-pros"], "Black Ink");
  const coloredInkButton = buildElement("button", ["btn", "color-button", "tattoo-pros"], "Colored Ink");
  const onlineSchButton = buildElement("button", ["btn", "online-button", "filter-options"], "Online Scheduling");
  const openOnWeekButton = buildElement("button", ["btn", "weekday-button", "filter-options"], "Open on weekdays");
  const openOnWeekendsButton = buildElement("button", ["btn", "weekend-button", "filter-options"], "Open on weekends");
  const acceptsCashAppBtn = buildElement("button", ["btn", "app-button", "filter-options"], "Accepts Cash App");
  const acceptsCashbtn = buildElement("button", ["btn", "cash-button", "filter-options"], "Accepts Cash");
  const acceptsDebitOrCreditBtn = buildElement("button", ["btn", "credit-button", "filter-options"], "Accepts Debit/Credit");
  const lowestPriceBtn = buildElement("button", ["btn", "low-price-button","sort-options"], "Lowest Price");
  const highestPriceBtn = buildElement("button", ["btn", "highest-price-button","sort-options"], "Highest Price");
  const mostExperienceButton = buildElement("button", ["btn", "experience-button","sort-options"], "Most Experienced");

  filterButtonContainer.append(showAllButton, barberButton, stylistButton, maniButton, pediButton, blackInkButton,
    coloredInkButton, onlineSchButton, openOnWeekButton, openOnWeekendsButton, acceptsCashAppBtn, acceptsCashbtn,
    acceptsDebitOrCreditBtn, lowestPriceBtn, highestPriceBtn, mostExperienceButton);

  showAllButton.addEventListener("click", showAllButtonLogic);
  barberButton.addEventListener("click", barberLogic);
  stylistButton.addEventListener("click", stylistLogic);
  maniButton.addEventListener("click", maniLogic);
  pediButton.addEventListener("click", pediLogic);
  blackInkButton.addEventListener("click", blackInkLogic);
  coloredInkButton.addEventListener("click", colorInkLogic);
  openOnWeekendsButton.addEventListener("click", openWeekendsLogic);
  onlineSchButton.addEventListener("click", onlineSchButtonLogic);
  openOnWeekButton.addEventListener("click", weekdayButtonLogic);
  acceptsCashAppBtn.addEventListener("click", acceptsCashAppLogic);
  acceptsCashbtn.addEventListener("click", acceptsCashLogic);
  acceptsDebitOrCreditBtn.addEventListener("click", acceptsCreditLogic);
  lowestPriceBtn.addEventListener("click", lowPriceLogic);
  highestPriceBtn.addEventListener("click", highPriceLogic);
  mostExperienceButton.addEventListener("click", mostExperienceLogic);
 
  contentCardCreator(professionals);
};

export const displayProsBySpecialty = (specialty) => {
  displayAllPros(fetchProBySpecialty(specialty));
};

export const filterProfessionals = () => {
  let professionals = fetchPros();

  const filterOptions = {};

  if ($(".barber-button").isActive() && $(".stylist-button").isActive()) {
    professionals = fetchProBySpecialties("Barber", "Stylist");
  } else if ($(".barber-button").isActive()) professionals = fetchProBySpecialty("Barber");
  else if ($(".stylist-button").isActive()) professionals = fetchProBySpecialty("Stylist");

  if ($(".mani-button").isActive() && $(".pedi-button").isActive()) {
    professionals = fetchProBySpecialties("Manicurist", "Pedicurist");
  } else if ($(".mani-button").isActive()) professionals = fetchProBySpecialty("Manicurist");
  else if ($(".pedi-button").isActive()) professionals = fetchProBySpecialty("Pedicurist");

  if ($(".bw-button").isActive() && $(".color-button").isActive()) {
    professionals = fetchProBySpecialties("BlackInk", "ColorTattoo");
  } else if ($(".bw-button").isActive()) professionals = fetchProBySpecialty("BlackInk");
  else if ($(".color-button").isActive()) professionals = fetchProBySpecialty("ColorTattoo");

  if ($(".online-button").isActive()) filterOptions.online = true;
  if ($(".weekday-button").isActive()) filterOptions.weekday = true;
  if ($(".weekend-button").isActive()) filterOptions.weekend = true;
  if ($(".app-button").isActive()) filterOptions.app = true;
  if ($(".cash-button").isActive()) filterOptions.cash = true;
  if ($(".credit-button").isActive()) filterOptions.credit = true;

  if (professionals) contentCardCreator(professionals, filterOptions);
}