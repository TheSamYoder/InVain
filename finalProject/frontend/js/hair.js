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
  lowRatingLogic,
  highRatingLogic,
  mostExperienceLogic
} from "./specialtyPage/eventListeners.js";

export const displayAllPros = function (professionals) {
  const mainElement = document.querySelector(".main-content");
  clearChildren(mainElement);

  const hairDiv = buildElement("div");
  const hairTitle = buildElement("h1", undefined, "Professionals Near You");
  const filterElement = buildElement("div", "filter-h2", "Filters");

  // What the buildElement fuction does
  // const filterElement = document.createElement("div");
  // filterElement.classList.add(filter-h2);
  // filterElement.innerText = "Filters"
  const filterBox = buildElement("div", "filter-box");
  const filterButtonContainer = buildElement("div", "mnBtnContainer");
  filterBox.appendChild(filterButtonContainer);
  hairDiv.append(hairTitle, filterElement, filterBox);

  const contentCardContainer = buildElement("div", "cards-container");
  hairDiv.append(contentCardContainer);
  mainElement.append(hairDiv);

  // const sortByFilterBox = buildElement("div", "sort-by-filter-box");
  // const box = buildElement("div", "box");
  // const heading5 = buildElement("h4", "heading-5", "Sort By: ");
  // const lPriceBtn = buildElement("button", ["btn", "Lowest Price"]);
  // const hPriceBtn = buildElement("button", "btn", "Highest Price");
  // const lRatingBtn = buildElement("button", "btn", "Lowest Rating");
  // const hRatingBtn = buildElement("button", "btn", "Highest Rating");

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
  const lowestRatingBtn = buildElement("button", ["btn", "low-rating-button","sort-options"], "Lowest Rating");
  const highestRatingBtn = buildElement("button", ["btn", "highest-rating-button","sort-options"], "Highest Rating");
  const mostExperienceButton = buildElement("button", ["btn", "experience-button","sort-options"], "Most Experienced");

  filterButtonContainer.append(showAllButton, barberButton, stylistButton, maniButton, pediButton, blackInkButton,
    coloredInkButton, onlineSchButton, openOnWeekButton, openOnWeekendsButton, acceptsCashAppBtn, acceptsCashbtn,
    acceptsDebitOrCreditBtn, lowestRatingBtn, highestRatingBtn, mostExperienceButton);

  showAllButton.addEventListener("click", () => handleClick(showAllButtonLogic));
  barberButton.addEventListener("click", () => handleClick(barberLogic));
  stylistButton.addEventListener("click", () => handleClick(stylistLogic));
  maniButton.addEventListener("click", () => handleClick(maniLogic));
  pediButton.addEventListener("click", () => handleClick(pediLogic));
  blackInkButton.addEventListener("click", () => handleClick(blackInkLogic));
  coloredInkButton.addEventListener("click", () => handleClick(colorInkLogic));
  openOnWeekendsButton.addEventListener("click", () => handleClick(openWeekendsLogic));
  onlineSchButton.addEventListener("click", () => handleClick(onlineSchButtonLogic));
  openOnWeekButton.addEventListener("click", () => handleClick(weekdayButtonLogic));
  acceptsCashAppBtn.addEventListener("click", () => handleClick(acceptsCashAppLogic));
  acceptsCashbtn.addEventListener("click", () => handleClick(acceptsCashLogic));
  acceptsDebitOrCreditBtn.addEventListener("click", () => handleClick(acceptsCreditLogic));
  lowestRatingBtn.addEventListener("click", () => handleClick(lowRatingLogic));
  highestRatingBtn.addEventListener("click", () => handleClick(highRatingLogic));
  mostExperienceButton.addEventListener("click", () => handleClick(mostExperienceLogic));
 
  return contentCardCreator(professionals);
};

const handleClick = (fn) => {
  fn();
  return renderProfessionals();
}

export const displayProsBySpecialty = (specialty) => {
  displayAllPros(fetchProBySpecialty(specialty));
  
};

export const renderProfessionals = () => {

  const professionals = getPros();
  const filterOptions = createFilterOptions();
  const sortingOption = getSortingOption();

  return contentCardCreator(professionals, filterOptions, sortingOption);
}

const createFilterOptions = () => {
  const filterOptions = {};

 if ($(".online-button").isActive()) filterOptions.online = true;
 if ($(".weekday-button").isActive()) filterOptions.weekday = true;
 if ($(".weekend-button").isActive()) filterOptions.weekend = true;
 if ($(".app-button").isActive()) filterOptions.app = true;
 if ($(".cash-button").isActive()) filterOptions.cash = true;
 if ($(".credit-button").isActive()) filterOptions.credit = true;

 return filterOptions;
}

const getSortingOption = () => {
  let sortingOption;

  if ($(".low-rating-button").isActive()) sortingOption = (pro1, pro2) => pro1.rating - pro2.rating;
  if ($(".highest-rating-button").isActive()) sortingOption = (pro1, pro2) => pro2.rating - pro1.rating;
  if ($(".experience-button").isActive()) sortingOption = (pro1, pro2) => pro2.experienceYears - pro1.experienceYears;

  return sortingOption;
}


export const getPros = () => {
  let professionals = fetchPros();

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

  return professionals;
}