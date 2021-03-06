jQuery(document).ready(function($) {
    "use strict";
  /*==============================
        Xử lý Go Top
  ==============================*/
  var offset = 600, gotop = $('#scrollUp');

  $(window).scroll(function() {
    ($(this).scrollTop() < offset) ? gotop.removeClass('active') : gotop.addClass('active');
  });
  gotop.click(function(){$('html,body').stop().animate({scrollTop: 0}, 1000, 'easeInOutExpo');});

  /*==============================
        click lated post home
  ==============================*/
  // $('body').on('click', '#lasted-post .item-flower', function() {
  //   $(this).find("a.view").click();
  // });


  /*==============================
          Scroll contact
  ==============================*/

  $('nav li a').on('click', function(event) {
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
    
    $('.banner-slider').append('<ul class="owl-num-custom"><li class="index-item"></li><li class="total-item"></li></ul>');
    
    var owlbaner = $('.list-banner-slider').owlCarousel({
      items: 1,
      loop: false,
      rewind: true,
      mouseDrag: false,
      touchDrag: false,
      nav:true,
      dots: false,
      animateOut: 'owl-fadeUp-out',
      animateIn: 'owl-fadeUp-in',
      autoplay:true,
      // smartSpeed:1500,
      addClassActive:true,
    });
    owlbaner.on('changed.owl.carousel',function(property){
      var totalItem = $('.list-banner-slider .owl-item').length;
      var current = property.item.index + 1;

      $('.index-item').text('0' + current);
      $('.total-item').text('0' + totalItem);
    });

    getCurrentIndex();
    function getCurrentIndex() {
      var totalItem = $('.banner-slider .owl-item').length;
      if(totalItem > 0) {
          var indexItem;
          $('.list-banner-slider .owl-item').each(function(index) {
            if($(this).hasClass("active"))
            indexItem = index + 1;
          });
        indexItem = "0" + indexItem;
        totalItem = "0" + totalItem;

        $('.index-item').text(indexItem);
        $('.total-item').text(totalItem);
      }
  }
    

  /*==============================
        setHeightBanner Banner slide
    ==============================*/

  // full height screen
  function setHeightBanner() {
    var heightWindow = $(window).height();
    var widthWindow = $(window).width();
    if (widthWindow >= 480) {
        $('#banner-image, #banner-slider, .list-banner-slider, .item-banner-slider').height(heightWindow);
    } else {
        var heightFixMobile = heightWindow - 140;
        $('#banner-image, #banner-slider, .list-banner-slider, .item-banner-slider').height(heightFixMobile);
    }
    // var heightBanner = $('#banner-image').height();
    // if($('.bg-banner-image').length!='' && heightWindow>650) heightBanner=650;
    // if (heightWindow > heightBanner && $("#banner-image").length>0) {
    //     $('#header, #banner-image').css({
    //         height: heightBanner + 'px'
    //     });

    // } else if (heightWindow <= heightBanner && $("#banner-image").length>0) {
    //     $('#header, #banner-image').css({
    //         height: heightWindow + 'px'
    //     });
    // }

    // set background cho trang con #banner-image
    if (widthWindow >= 768 && $("#banner-image").length>0) {
      $('#header, #banner-image').css({
        height: '650px'
      });
    } else if (widthWindow < 768 && $("#banner-image").length>0) {
      var height2 = heightWindow / 3;
      $('#header, #banner-image').css({
        height: '350px'
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
  
  $('.submenu-plus').on("click", function(){
		$(this).parent().find('.sub-menu').slideToggle();
		$(this).toggleClass('submenu-minus');
	});

  // Load page scroll
  var href = window.location.href.split('#');
  if (href.length > 1){
      href[1] = "#" + href[1];
      $.each($('.nav li a'), function() {
          if ($(this).attr('href')==href[1]) {
              $(this).click();
          }
      })
  };

  /*==============================
      Click lated post product home
    ==============================*/

  // $('.popup-with-zoom-anim').magnificPopup({
  //   type:'inline',
  //   overflowY: 'auto',
  //   removalDelay: 600,
  //   closeBtnInside: true,
  //   preloader: false,
  //   mainClass: 'my-mfp-custom',
  //   midClick: true,
  //   callbacks: {
  //     beforeOpen: function() {
  //        this.st.mainClass = this.st.el.attr('data-effect');
  //     }
  //   },
  // });

  /*==============================
      flower-filter with isotope js
    ==============================*/
  var container = $('#flower-wrap');
    container.isotope({
      animationEngine : 'best-available',
      animationOptions: {
          duration: 200,
          queue: false
      },
      layoutMode: 'fitRows'
    });

    $('#filters a').click(function(e){
      e.preventDefault();
      $('#filters a').removeClass('select-filter');
      $(this).addClass('select-filter');
      var selector = $(this).attr('data-filter');
      $('#flower-wrap').isotope({ filter: selector });
      setProjects();
      return false;
    });

    function splitColumns() {
      var winWidth = $(window).width(),
          columnNumb = 1;
      if (winWidth > 1200) {
      // Large devices Desktops (â‰¥1200px)
          columnNumb = 4;
      } else if (winWidth > 992) {
      // Medium devices Desktops (â‰¥992px)
          columnNumb = 3; 
      } else if (winWidth > 768) {
      // Small devices Tablets (â‰¥768px)
          columnNumb = 2; 
      } else if (winWidth > 480) {
      // Small devices Tablets (â‰¥480px)
          columnNumb = 2; 
      } else if (winWidth < 480) {
      // Extra small devices Phones (>480px)
          columnNumb = 1;
      }
      return columnNumb;
    }

    function setColumns() {
      var winWidth = $('.our-flower .container').width(),
      columnNumb = splitColumns(),
      postWidth = Math.floor(winWidth / columnNumb);
      postWidth = postWidth-1;
      container.find('.flower-item').each(function () {
        $(this).css( {
            width : postWidth + 'px'
        });
      });
    }
    setProjects();
    function setProjects() {
      setColumns();
      // container.isotope('reLayout');
    }
    // container.imagesLoaded(function () {
    //     setColumns();
    // });
    $(window).bind('resize', function () {
        setProjects();
    });

    /*==============================
      slider list image single-product.html
    ==============================*/
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      // centerPadding: '5px',
      // centerMode: true,
      focusOnSelect: true
    });
    
});