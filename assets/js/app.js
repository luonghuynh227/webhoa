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
  });



  /*==============================
            list-banner-slider
    ==============================*/

    // custom slider img
    
    // $('.banner-slider').append('<ul class="owl-num"><li class="index-item"></li><li class="total-item"></li></ul>');
    
    $('.list-banner-slider').owlCarousel({
      items: 1,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      nav:true,
      dots: false,
      animateOut: 'owl-fadeUp-out',
      animateIn: 'owl-fadeUp-in',
      autoplay:true,
      smartSpeed:1500,
      addClassActive:true,
      info: true,
      // onInitialize: getCurrentIndex,
      // onChanged: getCurrentIndex,
    });

    // getCurrentIndex();
    // var currentItem = 0;
    function getCurrentIndex() {
    	currentItem = currentItem + 1;
  		console.log(currentItem);
    	var totalItem = $('.list-banner-slider').attr('data-total');

    	if (currentItem >= totalItem) {
      	currentItem = 1;
      }

  		$('.index-item').text('0' + currentItem);
    	$('.total-item').text('0' + totalItem);
    }

  /*==============================
        setHeightBanner Banner slide
    ==============================*/

  // full height screen
  function setHeightBanner() {
    var heightWindow = $(window).height();
    var widthWindow = $(window).width();
    if (widthWindow >= 480) {
        $('#banner-slider, .list-banner-slider, .item-banner-slider').height(heightWindow);
    } else {
        var heightFixMobile = heightWindow - 140;
        $('#banner-slider, .list-banner-slider, .item-banner-slider').height(heightFixMobile);
    }
    var heightBanner = $('#banner-slider').height();
    if($('.blog-intro').length!='' && heightWindow>730) heightBanner=730;
    if (heightWindow > heightBanner && $("#banner-slider").length>0) {
        $('#header, #banner-slider').css({
            height: heightBanner + 'px'
        });

    } else if (heightWindow <= heightBanner && $("#banner-slider").length>0) {
        $('#header, #banner-slider').css({
            height: heightWindow + 'px'
        });
    }
  };
  setHeightBanner();
  $(window).bind('resize', function () {
      setHeightBanner();
  });



  /*==============================
      scroll opacity head-page
    ==============================*/
  $(window).scroll(function(){
    var heightWindow = $(window).height();
    var setNum = heightWindow - 300;
    var top = $(this).scrollTop();

    if(top < setNum) {
      var dif = 1 - top / setNum;
      $(".head-page").css({opacity: dif});
    }
   	var offset = 600, head_page = $('.head-page');
    ($(this).scrollTop() < offset) ? head_page.removeClass('header-sticky') : head_page.addClass('header-sticky');
    
	});

  /*==============================
      Click hamburger mobile
    ==============================*/
  $('body').append('<div class="wrap-overlay"></div>');
  $('.button-menu-mobile').click(function () {
      $(this).toggleClass('active-mb');
      $('.head-menu-ul').toggleClass('menu-mobile-show');
      $('.wrap-overlay').fadeToggle().click(function () {
          $('.button-menu-mobile').removeClass('active-mb');
          $('.head-menu-ul').removeClass('menu-mobile-show');
          $(this).fadeOut(300);
      });
  });

  /*==============================
      Click sub menu mobile
    ==============================*/
  $('.menu-item-has-child .submenu-plus').click(function () {
      $(this).toggleClass('submenu-minus');
      // $('.head-menu-ul').toggleClass('menu-mobile-show');
      $('.sub-menu').fadeToggle();
  });


});