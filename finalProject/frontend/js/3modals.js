

const scheduleOpen = document.getElementById('open')
const socialOpen = document.getElementById('open2');
const reviewsOpen = document.getElementById('open3');
const portfolioOpen = document.getElementById('open4');
const scheduleModal = document.getElementById('modal');
const socialModal = document.getElementById('modal2');
const reviewModal = document.getElementById('modal3');
const portfolioModal = document.getElementById('modal4');
const scheduleClose = document.getElementById('close');
const socialClose = document.getElementById('close2');
const reviewsClose = document.getElementById('close3');
const portfolioClose = document.getElementById('close4');

scheduleOpen.onclick = function() {
    modal.style.display = "block";
}

socialOpen.onclick = function () {
    modal2.style.display = "block";
}

reviewsOpen.onclick = function() {
    modal3.style.display = "block";
}
portfolioOpen.onclick = function() {
    modal4.style.display = "block";
}


scheduleClose.onclick = function () {
    modal.style.display = "none";
}

socialClose.onclick = function () {
    modal2.style.display = "none";
}

reviewsClose.onclick = function () {
    modal3.style.display = "none";
}

portfolioClose.onclick = function () {
    modal4.style.display = "none";
}


