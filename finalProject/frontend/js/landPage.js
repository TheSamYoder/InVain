const displayLandingPage = function (professionals) {

    const mainContainer = document.createElement("main");
    mainContainer.classList.add("land-container");

    const secHair = document.createElement("section");
    secHair.classList.add("sec-hair");

    const hairInfo = document.createElement("div");
    hairInfo.classList.add("hair-info");

    const hairImg = document.createElement("img");
    hairImg.classList.add("hair-img");
    hairImg.src = "https://bit.ly/3yD1PIo";
    hairImg.alt = "A barber cutting hair";

    const hairWords = document.createElement("div");
    hairWords.classList.add("hair-words");

    const salonText = document.createElement("h3");
    salonText.classList.add("salon-text");
    salonText.innerText = "Hair Salon";

    const barberText = document.createElement("h3");
    barberText.classList.add("barber-text");
    barberText.innerText = "Barbershop";

    const bothText = document.createElement("h3");
    bothText.classList.add("both-text");
    bothText.innerText = "Both";

    const secNails = document.createElement("section");
    secNails.classList.add("sec-nails");

    const nailsInfo = document.createElement("div");
    nailsInfo.classList.add("nails-info");

    const nailsImg = document.createElement("img");
    nailsImg.classList.add("nails-img");
    nailsImg.src = "https://bit.ly/3iAuXKH";
    nailsImg.alt = "A picture of hands and feet";

    const nailWords = document.createElement("div");
    nailWords.classList.add("nail-words");

    const pedText = document.createElement("h3");
    pedText.classList.add("ped-text");
    pedText.innerText = "Pedicure";

    const medText = document.createElement("h3");
    medText.classList.add("man-text");
    medText.innerText = "Manicure";

    const styText = document.createElement("h3");
    styText.classList.add("sty-text");
    styText.innerText = "Style";

    const secTat = document.createElement("section");
    secTat.classList.add("sec-tat");

    const tattooInfo = document.createElement("div");
    tattooInfo.classList.add("tattoo-info");

    const tattooImg = document.createElement("img");
    tattooImg.classList.add("tattoo-img");
    tattooImg.src = "https://bit.ly/3iAuYOL";
    tattooImg.alt = "A picture of a tattoo artist";

    const tattooWords = document.createElement("div");
    tattooWords.classList.add("tattoo-words");

    const newTat = document.createElement("h3");
    newTat.classList.add("new-tat");
    newTat.innerText = "New Tattoo";

    const coverUps = document.createElement("h3");
    coverUps.classList.add("cover-ups");
    coverUps.innerText = "Cover Ups";

    const enhancements = document.createElement("h3");
    enhancements.classList.add("enhancements");
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
    secNails.appendChild(nailsInfo);

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