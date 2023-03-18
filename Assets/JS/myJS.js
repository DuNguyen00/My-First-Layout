// var owl = $(".owl-carousel");

// owl.owlCarousel(
//   $(document).ready(function(){
//     $('.loop').owlCarousel({
//         center: false,
//         items:3,
//         loop:true,
//         margin: 50,
//         // navContainer: ".arrows",
//         dotsContainer: ".dots",
//         dotsEach: true,
//         responsive:{
//             0: {
//               items: 1,
//             },
//             700: {             
//               items: 2,
//             },
//             1000: {
//               margin: 300,
//               items: 3,
//             },
//           },
//     });
//   })
// );

// // Go to the next item
// $('.container10_controllers-right-arrow').click(function() {
//   owl.trigger('next.owl.carousel');
// })

// // Go to the previous item
// $(".container10_controller-left-arrow").click(function() {
//     owl.trigger('prev.owl.carousel', [300]);
// })


// $(".dot").click(function() {
//   owl.trigger('to.owl.carousel', [$(this).index(), 300]);
// })



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,  
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {    
    400: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: ".container10_controllers-right-arrow",
    prevEl: ".container10_controllers-left-arrow",
  },

});

