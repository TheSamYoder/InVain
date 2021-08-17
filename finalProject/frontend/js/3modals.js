

const open = document.getElementById('open')
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const close = document.getElementById('close');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');

open.onclick = function() {
    modal.style.display = "block";
}

open2.onclick = function () {
    modal2.style.display = "block";
}

open3.onclick = function() {
    modal3.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

close2.onclick = function () {
    modal2.style.display = "none";
}

close3.onclick = function () {
    modal3.style.display = "none";
}
