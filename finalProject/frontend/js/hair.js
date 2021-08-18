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
  const filterElement = buildElement("div", "filter-h2");

  const filterBox = buildElement("div", "filter-box");
  const filterButtonContainer = buildElement("div", "w-layout-grid");
  const hairFilterBox = buildElement("div", "hair-filter-box");
  const nailFilterBox = buildElement("div", "nail-filter-box");
  const tattooFilterBox = buildElement("div", "tattoo-filter-box");
  const sortByFilterBox = buildElement("div", "sort-by-filter-box");
  const hairHeading = buildElement("h4", "heading", "Hair Filters");
  const nailHeading = buildElement("h4", "heading-2", "Nail Filters");
  const tattooHeading = buildElement("h4", "heading-3", "Tattoo Filters");
  const sortingHeading = buildElement("h4", "heading-5", "Sort By:");
  const filterHeading = buildElement("h4", "heading-6", "Filters:")
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
  const lowestRatingBtn = buildElement("button", ["btn", "low-rating-button","sort-options"], "Lowest Rating");
  const highestRatingBtn = buildElement("button", ["btn", "highest-rating-button","sort-options"], "Highest Rating");
  const mostExperienceButton = buildElement("button", ["btn", "experience-button","sort-options"], "Most Experienced");

  const proButtDiv = buildElement("div", "pro-butts");
  const hairButtDiv = buildElement("div", "hair-buttons");
  const nailButtDiv = buildElement("div", "nail-buttons");
  const inkButtDiv = buildElement("div", "ink-buttons");
  const sortButtDiv = buildElement("div", "sort-butts");
  const filterButtDiv1 = buildElement("div", "filter-butts");
  const filterButtDiv2 = buildElement("div", "filter-butts2");

  const filterFilterBox = buildElement("div", "filter-filter-box")
  hairButtDiv.append(barberButton,stylistButton);
  hairFilterBox.append(hairHeading, hairButtDiv);
  nailButtDiv.append(maniButton, pediButton);
  nailFilterBox.append(nailHeading, nailButtDiv);
  inkButtDiv.append(blackInkButton, coloredInkButton)
  tattooFilterBox.append(tattooHeading, inkButtDiv);
  proButtDiv.append(hairFilterBox, nailFilterBox, tattooFilterBox);
  sortButtDiv.append(lowestRatingBtn, highestRatingBtn, mostExperienceButton)
  sortByFilterBox.append(sortingHeading, sortButtDiv);
  filterButtDiv1.append(showAllButton, onlineSchButton, openOnWeekButton, openOnWeekendsButton);
  filterButtDiv2.append(acceptsCashAppBtn, acceptsCashbtn, acceptsDebitOrCreditBtn);
  filterFilterBox.append(filterHeading, filterButtDiv1, filterButtDiv2);
  filterButtonContainer.append(proButtDiv,sortByFilterBox,filterFilterBox);


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