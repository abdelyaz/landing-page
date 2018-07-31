
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

  // Count number
  function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

  var $counter = $('.nmbr');

  if($counter.length) {
    console.log(isElementInViewport($($counter)))
    $(window).scroll(function() {
      if(isElementInViewport($($counter))) {

        $($counter).each(function () {
          $(this).prop('Counter',0).animate({
            Counter: $(this).text()
          }, {
            duration: 1200,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }
    })
  }


  // Scroll Reveal
  window.sr = ScrollReveal();
  sr.reveal('.block-header');
  sr.reveal('.block-features');
  sr.reveal('.block-intro');
  sr.reveal('.block-testimonial');
  sr.reveal('.block-browse');
  sr.reveal('.block-numbers');
});



