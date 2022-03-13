//burger-menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   })
}
////////////////////////////////////////////
const menuArrow = document.querySelector('.arrow-down');
const subMenu = document.querySelector('.sub-menu');
if (menuArrow) {
   menuArrow.addEventListener("click", function(a) {
      menuArrow.classList.toggle('_active');
      subMenu.classList.toggle('_active');
   })
}
const menuArrowConsole = document.querySelector('.arrow-down_console');
const subMenuConsole = document.querySelector('.sub-menu_console');
if (menuArrowConsole) {
   menuArrowConsole.addEventListener("click", function(a) {
      menuArrowConsole.classList.toggle('_active');
      subMenuConsole.classList.toggle('_active');
   })
}
const menuArrowUser = document.querySelector('.arrow-down_user');
const subMenuUser = document.querySelector('.sub-menu_user');
if (menuArrowUser) {
   menuArrowUser.addEventListener("click", function(a) {
      menuArrowUser.classList.toggle('_active');
      subMenuUser.classList.toggle('_active');
   })
}



//////////////////////////////////////////////////////////////////

const swiper = new Swiper('.swiper', {
   // Optional parameters
   effect: 'fade',
   direction: 'horizontal',
   loop: true,
   speed: 800,
   spaceBetween: 0,
   autoplay: {
      delay: 3000,
    },
   //autoHeight: true,
 
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable:'true',
    },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
 
 });


 const swiper_exlusive = new Swiper('.swiper_exlusive', {
   // Optional parameters
   slidesPerView: 4,
   direction: 'horizontal',
   loop: false,
   speed: 800,
   rewind: true,
   initialSlide: 0,
   ccenteredSlides: true,
   breakpoints: {
      // when window width is >= 320px
      200: {
         slidesPerView: 1,
         spaceBetween: 40
       },
   320: {
         slidesPerView: 1,
         spaceBetween: 40
       },
      // when window width is >= 480px

      // when window width is >= 640px
   768: {
         slidesPerView: 2,
        spaceBetween: 40
      },
   992: {
      slidesPerView: 2,
      spaceBetween: 50
    },
   1024: {
      slidesPerView: 3,
      spaceBetween: 100
    },
   1366: {
      slidesPerView: 4,
      spaceBetween: 100
    },
      1600: {
         slidesPerView: 5,
         spaceBetween: 100
       },
    },
    ccenteredSlides: true,
   //autoHeight: true,
 

 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper_exlusive-button-next',
     prevEl: '.swiper_exlusive-button-prev',
   },
 
 
 });



let newUsers = 0;
let newUsersCounter = newUsers++;
console.log(newUsersCounter);