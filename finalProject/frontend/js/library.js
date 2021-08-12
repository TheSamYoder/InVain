const buildElement = (tag, cl, txt) =>{
    const el = document.createElement(tag);
    if(cl) el.classList.add(cl);
    if(txt) el.innerText = txt;
    return el;
}

const clearChildren = (element) => {
    while (element.firstChild) element.removeChild(element.lastChild);
}