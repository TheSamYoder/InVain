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
  onlineSchButtonLogic,
  weekdayButtonLogic
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
  const maniButton = buildElement("button", ["btn", "nail-pros"], "Manicurist");
  const pediButton = buildElement("button", ["btn", "nail-pros"], "Pedicurist");
  const blackInkButton = buildElement("button", ["btn", "tattoo-pros"], "Black Ink");
  const coloredInkButton = buildElement("button", ["btn", "tattoo-pros"], "Colored Ink");
  const onlineSchButton = buildElement("button", ["btn", "online-button", "filter-options"], "Online Scheduling");
  const openOnWeekButton = buildElement("button", ["btn", "weekday-button", "filter-options"], "Open on weekdays");
  const openOnWeekendsButton = buildElement("button", ["btn", "filter-options"], "Open on weekends");
  const acceptsCashAppBtn = buildElement("button", ["btn", "filter-options"], "Accepts Cash App");
  const acceptsCashbtn = buildElement("button", ["btn", "filter-options"], "Accepts Cash");
  const acceptsDebitOrCreditBtn = buildElement("button", ["btn", "filter-options"], "Accepts Debit/Credit");
  const lowestPriceBtn = buildElement("button", ["btn", "sort-options"], "Lowest Price");
  const highestPriceBtn = buildElement("button", ["btn", "sort-options"], "Highest Price");
  const mostExperienceButton = buildElement("button", ["btn", "sort-options"], "Most Experienced");

  filterButtonContainer.append(
    showAllButton,
    barberButton,
    stylistButton,
    maniButton,
    pediButton,
    blackInkButton,
    coloredInkButton,
    onlineSchButton,
    openOnWeekButton,
    openOnWeekendsButton,
    acceptsCashAppBtn,
    acceptsCashbtn,
    acceptsDebitOrCreditBtn,
    lowestPriceBtn,
    highestPriceBtn,
    mostExperienceButton
  );

  showAllButton.addEventListener("click", showAllButtonLogic);
  barberButton.addEventListener("click", barberLogic);
  stylistButton.addEventListener("click", stylistLogic);

  onlineSchButton.addEventListener("click", onlineSchButtonLogic);
  openOnWeekButton.addEventListener("click", weekdayButtonLogic);

  maniButton.addEventListener("click", () => {
    if (maniButton.className === "btn-on") {
      maniButton.className = "btn";
      if (pediButton.className === "btn") {
        stylistButton.className = "btn";
        barberButton.className = "btn";
        blackInkButton.className = "btn";
        coloredInkButton.className = "btn";
      }
    } else {
      maniButton.className = "btn-on";
      stylistButton.className = "btn-disabled";
      barberButton.className = "btn-disabled";
      blackInkButton.className = "btn-disabled";
      coloredInkButton.className = "btn-disabled";
      showAllButton.className = "btn";
    }
  });

  pediButton.addEventListener("click", () => {
    if (pediButton.className === "btn-on") {
      pediButton.className = "btn";
      if (maniButton.className === "btn") {
        stylistButton.className = "btn";
        barberButton.className = "btn";
        blackInkButton.className = "btn";
        coloredInkButton.className = "btn";
      }
    } else {
      pediButton.className = "btn-on";
      stylistButton.className = "btn-disabled";
      barberButton.className = "btn-disabled";
      blackInkButton.className = "btn-disabled";
      coloredInkButton.className = "btn-disabled";
      showAllButton.className = "btn";
    }
  });

  blackInkButton.addEventListener("click", () => {
    if (blackInkButton.className === "btn-on") {
      blackInkButton.className = "btn";
      if (coloredInkButton.className === "btn") {
        stylistButton.className = "btn";
        barberButton.className = "btn";
        maniButton.className = "btn";
        pediButton.className = "btn";
      }
    } else {
      blackInkButton.className = "btn-on";
      stylistButton.className = "btn-disabled";
      barberButton.className = "btn-disabled";
      maniButton.className = "btn-disabled";
      pediButton.className = "btn-disabled";
      showAllButton.className = "btn";
    }
  });

  coloredInkButton.addEventListener("click", () => {
    if (coloredInkButton.className === "btn-on") {
      coloredInkButton.className = "btn";
      if (blackInkButton.className === "btn") {
        stylistButton.className = "btn";
        barberButton.className = "btn";
        maniButton.className = "btn";
        pediButton.className = "btn";
      }
    } else {
      coloredInkButton.className = "btn-on";
      stylistButton.className = "btn-disabled";
      barberButton.className = "btn-disabled";
      maniButton.className = "btn-disabled";
      pediButton.className = "btn-disabled";
      showAllButton.className = "btn";
    }
  });

  openOnWeekendsButton.addEventListener("click", () => {
    if (openOnWeekendsButton.className === "btn-on") {
      openOnWeekendsButton.className = "btn";
    } else {
      openOnWeekendsButton.className = "btn-on";
      showAllButton.className = "btn";
    }
  });

  acceptsCashAppBtn.addEventListener("click", () => {
    if (acceptsCashAppBtn.className === "btn-on") {
      acceptsCashAppBtn.className = "btn";
    } else {
      acceptsCashAppBtn.className = "btn-on";
      showAllButton.className = "btn";
    }
  });

  acceptsCashbtn.addEventListener("click", () => {
    if (acceptsCashbtn.className === "btn-on") {
      acceptsCashbtn.className = "btn";
    } else {
      acceptsCashbtn.className = "btn-on";
      showAllButton.className = "btn";
    }
  });

  acceptsDebitOrCreditBtn.addEventListener("click", () => {
    if (acceptsDebitOrCreditBtn.className === "btn-on") {
      acceptsDebitOrCreditBtn.className = "btn";
    } else {
      acceptsDebitOrCreditBtn.className = "btn-on";
      showAllButton.className = "btn";
    }
  });

  lowestPriceBtn.addEventListener("click", () => {
    if (lowestPriceBtn.className === "btn-on") {
      lowestPriceBtn.className = "btn";
    } else {
      lowestPriceBtn.className = "btn-on";
      highestPriceBtn.className = "btn";
      showAllButton.className = "btn";
    }
  });

  highestPriceBtn.addEventListener("click", () => {
    if (highestPriceBtn.className === "btn-on") {
      highestPriceBtn.className = "btn";
    } else {
      highestPriceBtn.className = "btn-on";
      lowestPriceBtn.className = "btn";
      showAllButton.className = "btn";
    }
  });

  mostExperienceButton.addEventListener("click", () => {
    if (mostExperienceButton.className === "btn-on") {
      mostExperienceButton.className = "btn";
    } else {
      mostExperienceButton.className = "btn-on";
      showAllButton.className = "btn";
    }
  });

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
  // if ($(".manicurist-button").isActive() && $(".pedicurist-button").isActive()) {
  //   professionals = fetchProBySpecialties("Manicurist", "Pedicurist");
  // } else if ($(".manicurist-button").isActive()) professionals = fetchProBySpecialty("Manicuris");
  // else if ($(".pedicurist-button").isActive()) professionals = fetchProBySpecialty("Pedicurist");

  if ($(".online-button").isActive()) filterOptions.online = true;
  if ($(".weekday-button").isActive()) filterOptions.weekday = true;

  if (professionals) contentCardCreator(professionals, filterOptions);
}