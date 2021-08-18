export const displayAboutUs = function () {

    const mainElement = document.querySelector(".main-content");
    clearChildren(mainElement);

    const theBody = buildElement("div","the-body");
    const theTeam = buildElement("section", "the-team");
    const heading = buildElement("h2", "heading", "Meet Our Team");
    const container = buildElement("div","ab-container");

    const profile1 = buildElement("div", "profile");
    const pro1a = buildElement("a");
    pro1a.href = "https://www.linkedin.com/in/dasmine-wright/";
    pro1a.setAttribute('target', '_blank');
    const pro1aImg = buildElementImg("img","images/Dasmine Wright.jpg");
    const pro1name = buildElement("span", "name", "Dasmine");

    pro1a.append(pro1aImg, pro1name);
    profile1.append(pro1a);
    container.append(profile1);

    const profile2 = buildElement("div", "profile");
    const pro2a = buildElement("a");
    pro2a.href = "https://www.linkedin.com/in/mohamed-a-abdulkadir/";
    pro2a.setAttribute('target', '_blank');
    const pro2aImg = buildElementImg("img","images/Mohamed Abdulkadir 2.jpg");
    const pro2name = buildElement("span", "name", "Mohamed");

    pro2a.append(pro2aImg, pro2name);
    profile2.append(pro2a);
    container.append(profile2);

    const profile3 = buildElement("div", "profile");
    const pro3a = buildElement("a");
    pro3a.href = "https://www.linkedin.com/in/david-j-patterson/";
    pro3a.setAttribute('target', '_blank');
    const pro3aImg = buildElementImg("img","images/David.jpg");
    const pro3name = buildElement("span", "name", "David");

    pro3a.append(pro3aImg, pro3name);
    profile3.append(pro3a);
    container.append(profile3);

    const profile4 = buildElement("div", "profile");
    const pro4a = buildElement("a");
    pro4a.href = "https://www.linkedin.com/in/samuelyoder/";
    pro4a.setAttribute('target', '_blank');
    const pro4aImg = buildElementImg("img","images/Sam Yoder.jpg");
    const pro4name = buildElement("span", "name", "Sam");

    pro4a.append(pro4aImg, pro4name);
    profile4.append(pro4a);
    container.append(profile4);

    const profile5 = buildElement("div", "profile");
    const pro5a = buildElement("a");
    pro5a.href = "https://www.linkedin.com/in/harrisonwiggins/";
    pro5a.setAttribute('target', '_blank');
    const pro5aImg = buildElementImg("img","images/Dasmine Wright.jpg");
    const pro5name = buildElement("span", "name", "Harrison");

    pro5a.append(pro5aImg, pro5name);
    profile5.append(pro5a);
    container.append(profile5);

    theTeam.append(heading, container);
    theBody.append(theTeam);
    mainElement.append(theBody);
}