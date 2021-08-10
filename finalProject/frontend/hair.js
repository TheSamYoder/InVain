// const hairTitle = document.createElement("h1");
// hairTitle.classList.add("text");

//Filter Element Div
const filterElement = document.createElement("div");
filterElement.classList.add("filter-h2");
const filterBox = document.createElement("div");
filterBox.classList.add("filter-box");
const filterButtonContainer = document.createElement("div");
filterButtonContainer.classList.add("myBtnContainer");
filterBox.appendChild(filterButtonContainer);

//Filter Buttons
const showAllButton = document.createElement("button");
showAllButton.classList.add("btn active");
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
filterBox.appendChild(filterButtonContainer);
filterBox.appendChild(showAllButton);
filterBox.appendChild(onlineSchButton);
filterBox.appendChild(openOnWeekButton);
filterBox.appendChild(openOnWeekendsButton);
filterBox.appendChild(acceptsCashAppBtn);
filterBox.appendChild(acceptsCashbtn);
filterBox.appendChild(acceptsDebitOrCreditBtn);
filterBox.appendChild(lowestPriceBtn);
filterBox.appendChild(highestPriceBtn);
filterBox.appendChild(extraFilterBtnOne);
filterBox.appendChild(extraFilterBtnTwo);

//Content Cards 
const contentCardElement = document.createElement("div");
contentCardElement.classList.add("content-cards");

const contentCardImg = document.createElement("div");
contentCardImg.classList.add("content-cards_img");

const cardImg = document.createElement("img");
// cardImg.url = ASK SAM LOL
const contentCardInfo = document.createElement("div");
contentCardInfo.classList.add("content-cards_info");

const contentCardRatingAndLoc = document.createElement("div");
contentCardRatingAndLoc.classList.add("content-cards_ratingAndLocation"); 

const cardSpan1 = document.createElement("span");
// cardSpan1.classList.add(""); ADD SPAN TAGS??

const cardTitle = document.createElement("h1");
cardTitle.classList.add("content-cards_title");
cardTitle.setAttribute("text");

const cardText = document.createElement("p");
cardText.classList.add("content-cards_text");
cardText.setAttribute("text");

const cardCta = document.createElement("p");
cardCta.classList.add("content-cards_cta");
// Make on for every indiv card per every card?
contentCardElement.appendChild(contentCardImg);
contentCardElement.appendChild(cardImg);
contentCardElement.appendChild(contentCardInfo);
contentCardElement.appendChild(contentCardRatingAndLoc);
contentCardElement.appendChild(cardSpan1);
contentCardElement.appendChild(cardTitle);
contentCardElement.appendChild(cardText);
contentCardElement.appendChild(cardCta);


// FOOTER ELEMENT
const footer = document.createElement("div");
footer.classList.add("footer");
const footerBtn = document.createElement("div");
footerBtn.classList.add("button");
const footerContainer = document.createElement("div");
footerContainer.classList.add("container");
const footerCont = document.createElement("div");
footerCont.classList.add("cont");
const footerCenter = document.createElement("div");
footerCenter.classList.add("footer_center");
const footerTitle = document.createElement("h3");
footerTitle.classList.add("footer-title");
const footerContent = document.createElement("ul");
footerContent.classList.add("footer-content");
const footerLinks = document.createElement("a");
footerLinks.classList.add("footer-links");
const copyright = document.createElement("li");
copyright.classList.add("copyright");







