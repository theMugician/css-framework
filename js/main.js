//Write your script here

// for IE10, .getElementsByClassName()[0];
const toggleMobileMenu = document.querySelector(".js-toggle-mobile-menu")
const mobileMenu = document.querySelector(".nav__mobile-menu")


toggleMobileMenu.addEventListener('click', function() {
  console.log("toggle clicked")
  mobileMenu.classList.toggle("active")
}, 
false)

const openModal = document.querySelector(".js-open-modal")
const closeModal = document.querySelector(".js-close-modal")
const modal = document.querySelector(".modal")
