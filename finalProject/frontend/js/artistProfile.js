import { fetchServeByProId } from "./fetch.js";

export const artistProfile = function (pro) {
  const mainContent = document.querySelector(".main-content");
  
  clearChildren(mainContent);

  const mainElement = buildElement("div", "pro-container");
  const artistName = buildElement("h1", "artist-name", pro.name);
  const contentCards = buildElement("div", "content-cards");
  const contentCardImg = buildElement("div", "content-cards_img");
  const artistImg = buildElementImg("img", pro.profilePhoto, "");
  const contentCardInfo = buildElement("div", "content-cards_info");
  const contentCardsTitle = buildElement("div", "content-cards_title");
  const occupation = buildElement("span", "occupation", "Occupation: " + pro.specialty);
  const experience = buildElement("span", "years", "Years: " + pro.experienceYears);
  const overallRating = buildElement("span", "overall-rating", "Rating: " + pro.rating + "/10");
  const location = buildElement("span", "location", "Location: " + pro.location);
  const aboutArtist = buildElement("span", "about-artist", "About Artist");
  const artistInfo = buildElement("p", "artist-info", pro.description);

  // ------------------Modal Container----------------------------

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  const scheduleModal = document.createElement("div");
  scheduleModal.classList.add("modals");

  const scheduleBtn = document.createElement("button");
  scheduleBtn.innerText = "Scheduling / Hours of Opp";
  scheduleBtn.classList.add("content-cards_cta");
  scheduleBtn.addEventListener("click", () => {
    const scheduleTab = window.open("http://google.com", "_self");
  });

  const reviewModal = document.createElement("div");
  reviewModal.classList.add("modals");
  const reviewBtn = document.createElement("button");
  reviewBtn.innerText = "Review & Rating";
  reviewBtn.classList.add("content-cards_cta");
  reviewBtn.addEventListener("click", () => {
    const reviewTab = window.open("http://google.com", "_self");
  });

  const messageModal = document.createElement("div");
  messageModal.classList.add("modals");
  const messageBtn = document.createElement("button");
  messageBtn.innerText = "Message Me";
  messageBtn.classList.add("content-cards_cta");
  messageBtn.addEventListener("click", () => {
    const messageTab = window.open("http://google.com", "_self");
  });

  const lastModal = document.createElement("div");
  lastModal.classList.add("modals");
  const lastBtn = document.createElement("button");
  lastBtn.innerText = "Last Modal";
  lastBtn.classList.add("content-cards_cta");
  lastBtn.addEventListener("click", () => {
    const lastTab = window.open("http://google.com", "_self");
  });

  // ------------------Map----------------------------

    const mapContainer = buildElement("div","map-container");
    const locationTitle = buildElement("h3",undefined,"Location: ");
    const map = buildElement("div", "map");
    let iframe = document.createElement("iframe");
    iframe.src = "https://bit.ly/3AE1cyV"
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("allowfullscreen", "");

  // ------------------Services----------------------------

    const serviceTitle = buildElement("h2","service-title","Services & Prices");
    const serviceContainer = buildElement("div","service-container");

    pro.serves.forEach((serve) => {
            const serviceContent = buildElement("div", "service-content");
            const serviceName = buildElement("h5", undefined, serve.serveName);
            const serviceDescription = buildElement("p", undefined, serve.serveDescription);
            const servicePrice = buildElement("h5", undefined, serve.price);
            const services = buildElement("div", "services");

            serviceContent.append(serviceName, serviceDescription, servicePrice);
            services.appendChild(serviceContent);
            serviceContainer.appendChild(services);
    })
    
    const breakPoint1 = document.createElement("br");
    const breakPoint2 = document.createElement("br");
    const breakPoint3 = document.createElement("br");
    const breakPoint4 = document.createElement("br");
    const breakPoint5 = document.createElement("br");

    // ------------------The Appends---------------------------

    contentCardImg.appendChild(artistImg);
    contentCardsTitle.append(occupation, breakPoint1, experience, breakPoint2, overallRating, breakPoint3, location, breakPoint4, aboutArtist, breakPoint5, artistInfo);
    scheduleModal.appendChild(scheduleBtn);
    reviewModal.appendChild(reviewBtn);
    messageModal.appendChild(messageBtn);
    lastModal.appendChild(lastBtn);
    modalContainer.append(scheduleModal, reviewModal, messageModal, lastModal);
    contentCardInfo.append(contentCardsTitle, modalContainer);
    map.appendChild(iframe);
    mapContainer.append(locationTitle, map);
    contentCards.append(contentCardImg, contentCardInfo, mapContainer);

    mainElement.append(artistName, contentCards, serviceTitle, serviceContainer);
    mainContent.appendChild(mainElement);

}