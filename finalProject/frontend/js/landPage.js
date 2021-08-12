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
    

    const barberText = document.createElement("h3");
    barberText.classList.add("barber-text");
    barberText.innerText = "Barbershop";
    barberText.addEventListener("click", () => {
        const barberTab = window.open('#', '_self');
    });

    const bothText = document.createElement("h3");
    bothText.classList.add("both-text");
    bothText.innerText = "Both";
    bothText.addEventListener("click", () => {
        const bothTab = window.open('#', '_self');
    });

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
    pedText.addEventListener("click", () => {
        const pedTab = window.open('#', '_self');
    });

    const medText = document.createElement("h3");
    medText.classList.add("man-text");
    medText.innerText = "Manicure";
    medText.addEventListener("click", () => {
        const medTab = window.open('#', '_self');
    });

    const styText = document.createElement("h3");
    styText.classList.add("sty-text");
    styText.innerText = "Both";
    styText.addEventListener("click", () => {
        const styTab = window.open('#', '_self');
    });

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
    newTat.addEventListener("click", () => {
        const newTat = window.open('#', '_self');
    });

    const coverUps = document.createElement("h3");
    coverUps.classList.add("cover-ups");
    coverUps.innerText = "Cover Ups";
    coverUps.addEventListener("click", () => {
        const coverTab = window.open('#', '_self');
    });

    const enhancements = document.createElement("h3");
    enhancements.classList.add("enhancements");
    enhancements.innerText = "Enhancements";
    enhancements.addEventListener("click", () => {
        const enhancementTab = window.open('#', '_self');
    });

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