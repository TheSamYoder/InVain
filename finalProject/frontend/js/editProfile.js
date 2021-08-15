export const editProfile = function (professional) {

    const mainContent = document.querySelector(".main-content");
    clearChildren(mainContent);
    
    const editPageBody = buildElement("body", "editPage-body");
   
    const mainElement = buildElement("div", "editPage-container");

    const editArtistName = buildElement("h1","edit-artist-name", professional.name);
    const editBtnArtistName = document.createElement("button");    
    editBtnArtistName.classList.add("editBtn-artist-name");
    editBtnArtistName.innerText("Edit Your Name");

    const contentCards = buildElement("div","content-cards");
    const editContentCardImg = buildElement("div", "edit-content-cards_img");
    const editArtistImg = document.createElement("img");
    editArtistImg.src = professional.profilePhoto;
    editArtistImg.alt = ""
    const editBtnArtistPhoto = document.createElement("button");
    editBtnArtistPhoto.classList.add("editBtn-Artist-Photo");
    editBtnArtistPhoto.innerText("Replace Photo");

    const editContentCardInfo = buildElement("div", "edit-content-cards_info");
    const editContentCardsTitle = buildElement("div", "edit-content-cards_title");
    const editOccupation = buildElement("span", "edit-occupation", "Occupation: " + professional.specialty);
    const editBtnOccupation = document.createElement("button");
    editBtnOccupation.classList.add("editBtn-occupation");
    editBtnOccupation.innerText("Edit Occupation");

    const editExperience = buildElement("span", "years", "Years");
    const editBtnExperience = document.createElement("button");
    editBtnExperience.classList.add("editBtn-years");
    editBtnExperience.innerText("Edit Years");


    const overallRating = buildElement("span", "overall-rating","Rating: " + professional.rating + "/10");
    const editLocation = buildElement("span","edit-location", "Location: " + professional.location);
    const editBtnLocation = document.createElement("button");
    editBtnLocation.classList.add("editBtn-location");
    editBtnLocation.innerText("Edit Location");

    const aboutArtist = buildElement("span", "about-artist", "About Artist");   
    const editArtistInfo = buildElement("p", "edit-artist-info", + professional.description);
    const editBtnArtistInfo = document.createElement("button");
    editBtnArtistInfo.classList.add("editBtn-artist-info")
    editBtnArtistInfo.innerText("Edit About Me");

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
    const serviceContainer = buildElement("div","edit-service-container");
    const editServiceContent = buildElement("div","edit-service-content");
    const editBtnService = document("button");
    editBtnService.classList.add("editBtn-services");
    editBtnService.innerText("Edit Service");

    const removeBtnService = document("button")
    removeBtnService.classList.add("removeBtn-services")
    removeBtnService.innerText("Revmove Service");

    const editServiceName = buildElement("h5", undefined,"Razor Shave (complete)");
    const editServiceDescription = buildElement("p",undefined,"Razor shave on head & facial hair");
    const editServicePrice = buildElement("h5",undefined,"$$");

    const services = buildElement("div","services");
    const breakPoint1 = document.createElement("br");
    const breakPoint2 = document.createElement("br");
    const breakPoint3 = document.createElement("br");
    const breakPoint4 = document.createElement("br");
    const breakPoint5 = document.createElement("br");

    // ------------------The Appends---------------------------

    editContentCardImg.appendChild(editArtistImg, editBtnArtistPhoto);
    editContentCardsTitle.append(editOccupation, editBtnOccupation, editExperience, editBtnExperience, overallRating, editLocation, editBtnLocation, aboutArtist, editArtistInfo, editBtnArtistInfo);
    scheduleModal.appendChild(scheduleBtn);
    reviewModal.appendChild(reviewBtn);
    messageModal.appendChild(messageBtn);
    lastModal.appendChild(lastBtn);
    editModalContainer.append(scheduleModal, reviewModal, messageModal, lastModal);
    contentCardInfo.append(editContentCardsTitle, editModalContainer);
    map.appendChild(iframe);
    mapContainer.append(locationTitle, map);
    contentCards.append(editContentCardImg, editContentCardInfo, mapContainer);
    editServiceContent.append(editServiceName, editServiceDescription, editServicePrice);
    services.appendChild(editServiceContent, editBtnService, removeBtnService);
    serviceContainer.appendChild(services);
    mainElement.append(editArtistName, editBtnArtistName, contentCards, serviceTitle, serviceContainer);
    mainContent.appendChild(mainElement);

}