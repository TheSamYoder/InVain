export const createFooter = function() {

const footer = buildElement("div", "footer");
const footerBtn = buildElement("div", "button")
const footerContainer = buildElement("div","container");
const footerCont = buildElement("div", "cont");
const footerCenter = buildElement("div", "footer_center");
const footerTitle = buildElement("h3", "footer-title");
const footerContent = buildElement("ul", "footer-content");
const footerLinks = buildElement("a", undefined, "About Us");
const copyright = buildElement("li", undefined, "InVain Copyright&#169; 2021");
const iTitle = buildElement("i", undefined, "Looking to look good");

footerCenter.appendChild(copyright);
footerContent.appendChild(footerLinks);
footerTitle.appendChild(iTitle);
footerCont.appendChild(footerCenter);
footerCenter.appendChild(footerTitle, footerContent);
footerContainer.appendChild(footerCont);
footer.appendChild(footerBtn, footerContainer);

return footer;

}