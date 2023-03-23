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
        spaceBetween: 40
      }
  },
  navigation: {
    nextEl: ".container10_controllers-right-arrow",
    prevEl: ".container10_controllers-left-arrow",
  },
});

