import {
    artistProfile,
    clearChildren
} from "./artistProfile.js"

const displayAllPros = function (professionals){
    const mainElement = document.querySelector(".main-content");
    clearChildren(mainElement);

    professionals.forEach(professional => {
        const proName = document.createElement("div");
        proName.innerText = professional.name;
        proName.addEventListener("click", () => {
            artistProfile(professional);
        });
        mainElement.appendChild(proName);
    });
}

export {
    displayAllPros
}