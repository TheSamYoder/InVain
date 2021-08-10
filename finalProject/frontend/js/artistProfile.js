const artistName = document.createElement("h1");
artistName.classList("artist-name");
artistName.innerText = "";

const contentCards = document.createElement("div");
contentCards.classList("content-cards");

const contentCardImg = document.createElement("div")
contentCardImg.classList("content-card_img");
contentCardImg.src = "https://bit.ly/3CDaeht"
contentCardImg.alt = ""


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




















