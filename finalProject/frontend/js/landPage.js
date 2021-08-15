import {
    displayAllPros,
    displayProsBySpecialty
} from "./hair.js";

export const displayLandingPage = function (professionals) {

    const mainContainer = buildElement("main", "land-container");
    const secHair = buildElement("section", "sec-hair");
    const hairInfo = buildElement("div", "hair-info");
    const hairImg = buildElement("img","hair-img");
    hairImg.src = "https://bit.ly/3yD1PIo";
    hairImg.alt = "A barber cutting hair";
    const hairWords = buildElement("div", "hair-words");
    const salonText = buildElement("h3", "salon-text", "Hair Salon");
    salonText.addEventListener("click", () => {
        displayProsBySpecialty("HairStylist")
    });
    // salonText.onmouseover = function(event) {
    //     let target = event.target;
    //     target.style.background = 'rgb(71, 70, 70)';
    //     text.value += `out <- ${target.tagName}\n`;
    //     text.scrollTop = text.scrollHeight;
    //   };

    //   salonText.onmouseout = function(event) {
    //     let target = event.target;
    //     target.style.background = '';

    //     text.value += `out <- ${target.tagName}\n`;
    //     text.scrollTop = text.scrollHeight;
    //   };
    const barberText = buildElement("h3", "barber-text", "Barbershop");
    barberText.addEventListener("click", () => {
        displayProsBySpecialty("Barber")
    });
    const bothText = buildElement("h3", "both-text", "Both");
    bothText.addEventListener("click", () => {
        displayProsBySpecialty("Barber")
    });
    const secNails = buildElement("section","sec-nails");
    const nailsInfo = buildElement("div", "nails-info");
    const nailsImg = buildElement("img","nails-img");
    nailsImg.src = "https://bit.ly/3iAuXKH";
    nailsImg.alt = "A picture of hands and feet";

    const nailWords = buildElement("div", "nail-words");
    const pedText = buildElement("h3", "ped-text", "Pedicure");
    pedText.addEventListener("click", () => {
        displayProsBySpecialty("Pedicurist")
    });
    const manText = buildElement("h3", "man-text", "Manicure");
    manText.addEventListener("click", () => {
        displayProsBySpecialty("Manicurist")
    });
    const styText = buildElement("h3", "sty-text", "Both");
     styText.addEventListener("click", () => {
         displayProsBySpecialty("Manicurist")
     });
    const secTat = buildElement("section", "sec-tat");
    const tattooInfo = buildElement("div", "tattoo-info");
    const tattooImg = buildElement("img","tattoo-img");
    tattooImg.src = "https://bit.ly/3iAuYOL";
    tattooImg.alt = "A picture of a tattoo artist";
    const tattooWords = buildElement("div", "tattoo-words");
    const newTat = buildElement("h3", "new-tat", "Black Ink Only");
    newTat.addEventListener("click", () => {
        displayProsBySpecialty("TattooArtist")
    });
    const coverUps = buildElement("h3", "cover-ups", "Colored Ink");
    coverUps.addEventListener("click", () => {
        displayProsBySpecialty("TattooArtist")
    });
    const enhancements = buildElement("h3", "enhancements", "Both");
    enhancements.addEventListener("click", () => {
        displayProsBySpecialty("TattooArtist")
    });

    hairWords.append(salonText, barberText, bothText);
    hairInfo.append(hairImg, hairWords);
    secHair.append(hairInfo);
    nailWords.append(pedText, manText, styText);
    nailsInfo.append(nailsImg, nailWords);
    secNails.append(nailsInfo);
    tattooWords.append(newTat, coverUps, enhancements);
    tattooInfo.append(tattooImg, tattooWords);
    secTat.append(tattooInfo);
    mainContainer.append(secHair, secNails, secTat);

    return mainContainer;
}