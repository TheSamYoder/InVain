import {
    artistProfile
} from "./artistProfile.js"

export const contentCardCreator = (professionals, {
    online,
    cash,
    credit,
    app,
    weekend,
    weekday
} = {}) => {

    const contentCardContainer = document.querySelector(".cards-container");
    clearChildren(contentCardContainer);
    let i = 0;
    professionals.then((pros) =>
        pros.forEach((pro) => {
            let check = true;
            const contentCardElement = buildElement("div", "content-cards");
            const contentCardImg = buildElement("div", "content-cards_img");
            const cardImg = document.createElement("img");
            cardImg.src = pro.profilePhoto;
            contentCardElement.id = i++;

            const contentCardInfo = buildElement("div", "content-cards_info");
            const contentCardRatingAndLoc = buildElement("div", "content-cards_ratingAndLocation");

            const cardSpan1 = buildElement("span", undefined, pro.name);
            const cardSpan2 = buildElement("span", undefined, "Rating: " + pro.rating + "(" + pro.ratingCounter + ")");
            const cardSpan3 = buildElement("span", undefined, "Location: " + pro.location);
            const cardTitle = buildElement("h1", "content-cards_title", pro.specialty);
            const cardText = buildElement("p", "content-cards_text", pro.description);
            const cardCta = buildElement("a", "content-cards_cta", "Read More");
            cardCta.addEventListener("click", () => artistProfile(pro));

            contentCardRatingAndLoc.append(cardSpan1, cardSpan2, cardSpan3);
            contentCardInfo.append(contentCardRatingAndLoc, cardTitle, cardText, cardCta);
            contentCardImg.appendChild(cardImg);
            contentCardElement.appendChild(contentCardImg);
            contentCardElement.appendChild(contentCardInfo);

            if (online)
                if (!pro.online) check = false;
            if (cash)
                if (!pro.takesCash) check = false;
            if (credit)
                if (!pro.takesCredit) check = false;
            if (app)
                if (!pro.takesCashApp) check = false;
            if (weekend)
                if (!pro.weekends) check = false;
            if (weekday)
                if (!pro.weekday) check = false;

            if (check) contentCardContainer.append(contentCardElement);
            console.log(pro);
        })
    );

}

export const filterProfessionals = professionals => {

}