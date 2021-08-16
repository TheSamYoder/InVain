import {
    filterProfessionals
} from '../hair.js';

export const showAllButtonLogic = () => {

    const showAllButton = $(".show-all-button");
    const allButtons = $$(".btn");

    if (showAllButton.isActive()) {
        showAllButton.classList.toggle("active");
    } else {
        allButtons.forEach(btn => btn.resetBtnClass());
        showAllButton.classList.toggle("active");
    }

    filterProfessionals();
}

export const barberLogic = () => {

    const barberButton = $(".barber-button");
    const stylistButton = $(".stylist-button");
    const showAllButton = $(".show-all-button");
    const notHairPros = $$(".nail-pros, .tattoo-pros");

    if (barberButton.isActive()) {
        barberButton.classList.toggle("active");
        if (!stylistButton.isActive()) {
            notHairPros.forEach(btn => btn.resetBtnClass());
        }
    } else {
        barberButton.classList.toggle("active");
        notHairPros.forEach(btn => btn.disable());
        showAllButton.resetBtnClass();
    }

    filterProfessionals();
}

export const stylistLogic = () => {

    const barberButton = $(".barber-button");
    const stylistButton = $(".stylist-button");
    const showAllButton = $(".show-all-button");
    const notHairPros = $$(".nail-pros, .tattoo-pros");

    if (stylistButton.isActive()) {
        stylistButton.classList.toggle("active");
        if (!barberButton.isActive()) {
            notHairPros.forEach(btn => btn.resetBtnClass());
        }
    } else {
        stylistButton.classList.toggle("active");
        notHairPros.forEach(btn => btn.disable());
        showAllButton.resetBtnClass();
    }

    filterProfessionals();
}

export const onlineSchButtonLogic = () => {

    const onlineSchButton = $(".online-button");
    const showAllButton = $(".show-all-button");

    if (onlineSchButton.isActive()) {
        onlineSchButton.resetBtnClass();
    } else {
        onlineSchButton.classList.toggle("active");
        showAllButton.resetBtnClass();
    }

    filterProfessionals();
}

export const weekdayButtonLogic = () => {

    const weekdayButton = $(".weekday-button");
    const showAllButton = $(".show-all-button");

    if (weekdayButton.isActive()) {
        weekdayButton.resetBtnClass();
    } else {
        weekdayButton.classList.toggle("active");
        showAllButton.resetBtnClass();
    }

    filterProfessionals();
}