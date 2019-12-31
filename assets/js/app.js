jQuery(document).ready(function($) {
    "use strict";

  /*==============================
        cycle text contact
  ==============================*/

  const contact_up = new CircleType(document.getElementById('contact-up')).radius(110);
	const contact_sub = new CircleType(document.getElementById('contact-sub')).radius(110);


  /*==============================
          Scroll contact
  ==============================*/

  $('a').on('click', function(event) {
	  var $anchor = $(this);
	  if ( $anchor.attr('href').search("#") != -1 ) {
      console.log($anchor.attr('href'));
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top + 5
      }, 1200, 'easeInOutExpo');
      event.preventDefault();
	  }
	});

  $(".about-to-contact a").click(function(){
      $("html,body").animate({scrollTop:$("#contact").offset().top}, 1200, 'easeInOutExpo');
      return false;
  });


  /*==============================
          slider services
  ==============================*/
  
  $('.list-services').owlCarousel({
    loop:true,
    margin: 50,
    responsiveClass:true,
    nav:true,
    dots: false,
    smartSpeed:800,
    // autoplay: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1200:{
        items:3
      }
    }
})



});