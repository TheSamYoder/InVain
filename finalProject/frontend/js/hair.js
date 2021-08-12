import { artistProfile } from "./artistProfile.js";
export const contentPage = function (pro) {
  const hairDiv = document.createElement("div");
  

  const hairTitle = document.createElement("h1");
  hairTitle.innerText = "Hair Profesionals Near You";

  //Filter Element Div
  const filterElement = document.createElement("div");
  filterElement.classList.add("filter-h2");
  filterElement.innerText = "Filters";
  const filterBox = document.createElement("div");
  filterBox.classList.add("filter-box");
  const filterButtonContainer = document.createElement("div");
  filterButtonContainer.classList.add("myBtnContainer");
  filterBox.appendChild(filterButtonContainer);

  //Filter Buttons
  const showAllButton = document.createElement("button");
  showAllButton.classList.add("btn-active");
  showAllButton.innerText = "Show all";

  const onlineSchButton = document.createElement("button");
  onlineSchButton.classList.add("btn");
  onlineSchButton.innerText = "Online Scheduling";

  const openOnWeekButton = document.createElement("button");
  openOnWeekButton.classList.add("btn");
  openOnWeekButton.innerText = "Open on weekdays";

  const openOnWeekendsButton = document.createElement("button");
  openOnWeekendsButton.classList.add("btn");
  openOnWeekendsButton.innerText = "Open on weekends";

  const acceptsCashAppBtn = document.createElement("button");
  acceptsCashAppBtn.classList.add("btn");
  acceptsCashAppBtn.innerText = "Accepts Cashapp";

  const acceptsCashbtn = document.createElement("button");
  acceptsCashbtn.classList.add("btn");
  acceptsCashbtn.innerText = "Accepts Cash";

  const acceptsDebitOrCreditBtn = document.createElement("button");
  acceptsDebitOrCreditBtn.classList.add("btn");
  acceptsDebitOrCreditBtn.innerText = "Accepts Debit/Credit";

  const lowestPriceBtn = document.createElement("button");
  lowestPriceBtn.classList.add("btn");
  lowestPriceBtn.innerText = "Lowest Price";

  const highestPriceBtn = document.createElement("button");
  highestPriceBtn.classList.add("btn");
  highestPriceBtn.innerText = "Highest Price";

  const extraFilterBtnOne = document.createElement("button");
  extraFilterBtnOne.classList.add("btn");
  extraFilterBtnOne.innerText = "Extra Filters";

  const extraFilterBtnTwo = document.createElement("button");
  extraFilterBtnTwo.classList.add("btn");
  extraFilterBtnTwo.innerText = "Extra";

  const breakPoint = document.createElement("br");
  const breakPoint1 = document.createElement("br");
  const breakPoint2 = document.createElement("br");
  const breakPoint3 = document.createElement("br");

  filterButtonContainer.appendChild(showAllButton);
  filterButtonContainer.appendChild(onlineSchButton);
  filterButtonContainer.appendChild(openOnWeekButton);
  filterButtonContainer.appendChild(openOnWeekendsButton);
  filterButtonContainer.appendChild(acceptsCashAppBtn);
  filterButtonContainer.appendChild(acceptsCashbtn);
  filterButtonContainer.appendChild(acceptsDebitOrCreditBtn);
  filterButtonContainer.appendChild(lowestPriceBtn);
  filterButtonContainer.appendChild(highestPriceBtn);
  filterButtonContainer.appendChild(extraFilterBtnOne);
  filterButtonContainer.appendChild(extraFilterBtnTwo);
  filterBox.appendChild(filterButtonContainer);
  hairDiv.appendChild(hairTitle);
  hairDiv.appendChild(filterElement);
  hairDiv.appendChild(breakPoint);
  hairDiv.appendChild(filterBox);
  hairDiv.appendChild(breakPoint1);

  //Content Cards
  const contentCardElement = document.createElement("div");
  contentCardElement.classList.add("content-cards");

  const contentCardImg = document.createElement("div");
  contentCardImg.classList.add("content-cards_img");

  const cardImg = document.createElement("img");
  cardImg.src = "https://bit.ly/3lVe5jK";

  const contentCardInfo = document.createElement("div");
  contentCardInfo.classList.add("content-cards_info");

  const contentCardRatingAndLoc = document.createElement("div");
  contentCardRatingAndLoc.classList.add("content-cards_ratingAndLocation");

  const cardSpan1 = document.createElement("span");
  cardSpan1.innerText = "Angelo Moore";
  // This is where the artists name will be
  const cardSpan2 = document.createElement("span");
  cardSpan2.innerText = "Rating: 5 stars";
  // This is where the rating will be listed
  const cardSpan3 = document.createElement("span");
  cardSpan3.innerText = "Location: Columbus";
  // This is where the location will be listed

  const cardTitle = document.createElement("h1");
  cardTitle.classList.add("content-cards_title");
  cardTitle.innerText = "Barber";

  const cardText = document.createElement("p");
  cardText.classList.add("content-cards_text");
  cardText.innerText =
    "The studio has been a part of the neighborhood for more than five years, and its name comes from a brand of double-edged razors that had been popular in the 1950s and 1960s. The team commits to delivering affordable, high-quality haircuts, and it focuses on blending, fading, and tapering";

  const cardCta = document.createElement("a");
  cardCta.classList.add("content-cards_cta");
  cardCta.innerText = "Read more";
  cardCta.addEventListener("click", () => artistProfile(pro))

  contentCardRatingAndLoc.append(
    cardSpan1,
    breakPoint2,
    cardSpan2,
    breakPoint3,
    cardSpan3
  );
  contentCardInfo.append(contentCardRatingAndLoc, cardTitle, cardText, cardCta);
  contentCardImg.appendChild(cardImg);
  contentCardElement.appendChild(contentCardImg);
  contentCardElement.appendChild(contentCardInfo);
  hairDiv.appendChild(contentCardElement);

  return hairDiv;
};
