// JS for slider
var swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".dots",
    clickable: true,
  },
  breakpoints: {    
    300: {
      slidesPerView: 1
    },
    
    700: {
      slidesPerView: "auto",
      spaceBetween: 40
    },
    
      992: {
        slidesPerView: "auto",
        spaceBetween: 80
      }
  },
  navigation: {
    nextEl: ".container10_controllers-right-arrow",
    prevEl: ".container10_controllers-left-arrow",
  },
});


// JS for toggle responsive nav
const smallNavMenu = document.querySelector(".header_nav-menu");
const smallNav = document.querySelector(".small_nav");
const smallNavItems = document.querySelectorAll(".small_nav ul li a");

smallNavMenu.addEventListener("click", function () {
  smallNav.classList.toggle("small_nav-active");
  document.getElementById("small_nav-active").style.right = 0;
});

smallNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    smallNav.classList.toggle("small_nav-active");
  });
});


// js for scrolling price boxes
const element = document.querySelector('.container1')
const topPos = element.getBoundingClientRect().top + window.pageYOffset
const btn = document.querySelectorAll(".container5 .container5_box-btn"); 

btn.forEach((i) =>{
  i.addEventListener("click", () =>{
    window.scrollTo({
    top: topPos, // scroll so that the element is at the top of the view container5_box-btn
    behavior: 'smooth' // smooth scroll
    });
  });
});