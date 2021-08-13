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

  filterButtonContainer.append(showAllButton, onlineSchButton, openOnWeekButton, openOnWeekendsButton, acceptsCashAppBtn, acceptsCashbtn, acceptsDebitOrCreditBtn, lowestPriceBtn, highestPriceBtn, extraFilterBtnOne, extraFilterBtnTwo);
  filterBox.appendChild(filterButtonContainer);
  hairDiv.append(hairTitle, filterElement, filterBox);

  //Content Cards
  professionals.then((pros) =>
    pros.forEach((pro) => {
      const contentCardElement = buildElement("div","content-cards");
      const contentCardImg = buildElement("div","content-cards_img");
      const cardImg = document.createElement("img");
      cardImg.src = "https://bit.ly/3lVe5jK";

      const contentCardInfo = buildElement("div","content-cards_info");
      const contentCardRatingAndLoc = buildElement("div","content-cards_ratingAndLocation");

      const cardSpan1 = buildElement("span", undefined, pro.name);
      const cardSpan2 = buildElement("span", undefined, "Rating: " + pro.rating);
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
