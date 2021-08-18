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
const editBtnArtistPhoto = buildElement("button", "editBtn-artist-photo", "Replace Photo");

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

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  const scheduleModal = document.createElement("div");
  scheduleModal.classList.add("openModal");
  scheduleModal.id = "modal";

  const scheduleBtn = document.createElement("button");
  scheduleBtn.innerText = "Scheduling / Business Hours";
  scheduleBtn.classList.add("content-cards_cta");
  scheduleBtn.id = "open";
  scheduleBtn.onclick = function () {
    modal.style.display = "block";
  };

  const scheduleModalContent = buildElement("div", "modal-content");
  const scheduleTitle = document.createElement("h1");
  scheduleTitle.innerText = "Schedule";
  const scheduleModalText = document.createElement("p");
  const mondayWord = document.createElement("small");
  mondayWord.innerText = "Monday - 9am-6pm";
  const tuesdayWord = document.createElement("small");
  tuesdayWord.innerText = "Tuesday - 9am-6pm";
  const wednesdayWord = document.createElement("small");
  wednesdayWord.innerText = "Wednesday - 9am-6pm";
  const thursdayWord = document.createElement("small");
  thursdayWord.innerText = "Thursday - 9am-6pm";
  const fridayWord = document.createElement("small");
  fridayWord.innerText = "Closed";
  const saturdayWord = document.createElement("small");
  saturdayWord.innerText = "Saturday - 9am-6pm";
  const sundayWord = document.createElement("small");
  sundayWord.innerText = "Sunday - 9am-6pm";

  const scheduleBtnClose = buildElement("button", undefined, "Close Me");
  scheduleBtnClose.id = "close";
  scheduleBtnClose.onclick = function () {
    modal.style.display = "none";
  };

  scheduleModalText.append(
    mondayWord,
    tuesdayWord,
    wednesdayWord,
    thursdayWord,
    fridayWord,
    saturdayWord,
    sundayWord
  );
  scheduleModalContent.append(
    scheduleTitle,
    scheduleModalText,
    scheduleBtnClose
  );
  scheduleModal.append(scheduleModalContent);
  modalContainer.append(scheduleBtn, scheduleModal);

  const socialModal = document.createElement("div");
  socialModal.classList.add("openModal");
  socialModal.id = "modal2";
  const socialsBtn = buildElement(
    "button",
    "socialsModal",
    "Social Media/Contact Me"
  );
  socialsBtn.id = "open2";
  socialsBtn.classList.add("content-cards_cta");
  socialsBtn.onclick = function () {
    modal2.style.display = "block";
  };
  const socialsModalContent = buildElement("div", "modal-content");
  const socialsTitle = document.createElement("h1");
  socialsTitle.innerText = "Contact Me"
  const twitterLink = document.createElement("a");
  twitterLink.href = "https://twitter.com";
  twitterLink.alt = "Twitter Link";
  const twitterImage = document.createElement("img");
  twitterImage.classList.add("social-image");
  twitterImage.src = "https://bit.ly/3CVGjRG";
  twitterImage.alt = "Twitter Logo";
  twitterImage.setAttribute("width", "50");
  const instaLink = document.createElement("a");
  instaLink.classList.add("social-image1");
  instaLink.href = "https://instagram.com";
  instaLink.alt = "Instagram Link";
  const instagramImage = document.createElement("img");
  instagramImage.classList.add("social-image1");
  instagramImage.src = "https://bit.ly/2UvY6xy";
  instagramImage.alt = "Instagram logo";
  instagramImage.setAttribute("width", "50");
  const contactInfo = buildElement("div", "contact-me", "Call Me: " + professional.phoneNumber);
  const socialsBtnClose = buildElement("button", undefined, "Close Me");
  socialsBtnClose.id = "close2";
  socialsBtnClose.onclick = function () {
    modal2.style.display = "none";
  };

  socialsModalContent.append(
    socialsTitle,
    twitterLink,
    twitterImage,
    instaLink,
    instagramImage,
    contactInfo,
    socialsBtnClose
  );
  socialModal.append(socialsModalContent);
  modalContainer.append(socialsBtn, socialModal);

  const reviewModal = buildElement("div", "openModal");
  reviewModal.classList.add("modals");
  reviewModal.id = "modal3";
  const reviewsBtn = document.createElement("button");
  reviewsBtn.innerText = "Reviews";
  reviewsBtn.id = "open3";
  reviewsBtn.classList.add("content-cards_cta");
  reviewsBtn.onclick = function () {
    modal3.style.display = "block";
  };
  const reviewsModalContent = buildElement("div", "modal-content");
  const reviewsTitle = buildElement("h1", undefined, "Reviews");
  const reviewsTextBox = buildElement("div", "reviews-text-box");
  professional.reviews.forEach((review) => {
    const reviewText = buildElement("div", "review", professional.review);
    reviewsTextBox.append(reviewText);
  });
  const reviewBtnClose = buildElement("button", undefined, "Close Me");
  reviewBtnClose.id = "close3";
  reviewBtnClose.onclick = function () {
      modal3.style.display = "none";
      
  };

  reviewsModalContent.append(reviewsTitle, reviewsTextBox, reviewBtnClose);
  reviewModal.append(reviewsModalContent);
  modalContainer.append(reviewsBtn, reviewModal);


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
    const services = buildElement("div", "services");

    professional.serves.forEach((serve) => {
        const editServiceContent = buildElement("div", "edit-service-content");
        const editServiceName = buildElement("h5", undefined, serve.serveName);
        const editServiceDescription = buildElement("p", undefined, serve.serveDescription);
        const editServicePrice = buildElement("h5", undefined, serve.price);
        const editBtnServices = buildElement("button", "editBtn-services", "Edit Service");
        const removeBtnServices = buildElement("button", "removeBtn-services", "Remove Service");
        

        editServiceContent.append(editServiceName, editServiceDescription, editServicePrice,editBtnServices,removeBtnServices);
        services.appendChild(editServiceContent);
        
});

serviceContainer.appendChild(services);
editContentCardImg.appendChild(editArtistImg, editBtnArtistPhoto);
editContentCardsTitle.append(editOccupation, editBtnOccupation, editExperience, editBtnExperience, overallRating, editLocation, editBtnLocation, aboutArtist, editArtistInfo, editBtnArtistInfo);
editContentCardInfo.append(editContentCardsTitle, modalContainer);
map.appendChild(iframe);
mapContainer.append(locationTitle, map);
contentCards.append(editContentCardImg, editContentCardInfo, mapContainer);


mainElement.append(editArtistName,editBtnArtistName, contentCards, serviceTitle, serviceContainer);
mainContent.appendChild(mainElement);

}