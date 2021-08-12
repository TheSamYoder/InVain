const loginContainer = document.createElement("div");
loginContainer.classList("create-container")

const accountTitles = document.createElement("div");
accountTitles.classList("account-titles");

//h-tags
const h1 = document.createElement("h1")
h1.innerText = "Welcome Back";

const h2 = document.createElement("h2")
h2.innerText = "Please Login";

const userH3 = document.createElement("h3")
userH3.innerText = "User Login";

const artistH3 = document.createElement("h3")
artistH3.innerText = "Artist Login";

const userAccountContainer = document.createElement("div");
userAccountContainer.classList("account-container");

const artistAccountContainer = document.createElement("div");
artistAccountContainer.classList("account-container");

const userLogin = document.createElement("div");
userLogin.classList("user");

const artistLogin = document.createElement("div");
artistLogin.classList("artist");

// Forms
const userForm = document.createElement("form");
userForm.setAttribute("action", "#");

const artistForm = document.createElement("form");
artistForm.setAttribute("action", "#");

// Labels
const userEmailLabel = document.createElement("label");
userEmailLabel.setAttribute("for", "email");
userEmailLabel.innerText = `Email: `;

const artistEmailLabel = document.createElement("label");
artistEmailLabel.setAttribute("for", "email");
artistEmailLabel.innerText = `Email: `;

const userPasswordLabel = document.createElement("label");
userPasswordLabel.setAttribute("for", "password");
userPasswordLabel.innerHTML = `Password: `;

const artistPasswordLabel = document.createElement("label");
artistPasswordLabel.setAttribute("for", "password");
artistPasswordLabel.innerHTML = `Password: `;

// Inputs
const userEmailInput = document.createElement("input");
userEmailInput.setAttribute("type", "text");
userEmailInput.setAttribute("id", "email");
userEmailInput.setAttribute("name", "email");

const artistEmailInput = document.createElement("input");
artistEmailInput.setAttribute("type", "text");
artistEmailInput.setAttribute("id", "email");
artistEmailInput.setAttribute("name", "email");

const userPasswordInput = document.createElement("input");
userPasswordInput.setAttribute("type", "password");
userPasswordInput.setAttribute("id", "password");
userPasswordInput.setAttribute("name", "password");

const artistPasswordInput = document.createElement("input");
artistPasswordInput.setAttribute("type", "password");
artistPasswordInput.setAttribute("id", "password");
artistPasswordInput.setAttribute("name", "password");

//Submit Buttons
// const userSubmitBtn = document.createElement("input");
// userSubmitBtn.classList("submit-btn");
// userSubmitBtn.setAttribute("type" , "submit");
// userSubmitBtn.setAttribute("value" , "submit");

const artistSubmitBtn = document.createElement("input");
artistSubmitBtn.classList("submit-btn");
artistSubmitBtn.setAttribute("type" , "submit");
artistSubmitBtn.setAttribute("value" , "submit");

// const vl = document.createElement("div");
// vl.classList("vl");



accountTitles.appendChild(h1);
accountTitles.appendChild(h2);

// userForm.appendChild(userEmailLabel);
// userForm.appendChild(userEmailInput);
// userForm.appendChild(userPasswordLabel);
// userForm.appendChild(userPasswordInput);
// userLogin.appendChild(userForm);
// userAccountContainer.appendChild(userH3);
// userAccountContainer.appendChild(userLogin);

// userAccountContainer.appendChild(vl);

artistForm.appendChild(artistEmailLabel);
artistForm.appendChild(artistEmailInput);
artistForm.appendChild(artistPasswordLabel);
artistForm.appendChild(artistPasswordInput);
artistLogin.appendChild(artistForm);
artistAccountContainer.appendChild(artistH3);
artistAccountContainer.appendChild(userLogin);


loginContainer.appendChild(userAccountContainer);





