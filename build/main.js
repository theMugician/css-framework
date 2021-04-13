//Write your script here

// for IE10, .getElementsByClassName()[0];
var toggleMobileMenu = document.querySelector(".js-toggle-mobile-menu")
var mobileMenu = document.querySelector(".nav__mobile-menu")


toggleMobileMenu.addEventListener('click', function() {
  console.log("toggle clicked")
  mobileMenu.classList.toggle("active")
}, 
false)
