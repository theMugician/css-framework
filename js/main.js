//Write your script here

// for IE10, .getElementsByClassName()[0];
/*
const toggleMobileMenu = document.querySelector('.js-toggle-mobile-menu')
const mobileMenu = document.querySelector('.nav__mobile-menu')


toggleMobileMenu.addEventListener('click', function () {
  console.log('toggle clicked')
  mobileMenu.classList.toggle('active')
}, false)
*/
const modal = document.querySelector('.modal')

const toggleModal = document.querySelector('.js-toggle-modal')

/*
const openModal = document.querySelector('.js-open-modal')
const closeModal = document.querySelector('.js-close-modal')

[ openModal, closeModal ].forEach(function (element) {
   element.addEventListener('click', function () {
    console.log('modal clicked')
  	modal.classList.toggle('active')
   })
})
*/

toggleModal.addEventListener('click', function () {
	let targetModalId = this.getAttribute('href')
	targetModalId = targetModalId.slice(1,targetModalId.length)
  let targetModal = document.getElementById(targetModalId)
  console.log(targetModal)
  
  targetModal.classList.toggle('active')
}, false)