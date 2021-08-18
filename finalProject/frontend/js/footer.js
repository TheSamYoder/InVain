import { displayAboutUs } from "./aboutUs.js"

export const createFooter = function() {

const footer = buildElement("div", "footer");
const footerBtn = buildElement("div");
footerBtn.id = "button";
const footerContainer = buildElement("div");
footerContainer.id = "container";
const footerCont = buildElement("div");
footerCont.id = "cont";
const footerCenter = buildElement("div", "footer_center");
const footerTitle = buildElement("h3", "footer-title");
const footerContent = buildElement("ul", "footer-content");
const footerLinks = buildElement("a", "footer-links", "About Us");
footerLinks.addEventListener("click", displayAboutUs);
const copyright = buildElement("li", "copyright", "InVain Copyright 2021");
const iTitle = buildElement("i", undefined, "Looking to look good");
const footerLink2 = buildElement("a", "footer-links", "Back To Top");
const footerLink3 = buildElement("a", "footer-links", "Extra Link");


footerContent.append(footerLink2, footerLinks, footerLink3);
footerTitle.append(iTitle);
footerCenter.append(footerTitle, footerContent, copyright);
footerCont.append(footerCenter);
footerContainer.append(footerCont);
footer.append(footerBtn, footerContainer);

return footer;

}