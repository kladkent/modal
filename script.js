"use strict";

//Variables
const showModalButtons = document.querySelectorAll(".show-modal");
const hiddenElements = document.querySelectorAll(".hidden");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//Functions
const hideModal = function () {
  for (let i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].style.display = "none";
  }
};

const showModal = function () {
  for (let i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].style.display = "block";
  }
};

//DOM Events
for (let i = 0; i < showModalButtons.length; i++) {
  showModalButtons[i].addEventListener("click", showModal);
}

closeModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);
