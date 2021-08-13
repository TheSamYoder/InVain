export const artistProfile = function (professional) {

    const mainContent = document.querySelector(".main-content");
    clearChildren(mainContent);
    
    const mainElement = buildElement("div", "pro-container");
    const artistName = buildElement("h1","artist-name", professional.name);
    const contentCards = buildElement("div","content-cards");
    const contentCardImg = buildElement("div", "content-cards_img");

    const artistImg = document.createElement("img");
    artistImg.src = professional.profilePhoto;
    artistImg.alt = ""

    const contentCardInfo = buildElement("div", "content-cards_info");
    const contentCardsTitle = buildElement("div", "content-cards_title");
    const occupation = buildElement("span", "occupation", "Occupation: " + professional.specialty);
    const experience = buildElement("span", "years", "Years");
    const overallRating = buildElement("span", "overall-rating","Rating: " + professional.rating + "/10");
    const location = buildElement("span","location", "Location: " + professional.location);
    const aboutArtist = buildElement("span", "about-artist", "About Artist");
    const artistInfo = buildElement("p", "artist-info", + professional.description);


    // ------------------Modal Container----------------------------

    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");
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

    const mapContainer = document.createElement("div");
    mapContainer.classList.add("map-container");
    const locationTitle = document.createElement("h3");
    locationTitle.innerText = "Location";
    const map = document.createElement("div");
    map.classList.add("map");
    let iframe = document.createElement("iframe");
    iframe.src = "https://bit.ly/3AE1cyV"
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("allowfullscreen", "");

    // ------------------Services----------------------------


    const serviceTitle = document.createElement("h2");
    serviceTitle.classList.add("service-title");
    serviceTitle.innerText = "Services & Prices"

    const serviceContainer = document.createElement("div");
    serviceContainer.classList.add("services-container");

    const serviceContent = document.createElement("div");
    serviceContent.classList.add("service-content");

    let serviceName = document.createElement("h5");
    serviceName.innerText = "Razor Shave (complete)";

    let serviceDescription = document.createElement("p");
    serviceDescription.innerText = "Razor shave on head & facial hair";

    let servicePrice = document.createElement("h5");
    servicePrice.innerText = "$$";

    const services = document.createElement("div");
    services.classList.add("services");

    const breakPoint1 = document.createElement("br");
    const breakPoint2 = document.createElement("br");
    const breakPoint3 = document.createElement("br");
    const breakPoint4 = document.createElement("br");
    const breakPoint5 = document.createElement("br");

    // ------------------The Children----------------------------



    contentCardImg.appendChild(artistImg);

    contentCardsTitle.appendChild(occupation);
    contentCardsTitle.appendChild(breakPoint1);
    contentCardsTitle.appendChild(experience);
    contentCardsTitle.appendChild(breakPoint2);
    contentCardsTitle.appendChild(overallRating);
    contentCardsTitle.appendChild(breakPoint3);
    contentCardsTitle.appendChild(location);
    contentCardsTitle.appendChild(breakPoint4);
    contentCardsTitle.appendChild(aboutArtist);
    contentCardsTitle.appendChild(breakPoint5);
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

    serviceContent.appendChild(serviceName,);
    serviceContent.appendChild(serviceDescription);
    serviceContent.appendChild(servicePrice);
    services.appendChild(serviceContent);

    serviceContainer.appendChild(services);

    mainElement.append(artistName, contentCards, serviceTitle, serviceContainer);
    mainContent.appendChild(mainElement);

}

