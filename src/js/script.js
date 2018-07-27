
$(document).ready(function(){
  // Toggle Burger Menu
  $( "#burger-menu" ).click(function() {
    $( "#sub-menu" ).toggle( "slow", function() {
    });
  });

  // Slider Testimonial Block
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
});



