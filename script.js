"use strict";

//Variables
const showModalButtons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//Functions
const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//DOM Events
for (let i = 0; i < showModalButtons.length; i++) {
  showModalButtons[i].addEventListener("click", showModal);
}

closeModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);
