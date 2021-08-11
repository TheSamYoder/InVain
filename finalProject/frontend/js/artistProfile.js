const artistProfile = function() {

const mainElement = document.createElement("div");
mainElement.classList.add("container");

const artistName = document.createElement("h1");
artistName.classList("artist-name");
artistName.innerText = "";

const contentCards = document.createElement("div");
contentCards.classList("content-cards");

const contentCardImg = document.createElement("div")
contentCardImg.classList("content-card_img");

const artistImg = document.createElement("img");
artistImg.src = "https://bit.ly/3CDaeht"
artistImg.alt = ""

const contentCardInfo = document.createElement("div");
contentCardInfo.classList("content-cards_info");

const contentCardsTitle = document.createElement("div");
contentCardsTitle.classList("content-card_title");

const occupation = document.createElement("span");
occupation.setAttribute("occupation");
occupation.innerText= "Occupation";

const experience = document.createElement("span");
experience.setAttribute("years");
experience.innerText = "Years";

const overallRating = document.createElement("span");
overallRating.setAttribute("overall-rating");
overallRating.innerText = "Rating";

const location = document.createElement("span");
location.setAttribute("location");
location.innerText = "Location of Shop";

const aboutArtist = document.createElement("span");
aboutArtist.setAttribute("about-artist");
aboutArtist.innerText = `About Artist: `;


const artistInfo = document.createElement("p");
artistInfo.setAttribute("artist-info");
artistInfo.innerText = "Artist Info...";




// ------------------Modal Container----------------------------

const modalContainer = document.createElement("div");
modalContainer.classList.add("modal-container");
const scheduleModal = document.createElement("div");
scheduleModal.classList.add("modals");
const scheduleBtn = document.createElement("button");
scheduleBtn.innerText = "Scheduling / Hours of Opperations";
scheduleBtn.addEventListener("click", () =>{
    const scheduleTab = window.open('http://google.com', '_self');
})

const reviewModal = document.createElement("div");
reviewModal.classList.add("modals");
const reviewBtn = document.createElement("button");
reviewBtn.innerText = "Review & Rating";
reviewBtn.addEventListener("click", () =>{
    const reviewTab = window.open('http://google.com', '_self');
})

const messageModal = document.createElement("div");
messageModal.classList.add("modals");
const messageBtn = document.createElement("button");
messageBtn.innerText = "Message Me";
messageBtn.addEventListener("click", () =>{
    const messageTab = window.open('http://google.com', '_self');
})

const lastModal = document.createElement("div");
lastModal.classList.add("modals");
const lastBtn = document.createElement("button");
lastBtn.innerText = "Last Modal";
lastBtn.addEventListener("click", () =>{
    const lastTab = window.open('http://google.com', '_self');
})


// ------------------Map----------------------------

const mapContainer = document.createElement("div");
mapContainer.classList.add("map-container");
const locationTitle = document.createElement("h3");
locationTitle.innerText = "Location";
const map = document.createElement("div");
map.classList.add("map");
let iframe = document.createElement("iframe");
iframe.src= "#"
iframe.setAttribute("loading", "lazy");
iframe.setAttribute("allowfullscreen", "");

// ------------------Services----------------------------


const serviceTitle = document.createElement("h2");
serviceTitle.classList("service-title");

const serviceContainer = document.createElement("div");
serviceContainer.classList.add("service-container");

const serviceContent = document.createElement("div");
serviceContent.classList.add("service-content");

let serviceName = document.createElement("h5");
serviceName.innerText = "";

let serviceDescription = document.createElement("p");
serviceDescription.innerText = "";

let servicePrice = document.createElement("h5");
servicePrice.innerText = `$` + ``;

const services = document.createElement("div");
services.classList.add("services");


// ------------------The Children----------------------------



contentCardImg.appendChild(artistImg);

contentCardsTitle.appendChild(occupation);
contentCardsTitle.appendChild(experience);
contentCardsTitle.appendChild(overallRating);
contentCardsTitle.appendChild(location);
contentCardsTitle.appendChild(aboutArtist);
contentCardsTitle.appendChild(artistInfo);

scheduleModal.appendChild(scheduleBtn);
reviewModal.appendChild(reviewBtn);
messageModal.appendChild(messageBtn);
lastModal.appendChild(lastBtn);

modalContainer.appendChild(scheduleModal);
modalContainer.appendChild(reviewModal);
modalContainer.appendChild(messageModal);
modalContainer.appendChild(lastModal);

contentCardInfo.appendChild(contentCardsTitle);
contentCardInfo.appendChild(modalContainer);

map.appendChild(iframe);
mapContainer.appendChild(locationTitle);
mapContainer.appendChild(map);

contentCards.appendChild(contentCardImg);
contentCards.appendChild(contentCardInfo);
contentCards.appendChild(mapContainer);

serviceContent.appendChild(serviceName);
serviceContent.appendChild(serviceDescription);
serviceContent.appendChild(servicePrice);
services.appendChild(serviceContent);

serviceContainer.appendChild(services);

mainElement.appendChild(artistName);
mainElement.appendChild(contentCards);
mainElement.appendChild(serviceTitle);
mainElement.appendChild(serviceContainer);

    return mainElement;
}

export{artistProfile};













