var owl = $(".owl-carousel");

owl.owlCarousel(
  $(document).ready(function(){
    $('.loop').owlCarousel({
        center: false,
        items:3,
        loop:true,
        margin: 10,
        // navContainer: ".arrows",
        dotsContainer: ".dots",
        dotsEach: true,
        responsive:{
            0: {
              items: 1,
            },
            700: {             
              items: 2,
            },
            1000: {
              margin: 300,
              items: 3,
            },
          },
    });
  })
);

// Go to the next item
$(".container10_controllers-right-arrow").click(function() {
    owl.trigger('next.owl.carousel');
})


// Go to the previous item
$(".container10_controller-left-arrow").click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})


$(".dot").click(function() {
  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
})