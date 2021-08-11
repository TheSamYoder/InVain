const createFooter = function() {

// FOOTER ELEMENT
const footer = document.createElement("div");
footer.classList.add("footer");

const footerBtn = document.createElement("div");
footerBtn.classList.add("button");

const footerContainer = document.createElement("div");
footerContainer.classList.add("container");

const footerCont = document.createElement("div");
footerCont.classList.add("cont");

const footerCenter = document.createElement("div");
footerCenter.classList.add("footer_center");

const footerTitle = document.createElement("h3");
footerTitle.classList.add("footer-title");

const footerContent = document.createElement("ul");
footerContent.classList.add("footer-content");

const footerLinks = document.createElement("a");
footerLinks.innerText = "About Us"

const copyright = document.createElement("li");
copyright.innerText = "InVain Copyright&#169; 2021";

const iTitle = document.createElement("i");
iTitle.innerHTML = "Looking to look good";



footerContainer.appendChild(footerCont);
footerCenter.appendChild(footerTitle);
footerTitle.appendChild(iTitle);
footerCenter.appendChild(footerContent);
footerCont.appendChild(footerCenter);
footerContent.appendChild(footerLinks);
footerCenter.appendChild(copyright);
// hairDiv.appendChild(footer);
footer.appendChild(footerBtn);
footer.appendChild(footerContainer);

return footer;

}

export {
    createFooter
};