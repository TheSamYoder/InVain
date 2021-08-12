import {
    artistProfile
} from "./artistProfile.js"
import {
    fetchProBySpecialty
} from "./fetch.js";
import { contentPage } from "./hair.js";

export const displayAllPros = function (professionals) {
    const mainElement = document.querySelector(".main-content");
    clearChildren(mainElement);

    professionals.then(pros =>
        pros.forEach(pro =>
            mainElement.append(contentPage(pro))
            // const proName = document.createElement("div");
            // proName.innerText = professional.name;
            // proName.addEventListener("click", () => {
            //     artistProfile(professional);
            // });
            // mainElement.appendChild(proName);
        )
    )}

export const displayProsBySpecialty = (specialty) => {
    displayAllPros(fetchProBySpecialty(specialty));
}