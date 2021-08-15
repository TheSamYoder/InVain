import { artistProfile } from "./artistProfile.js";

import {
  fetchProBySpecialty
} from "./fetch.js";

export const displayAllPros = function (professionals) {
  const mainElement = document.querySelector(".main-content");
  clearChildren(mainElement);
  
  const hairDiv = document.createElement("div");
  
  const hairTitle = buildElement("h1", undefined, "Professionals Near You");
  const filterElement = buildElement("div","filter-h2","Filters");
  const filterBox = buildElement("div","filter-box");
  const filterButtonContainer = buildElement("div", "mnBtnContainer");
  filterBox.appendChild(filterButtonContainer);
  const showAllButton = buildElement("button","btn-active","Show all");
  
  const barberButton = buildElement("button", "btn", "Barber");
  barberButton.addEventListener("click", () => {
    if (barberButton.className === 'btn-on') {
      barberButton.className = 'btn'
      if (stylistButton.className === 'btn') {
        maniButton.className = 'btn';
        pediButton.className = 'btn';
        blackInkButton.className = 'btn';
        coloredInkButton.className = 'btn';
      }
    } else {
      barberButton.className = 'btn-on';
      maniButton.className = 'btn-disabled';
      pediButton.className = 'btn-disabled';
      blackInkButton.className = 'btn-disabled';
      coloredInkButton.className = 'btn-disabled';
    }
  })

  const stylistButton = buildElement("button", "btn", "Stylist");
  stylistButton.addEventListener("click", () => {
    if (stylistButton.className === 'btn-on') {
      stylistButton.className = 'btn';
      if (barberButton.className === 'btn') {
        maniButton.className = 'btn';
        pediButton.className = 'btn';
        blackInkButton.className = 'btn';
        coloredInkButton.className = 'btn';
      }
    } else {
      stylistButton.className = 'btn-on';
      maniButton.className = 'btn-disabled';
      pediButton.className = 'btn-disabled';
      blackInkButton.className = 'btn-disabled';
      coloredInkButton.className = 'btn-disabled';
    }
  })

  const maniButton = buildElement("button", "btn", "Manicurist");
  maniButton.addEventListener("click", () => {
    if (maniButton.className === 'btn-on') {
      maniButton.className = 'btn';
      if (pediButton.className === 'btn') {
        stylistButton.className = 'btn';
        barberButton.className = 'btn';
        blackInkButton.className = 'btn';
        coloredInkButton.className = 'btn';
      }
    } else {
      maniButton.className = 'btn-on';
      stylistButton.className = 'btn-disabled';
      barberButton.className = 'btn-disabled';
      blackInkButton.className = 'btn-disabled';
      coloredInkButton.className = 'btn-disabled';
    }
  })

  const pediButton = buildElement("button", "btn", "Pedicurist");
  pediButton.addEventListener("click", () => {
    if (pediButton.className === 'btn-on') {
      pediButton.className = 'btn';
      if (maniButton.className === 'btn') {
        stylistButton.className = 'btn';
        barberButton.className = 'btn';
        blackInkButton.className = 'btn';
        coloredInkButton.className = 'btn';
      }
    } else {
      pediButton.className = 'btn-on';
      stylistButton.className = 'btn-disabled';
      barberButton.className = 'btn-disabled';
      blackInkButton.className = 'btn-disabled';
      coloredInkButton.className = 'btn-disabled';
    }
  })

  const blackInkButton = buildElement("button", "btn", "Black Ink");
   blackInkButton.addEventListener("click", () => {
         if (blackInkButton.className === 'btn-on') {
           blackInkButton.className = 'btn';
           if (coloredInkButton.className === 'btn') {
             stylistButton.className = 'btn';
             barberButton.className = 'btn';
             maniButton.className = 'btn';
             pediButton.className = 'btn';
           }
         } else {
           blackInkButton.className = 'btn-on';
           stylistButton.className = 'btn-disabled';
           barberButton.className = 'btn-disabled';
           maniButton.className = 'btn-disabled';
           pediButton.className = 'btn-disabled';
         }
  })

  const coloredInkButton = buildElement("button","btn","Colored Ink");
   coloredInkButton.addEventListener("click", () => {
         if (coloredInkButton.className === 'btn-on') {
           coloredInkButton.className = 'btn';
           if (blackInkButton.className === 'btn') {
             stylistButton.className = 'btn';
             barberButton.className = 'btn';
             maniButton.className = 'btn';
             pediButton.className = 'btn';
           }
         } else {
           coloredInkButton.className = 'btn-on';
           stylistButton.className = 'btn-disabled';
           barberButton.className = 'btn-disabled';
           maniButton.className = 'btn-disabled';
           pediButton.className = 'btn-disabled';
         }
  })

  const onlineSchButton = buildElement("button","btn","Online Scheduling");
  const openOnWeekButton = buildElement("button","btn","Open on weekdays");
  const openOnWeekendsButton = buildElement("button","btn","Open on weekends");
  const acceptsCashAppBtn = buildElement("button","btn","Accepts Cash App");
  const acceptsCashbtn = buildElement("button","btn","Accepts Cash")
  const acceptsDebitOrCreditBtn = buildElement("button","btn","Accepts Debit/Credit");
  const lowestPriceBtn = buildElement("button","btn","Lowest Price");
  const highestPriceBtn = buildElement("button","btn","Highest Price");
  const extraFilterBtnOne = buildElement("button","btn","Extra Filters");
  const extraFilterBtnTwo = buildElement("button","btn","Extra");

  filterButtonContainer.append(showAllButton, barberButton, stylistButton, 
    maniButton, pediButton, blackInkButton, coloredInkButton, openOnWeekendsButton, 
    openOnWeekendsButton, onlineSchButton, openOnWeekButton, 
    openOnWeekendsButton, acceptsCashAppBtn, acceptsCashbtn, acceptsDebitOrCreditBtn, 
    lowestPriceBtn, highestPriceBtn, extraFilterBtnOne, extraFilterBtnTwo);
  filterBox.appendChild(filterButtonContainer);
  hairDiv.append(hairTitle, filterElement, filterBox);

 

  //Content Cards
  professionals.then((pros) =>
    pros.forEach((pro) => {
      const contentCardElement = buildElement("div","content-cards");
      const contentCardImg = buildElement("div","content-cards_img");
      const cardImg = document.createElement("img");
      cardImg.src = pro.profilePhoto;

      const contentCardInfo = buildElement("div","content-cards_info");
      const contentCardRatingAndLoc = buildElement("div","content-cards_ratingAndLocation");

      const cardSpan1 = buildElement("span", undefined, pro.name);
      const cardSpan2 = buildElement("span", undefined, "Rating: " + pro.rating + "(" + pro.ratingCounter + ")");
      const cardSpan3 = buildElement("span", undefined, "Location: " + pro.location);
      const cardTitle = buildElement("h1","content-cards_title", pro.specialty);
      const cardText = buildElement("p", "content-cards_text", pro.description);
      const cardCta = buildElement("a","content-cards_cta","Read More");
      cardCta.addEventListener("click", () => artistProfile(pro));

      contentCardRatingAndLoc.append(cardSpan1, cardSpan2, cardSpan3);
      contentCardInfo.append(contentCardRatingAndLoc, cardTitle, cardText, cardCta);
      contentCardImg.appendChild(cardImg);
      contentCardElement.appendChild(contentCardImg);
      contentCardElement.appendChild(contentCardInfo);
      hairDiv.appendChild(contentCardElement);
    })
  );
    mainElement.append(hairDiv);
};

export const displayProsBySpecialty = (specialty) => {
  displayAllPros(fetchProBySpecialty(specialty));
}
