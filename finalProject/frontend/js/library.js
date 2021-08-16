const buildElement = (tag, cl, txt) =>{
    const el = document.createElement(tag);
    if(Array.isArray(cl)) cl.forEach(c => el.classList.add(c))
    if(cl) el.classList.add(cl);
    if(txt) el.innerText = txt;
    return el;
}

const buildElementImg = (tag, src, alt) => {
    const el = document.createElement(tag);
    if (src) el.src = src;
    if (alt) el.alt = alt;
    return el;
}

const clearChildren = (element) => {
    while (element.firstChild) element.removeChild(element.lastChild);
}

Element.prototype.isActive = function() {
    return this.classList.contains("active");
}

Element.prototype.disable= function () {
    this.classList.add("disabled");
}

Element.prototype.resetBtnClass = function() {
    this.classList.remove("active");
    this.classList.remove("disabled");
}

const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);