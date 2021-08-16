import { fetchByProId } from "./fetch.js";

export const editProfile = (professional) =>{   
    

const mainContent = document.querySelector(".main-content");
clearChildren(mainContent);
console.log(professional);

const mainElement = buildElement("div", "editPage-container");
const editArtistName = buildElement("h1", "edit-artist-name", professional.name);
const editBtnArtistName = buildElement("button", "editBtn-artist-name", "Edit Your Name");

const contentCards = buildElement("div", "content-cards");
const editContentCardImg = buildElement("div", "edit-content-cards_img");
const editArtistImg = buildElementImg("img", professional.profilePhoto, "");
const editBtnArtistPhoto = buildElement("button", "editBtn-artist-photo", "Relace Photo");

const editContentCardInfo = buildElement("div", "edit-content-cards_info");
const editContentCardsTitle = buildElement("div", "edit-content-cards_title");
const editOccupation = buildElement("span", "occupation", "Occupation: " + professional.specialty);
const editBtnOccupation = buildElement("button", "editBtn-occupation", "Edit Occupation");
const editExperience = buildElement("span", "years", "Years: " + professional.experienceYears);
const editBtnExperience = buildElement("button", "editBtn-experience", "Edit Years");
const overallRating = buildElement("span", "overall-rating", "Rating: " + professional.rating + "/10");
const editLocation = buildElement("span", "edit-location", "Location: " + professional.location);
const editBtnLocation = buildElement("button", "editBtn-location", "Edit Location");
const aboutArtist = buildElement("span", "about-artist", "About Artist");
const editArtistInfo = buildElement("p", "edit-artist-info", professional.description);
const editBtnArtistInfo = buildElement("button", "editBtn-experience", "Edit About Artist");
  // ------------------Modal Container----------------------------

  const editModalContainer = document.createElement("div");
  editModalContainer.classList.add("edit-modal-container");
  const scheduleModal = document.createElement("div");
  scheduleModal.classList.add("modals");

  const scheduleBtn = document.createElement("button");
  scheduleBtn.innerText = "Scheduling / Hours of Opp";
  scheduleBtn.classList.add("content-cards_cta");
  scheduleBtn.addEventListener("click", () => {
      const scheduleTab = window.open('http://google.com', '_self');
  })

  const reviewModal = document.createElement("div");
  reviewModal.classList.add("modals");
  const reviewBtn = document.createElement("button");
  reviewBtn.innerText = "Review & Rating";
  reviewBtn.classList.add("content-cards_cta");
  reviewBtn.addEventListener("click", () => {
      const reviewTab = window.open('http://google.com', '_self');
  })

  const messageModal = document.createElement("div");
  messageModal.classList.add("modals");
  const messageBtn = document.createElement("button");
  messageBtn.innerText = "Message Me";
  messageBtn.classList.add("content-cards_cta");
  messageBtn.addEventListener("click", () => {
      const messageTab = window.open('http://google.com', '_self');
  })

  const lastModal = document.createElement("div");
  lastModal.classList.add("modals");
  const lastBtn = document.createElement("button");
  lastBtn.innerText = "Last Modal";
  lastBtn.classList.add("content-cards_cta");
  lastBtn.addEventListener("click", () => {
      const lastTab = window.open('http://google.com', '_self');
  })


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

//     professional.serves.forEach((serve) => {
//         const serviceContent = buildElement("div", "service-content");
//         const serviceName = buildElement("h5", undefined, serve.serveName);
//         const serviceDescription = buildElement("p", undefined, serve.serveDescription);
//         const servicePrice = buildElement("h5", undefined, serve.price);
//         const services = buildElement("div", "services");

//         serviceContent.append(serviceName, serviceDescription, servicePrice);
//         services.appendChild(serviceContent);
//         serviceContainer.appendChild(services);
// });


editContentCardImg.appendChild(editArtistImg, editBtnArtistPhoto);
editContentCardsTitle.append(editOccupation, editBtnOccupation, editExperience, editBtnExperience, overallRating, editLocation, editBtnLocation, aboutArtist, editArtistInfo, editBtnArtistInfo);
scheduleModal.appendChild(scheduleBtn);
reviewModal.appendChild(reviewBtn);
messageModal.appendChild(messageBtn);
lastModal.appendChild(lastBtn);
editModalContainer.append(scheduleModal, reviewModal, messageModal, lastModal);
editContentCardInfo.append(editContentCardsTitle, editModalContainer);
map.appendChild(iframe);
mapContainer.append(locationTitle, map);
contentCards.append(editContentCardImg, editContentCardInfo, mapContainer);

mainElement.append(editArtistName,editBtnArtistName, contentCards, serviceTitle, serviceContainer);
mainContent.appendChild(mainElement);

}