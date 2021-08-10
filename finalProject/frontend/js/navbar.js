

const createNavbar = function(){
    const container = document.querySelector(".container")
    const navbar = document.createElement("nav");
    navbar.classList.add("nav-bar");
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = `<img class="logo" src="images/Logo1-2.png" />`;


//-----------------Hair------------------
    const hairDropDown = document.createElement("div");
    hairDropDown.classList.add("dropdown");
    const hairDropBtn = document.createElement("button");
    hairDropBtn.innerText = "Hair";
    hairDropBtn.classList.add("dropbtn");
    const hairBothBtn = document.createElement("a");
    hairBothBtn.innerText = "Both";
    hairBothBtn.href = "HairPrototype.html";
    hairBothBtn.addEventListener("click", () =>{
        const hairTab = window.open('http://google.com', '_self');
    });

    const barbers= document.createElement("a");
    barbers.innerText = "Barbers";
    barbers.href = "#";
    barbers.addEventListener("click", () =>{
        const barbersTab = window.open('http://google.com', '_self');
    });

    const hairStylists= document.createElement("a");    
    hairStylists.innerText = "Hair Stylists";
    hairStylists.href = "#";
    hairStylists.addEventListener("click", () =>{
        const hairStylistsTab = window.open('http://google.com', '_self');
    });

//-----------------Nails------------------
const nailDropDown = document.createElement("div");
nailDropDown.classList.add("dropdown");
const nailDropBtn = document.createElement("button");
nailDropBtn.innerText = "Nails";
nailDropBtn.classList.add("dropbtn");
const nailBothBtn = document.createElement("a");
nailBothBtn.innerText = "Both";
nailBothBtn.addEventListener("click", () =>{
    const nailTab = window.open('http://google.com', '_self');
});

const pedicure= document.createElement("a");
pedicure.innerText = "Pedicure";
pedicure.addEventListener("click", () =>{
    const pedicureTab = window.open('http://google.com', '_self');
});

const manicure= document.createElement("a");    
manicure.innerText = "Manicure";
manicure.addEventListener("click", () =>{
    const manicureTab = window.open('http://google.com', '_self');
}); 


//-----------------Tattoos------------------
const tattooDropDown = document.createElement("div");
tattoosDropDown.classList.add("dropdown");
const tattooDropBtn = document.createElement("button");
tattooDropBtn.innerText = "Tattoos";
tattooDropBtn.classList.add("dropbtn");
const tattooBothBtn = document.createElement("a");
tattooBothBtn.innerText = "Both";
tattooBothBtn.addEventListener("click", () =>{
    const tattooTab = window.open('http://google.com', '_self');
});

const coloredInk= document.createElement("a");
coloredInk.innerText = "Colored Ink";
coloredInk.addEventListener("click", () =>{
    const coloredInkTab = window.open('http://google.com', '_self');
});

const blackInk= document.createElement("a");    
blackInk.innerText = "Black Ink Only";
blackInk.addEventListener("click", () =>{
    const blackInkTab = window.open('http://google.com', '_self');
}); 

//-----------------Login/Join Btn------------------
const loginDropDown = document.createElement("div");
loginDropDown.classList.add("dropdown");
const loginDropBtn = document.createElement("button");
loginDropBtn.innerText = "Login / Join";
loginDropBtn.classList.add("dropbtn");

const login= document.createElement("a");
login.innerText = "Colored Ink";
login.addEventListener("click", () =>{
    const loginTab = window.open('http://google.com', '_self');
});

const join= document.createElement("a");    
join.innerText = "Black Ink Only";
join.addEventListener("click", () =>{
    const join = window.open('http://google.com', '_self');
}); 


return navbar
}

export{ navbar };