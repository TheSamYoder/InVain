import { filterProfessionals } from "../hair.js";

export const showAllButtonLogic = () => {
  const showAllButton = $(".show-all-button");
  const allButtons = $$(".btn");
  if (showAllButton.isActive()) {
    showAllButton.classList.toggle("active");
  } else {
    allButtons.forEach((btn) => btn.resetBtnClass());
    showAllButton.classList.toggle("active");
  }
  filterProfessionals();
};

export const barberLogic = () => {
  const barberButton = $(".barber-button");
  const stylistButton = $(".stylist-button");
  const showAllButton = $(".show-all-button");
  const notHairPros = $$(".nail-pros, .tattoo-pros");
  if (barberButton.isActive()) {
    barberButton.classList.toggle("active");
    if (!stylistButton.isActive()) {
      notHairPros.forEach((btn) => btn.resetBtnClass());
    }
  } else {
    barberButton.classList.toggle("active");
    notHairPros.forEach((btn) => btn.disable());
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const stylistLogic = () => {
  const barberButton = $(".barber-button");
  const stylistButton = $(".stylist-button");
  const showAllButton = $(".show-all-button");
  const notHairPros = $$(".nail-pros, .tattoo-pros");
  if (stylistButton.isActive()) {
    stylistButton.classList.toggle("active");
    if (!barberButton.isActive()) {
      notHairPros.forEach((btn) => btn.resetBtnClass());
    }
  } else {
    stylistButton.classList.toggle("active");
    notHairPros.forEach((btn) => btn.disable());
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const maniLogic = () => {
  const maniButton = $(".mani-button");
  const pediButton = $(".pedi-button");
  const showAllButton = $(".show-all-button");
  const notNailPros = $$(".hair-pros, .tattoo-pros");
  if (maniButton.isActive()) {
    maniButton.classList.toggle("active");
    if (!pediButton.isActive()) {
      notNailPros.forEach((btn) => btn.resetBtnClass());
    }
  } else {
    maniButton.classList.toggle("active");
    notNailPros.forEach((btn) => btn.disable());
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const pediLogic = () => {
  const maniButton = $(".mani-button");
  const pediButton = $(".pedi-button");
  const showAllButton = $(".show-all-button");
  const notNailPros = $$(".hair-pros, .tattoo-pros");
  if (pediButton.isActive()) {
    pediButton.classList.toggle("active");
    if (!maniButton.isActive()) {
      notNailPros.forEach((btn) => btn.resetBtnClass());
    }
  } else {
    pediButton.classList.toggle("active");
    notNailPros.forEach((btn) => btn.disable());
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const blackInkLogic = () => {
  const blackInkButton = $(".bw-button");
  const coloredInkButton = $(".color-button");
  const showAllButton = $(".show-all-button");
  const notTatPros = $$(".hair-pros, .nail-pros");
  if (blackInkButton.isActive()) {
    blackInkButton.classList.toggle("active");
    if (!coloredInkButton.isActive()) {
      notTatPros.forEach((btn) => btn.resetBtnClass());
    }
  } else {
    blackInkButton.classList.toggle("active");
    notTatPros.forEach((btn) => btn.disable());
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const colorInkLogic = () => {
  const blackInkButton = $(".bw-button");
  const coloredInkButton = $(".color-button");
  const showAllButton = $(".show-all-button");
  const notTatPros = $$(".hair-pros, .nail-pros");
  if (coloredInkButton.isActive()) {
    coloredInkButton.classList.toggle("active");
    if (!blackInkButton.isActive()) {
      notTatPros.forEach((btn) => btn.resetBtnClass());
    }
  } else {
    coloredInkButton.classList.toggle("active");
    notTatPros.forEach((btn) => btn.disable());
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const openWeekendsLogic = () => {
  const weekendButton = $(".weekend-button");
  const showAllButton = $(".show-all-button");
  if (weekendButton.isActive()) {
    weekendButton.resetBtnClass();
  } else {
    weekendButton.classList.toggle("active");
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const acceptsCashAppLogic = () => {
  const acceptsCashAppBtn = $(".app-button");
  const showAllButton = $(".show-all-button");
  if (acceptsCashAppBtn.isActive()) {
    acceptsCashAppBtn.resetBtnClass();
  } else {
    acceptsCashAppBtn.classList.toggle("active");
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const onlineSchButtonLogic = () => {
  const onlineSchButton = $(".online-button");
  const showAllButton = $(".show-all-button");

  if (onlineSchButton.isActive()) {
    onlineSchButton.resetBtnClass();
  } else {
    onlineSchButton.classList.toggle("active");
    showAllButton.resetBtnClass();
  }

  filterProfessionals();
};

export const weekdayButtonLogic = () => {
  const weekdayButton = $(".weekday-button");
  const showAllButton = $(".show-all-button");

  if (weekdayButton.isActive()) {
    weekdayButton.resetBtnClass();
  } else {
    weekdayButton.classList.toggle("active");
    showAllButton.resetBtnClass();
  }

  filterProfessionals();
};

export const acceptsCashLogic = () => {
  const acceptsCashbtn = $(".cash-button");
  const showAllButton = $(".show-all-button");

  if (acceptsCashbtn.isActive()) {
    acceptsCashbtn.resetBtnClass();
  } else {
    acceptsCashbtn.classList.toggle("active");
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const acceptsCreditLogic = () => {
  const acceptsDebitOrCreditBtn = $(".credit-button");
  const showAllButton = $(".show-all-button");

  if (acceptsDebitOrCreditBtn.isActive()) {
    acceptsDebitOrCreditBtn.resetBtnClass();
  } else {
    acceptsDebitOrCreditBtn.classList.toggle("active");
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const lowPriceLogic = () => {
  const lowestPriceBtn = $(".low-price-button");
  const highestPriceBtn = $(".highest-price-button");
  const showAllButton = $(".show-all-button");
  if (lowestPriceBtn.isActive()) {
    lowestPriceBtn.resetBtnClass();
  } else {
    lowestPriceBtn.classList.toggle("active");
    highestPriceBtn.resetBtnClass();
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const highPriceLogic = () => {
  const lowestPriceBtn = $(".low-price-button");
  const highestPriceBtn = $(".highest-price-button");
  const showAllButton = $(".show-all-button");
  if (highestPriceBtn.isActive()) {
    highestPriceBtn.resetBtnClass();
  } else {
    highestPriceBtn.classList.toggle("active");
    lowestPriceBtn.resetBtnClass();
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};

export const mostExperienceLogic = () => {
  const mostExperienceButton = $(".experience-button");
  const showAllButton = $(".show-all-button");
  if (mostExperienceButton.isActive()) {
    mostExperienceButton.resetBtnClass();
  } else {
    mostExperienceButton.classList.toggle("active");
    showAllButton.resetBtnClass();
  }
  filterProfessionals();
};
