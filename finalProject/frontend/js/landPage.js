export const displayLandingPage = function (professionals) {

    const mainContainer = buildElement("main", "land-container");
    const secHair = buildElement("section", "sec-hair");
    const hairInfo = buildElement("div", "hair-info");

    const hairImg = document.createElement("img");
    hairImg.classList.add("hair-img");
    hairImg.src = "https://bit.ly/3yD1PIo";
    hairImg.alt = "A barber cutting hair";

    const hairWords = buildElement("div", "hair-words");
    const salonText = buildElement("h3", "salon-text", "Hair Salon");
    salonText.addEventListener("click", () => {
        const salonTab = window.open('#', '_self');
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
    const bothText = buildElement("h3", "both-text", "Both");
    const secNails = buildElement("section","sec-nails");
    const nailsInfo = buildElement("div", "nails-info");

    const nailsImg = document.createElement("img");
    nailsImg.classList.add("nails-img");
    nailsImg.src = "https://bit.ly/3iAuXKH";
    nailsImg.alt = "A picture of hands and feet";

    const nailWords = buildElement("div", "nail-words");
    const pedText = buildElement("h3", "ped-text", "Pedicure");
    const medText = buildElement("h3", "man-text", "Manicure");
    const styText = buildElement("h3", "sty-text", "Style");
    const secTat = buildElement("section", "sec-tat");
    const tattooInfo = buildElement("div", "tattoo-info");

    const tattooImg = document.createElement("img");
    tattooImg.classList.add("tattoo-img");
    tattooImg.src = "https://bit.ly/3iAuYOL";
    tattooImg.alt = "A picture of a tattoo artist";

    const tattooWords = buildElement("div", "tattoo-words");
    const newTat = buildElement("h3", "new-tat", "New Tattoo");
    const coverUps = buildElement("h3", "cover-ups", "Cover Ups");
    const enhancements = buildElement("h3", "enhancements", "Enhancements");

    hairWords.append(salonText, barberText, bothText);
    hairInfo.append(hairImg, hairWords);
    secHair.append(hairInfo);

    nailWords.append(pedText, medText, styText);
    nailsInfo.append(nailsImg, nailWords);
    secNails.append(nailsInfo);

    tattooWords.append(newTat, coverUps, enhancements);
    tattooInfo.append(tattooImg, tattooWords);
    secTat.append(tattooInfo);
    
    mainContainer.append(secHair, secNails, secTat);

    return mainContainer;
}