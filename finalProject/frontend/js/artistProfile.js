import { fetchServeByProId } from "./fetch.js";

export const artistProfile = function (pro) {
  const mainContent = document.querySelector(".main-content");
  clearChildren(mainContent);

  let proSpecialty;
  if (pro.specialty === "BlackInk" || pro.specialty === "ColorTattoo") {
    proSpecialty = "Tattoo Artist";
  } else if (pro.specialty === "Stylist") {
    proSpecialty = "Hair Stylist";
  } else {
    proSpecialty = pro.specialty;
  }


  const mainElement = buildElement("div", "pro-container");
  const artistName = buildElement("h1", "artist-name", pro.name);
  const contentCards = buildElement("div", "content-cards");
  const contentCardImg = buildElement("div", "content-cards_img");
  const artistImg = buildElementImg("img", pro.profilePhoto, "");
  const contentCardInfo = buildElement("div", "content-cards_info");
  const contentCardsTitle = buildElement("div", "content-cards_title");
  const occupation = buildElement("span", "occupation", "Occupation: " + proSpecialty);
  const experience = buildElement("span", "years", "Years: " + pro.experienceYears);
  const overallRating = buildElement("span", "overall-rating", "Rating: " + pro.rating + "/10");
  const location = buildElement("span", "location", "Location: " + pro.location);
  const aboutArtist = buildElement("span", "about-artist", "About Artist");
  const artistInfo = buildElement("p", "artist-info", pro.description);

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
  const contactInfo = buildElement("div", "contact-me", "Call Me: " + pro.phoneNumber);
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
  pro.reviews.forEach((review) => {
    const reviewText = buildElement("div", "review", pro.review);
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

  //   const portfolioBtn = buildElement("button", undefined, "Portfolio");
  //   portfolioBtn.id = "open4";
  //   portfolioBtn.onclick = function () {
  //     modal4.style.display = "block";
  //   };
  //   const portfolioModal = buildElement("div", "openModal");
  //   portfolioModal.id = "modal4";
  //   const portfolioModalContent = ("div", "modal-content");
  //   const portfolioTitle = buildElement("h1", undefined, "Portfolio");
  //   const portfolioImagesBox = buildElement("div", "portfolio-images-box");
  //   // pro.photos.forEach((photo) => {
  //   //   const pic = buildElement("img", "photo");
  //     pic.src = pro.photo;
  //   //   portfolioImagesBox.append(pic);
  //   // });
  //   const portfolioBtnClose = buildElement("button", undefined, "X");
  //   portfolioBtnClose.id = "close4";
  //   portfolioBtnClose.onclick = function () {
  //     modal4.style.display = "none";
  //   };

  //   portfolioModalContent.append(
  //     portfolioTitle,
  //     portfolioImagesBox,
  //     portfolioBtnClose
  //   );
  //   portfolioModal.append(portfolioModalContent);
  //   modalContainer.append(portfolioBtn, portfolioModal);

  // ------------------Map----------------------------

  const mapContainer = buildElement("div", "map-container");
  const locationTitle = buildElement("h3", undefined, "Location: ");
  const map = buildElement("div", "map");
  let iframe = document.createElement("iframe");
  iframe.src = "https://bit.ly/3AE1cyV";
  iframe.setAttribute("loading", "lazy");
  iframe.setAttribute("allowfullscreen", "");

  // ------------------Services----------------------------

  const serviceTitle = buildElement("h2", "service-title", "Services & Prices");
  const serviceContainer = buildElement("div", "service-container");

  pro.serves.forEach((serve) => {
    const serviceContent = buildElement("div", "service-content");
    const serviceName = buildElement("h5", undefined, serve.serveName);
    const serviceDescription = buildElement(
      "p",
      undefined,
      serve.serveDescription
    );
    const servicePrice = buildElement("h5", undefined, serve.price);
    const services = buildElement("div", "services");

    serviceContent.append(serviceName, serviceDescription, servicePrice);
    services.appendChild(serviceContent);
    serviceContainer.appendChild(services);
  });

  const breakPoint1 = document.createElement("br");
  const breakPoint2 = document.createElement("br");
  const breakPoint3 = document.createElement("br");
  const breakPoint4 = document.createElement("br");
  const breakPoint5 = document.createElement("br");

  // ------------------The Appends---------------------------

  contentCardImg.appendChild(artistImg);
  contentCardsTitle.append(
    occupation,
    breakPoint1,
    experience,
    breakPoint2,
    overallRating,
    breakPoint3,
    location,
    breakPoint4,
    aboutArtist,
    breakPoint5,
    artistInfo
  );
  contentCardInfo.append(contentCardsTitle, modalContainer);
  map.appendChild(iframe);
  mapContainer.append(locationTitle, map);
  contentCards.append(contentCardImg, contentCardInfo, mapContainer);

  mainElement.append(artistName, contentCards, serviceTitle, serviceContainer);
  mainContent.appendChild(mainElement);
};
