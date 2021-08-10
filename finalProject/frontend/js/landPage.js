const displayLandingPage = function (professionals) {

    const mainContainer = document.createElement("main");
    mainContainer.classList("landcontainer");

    const secHair = document.createElement("section");
    secHair.classList("secHair");

    const hairInfo = document.createElement("div");
    hairInfo.classList("hairInfo");

    const hairImg = document.createElement("img");
    hairImg.classList("hairImg");
    hairImg.src = "https://bit.ly/3yD1PIo";
    hairImg.alt = "A barber cutting hair";

    const hairWords = document.createElement("div");
    hairWords.classList("hairWords");

    const salonText = document.createElement("h3");
    salonText.classList("salonText");
    salonText.innerText = "Hair Salon";

    const barberText = document.createElement("h3");
    barberText.classList("barberText");
    barberText.innerText = "Barbershop";

    const bothText = document.createElement("h3");
    bothText.classList("bothText");
    bothText.innerText = "Both";

    const secNails = document.createElement("section");
    secNails.classList("secNails");

    const nailsInfo = document.createElement("div");
    nailsInfo.classList("nailsInfo");

    const nailsImg = document.createElement("img");
    nailsImg.classList("nailsImg");
    nailsImg.src = "https://bit.ly/3iAuXKH";
    nailsImg.alt = "A picture of hands and feet";

    const nailWords = document.createElement("div");
    nailWords.classList("nailWords");

    const pedText = document.createElement("h3");
    pedText.classList("pedText");
    pedText.innerText = "Pedicure";

    const medText = document.createElement("h3");
    medText.classList("medText");
    medText.innerText = "Manicure";

    const styText = document.createElement("h3");
    styText.classList("styText");
    styText.innerText = "Style";

    const secTat = document.createElement("section");
    secTat.classList("secTat");

    const tattooInfo = document.createElement("div");
    tattooInfo.classList("tattooInfo");

    const tattooImg = document.createElement("img");
    tattooImg.classList("tattooImg");
    tattooImg.src = "https://bit.ly/3iAuYOL";
    tattooImg.alt = "A picture of a tattoo artist";

    const tattooWords = document.createElement("div");
    tattooWords.classList("tattooWords");

    const newTat = document.createElement("h3");
    newTat.classList("newTat");
    newTat.innerText = "New Tattoo";

    const coverUps = document.createElement("h3");
    coverUps.classList("coverUps");
    coverUps.innerText = "Cover Ups";

    const enhancements = document.createElement("h3");
    enhancements.classList("enhancements");
    enhancements.innerText = "Enhancements";

    hairWords.appendChild(salonText);
    hairWords.appendChild(barberText);
    hairWords.appendChild(bothText);
    hairInfo.appendChild(hairImg);
    hairInfo.appendChild(hairWords);
    secHair.appendChild(hairInfo);

    nailWords.appendChild(pedText);
    nailWords.appendChild(medText);
    nailWords.appendChild(styText);
    nailsInfo.appendChild(nailsImg);
    nailsInfo.appendChild(nailWords);
    secHair.appendChild(nailsInfo);

    tattooWords.appendChild(newTat);
    tattooWords.appendChild(coverUps);
    tattooWords.appendChild(enhancements);
    tattooInfo.appendChild(tattooImg);
    tattooInfo.appendChild(tattooWords);
    secTat.appendChild(tattooInfo);
    
    mainContainer.appendChild(secHair);
    mainContainer.appendChild(secNails);
    mainContainer.appendChild(secTat);

    return mainContainer;
}

export {displayLandingPage};