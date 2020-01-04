1. font: utm good's word regular (http://cuuam.gosu.vn/cau-lac-bo)

2. Js cho slider (.banner-slider) và nhiều thứ khác http://bopflorist.com/wp-content/themes/flowvin/assets/js/scripts.js

3. owl carousel full http://www.landmarkmlp.com/js-plugin/owl.carousel/demos/transitions.html

4. menu top opacity (.head-page) https://www.bopflorist.com/wp-content/themes/flowvin/assets/js/scripts.js

5. popup (.popup-with-zoom-anim)  https://dimsemenov.com/plugins/magnific-popup/documentation.html
  --> view-source:https://www.bopflorist.com/
  --> $('.archive').on('click', '.latest-post-content .item', function() {
			$(this).find("a.view").click();
		});

https://viblo.asia/p/tim-hieu-ve-eventpreventdefault-eventstoppropagation-va-eventstopimmediatepropagation-4P85637OKY3

http://gsgd.co.uk/sandbox/jquery/easing/

1. Trang chủ
2. Trang mua bán (shop)
3. Trang blog  (https://www.bopflorist.com/blog/)
4. Trang Blog detail (https://www.bopflorist.com/2018/04/25/bop-daily/)
5. Trang list ảnh  (https://www.bopflorist.com/wedding-portfolio/)




6. click shop get slug url active isotope 
<script>

	jQuery(window).bind("load", function() {	
	var container = jQuery('#flower-wrap');
		    var term_slug = "christmas-collection";
		if(term_slug != "") {
			var sel = ".christmas-collection";
		} else {
			var sel = ".all";
		}
        container.isotope({
            animationEngine : 'best-available',
            animationOptions: {
                duration: 200,
                queue: false
            },
            layoutMode: 'fitRows',
			filter: sel
        });
		
		setTimeout( function() {
		  container.isotope('reLayout')
		}, 100 );

        jQuery('#filters a').click(function(){
			if(jQuery(this).data("countval") <= 12) {
				jQuery(".show_more_outer").hide();
			}
            jQuery('.select-filter').removeClass('select-filter');
            jQuery(this).parent('li').addClass('select-filter');
            var selector = jQuery(this).attr('data-filter');
            jQuery('#flower-wrap').isotope({ filter: selector });
            setProjects();
            return false;
        });
        function splitColumns() {
            var winWidth = jQuery(window).width(),
                columnNumb = 1;
            if (winWidth > 1200) {
            // Large devices Desktops (≥1200px)
                columnNumb = 4;
            } else if (winWidth > 992) {
            // Medium devices Desktops (≥992px)
                columnNumb = 3; 
            } else if (winWidth > 768) {
            // Small devices Tablets (≥768px)
                columnNumb = 2; 
            } else if (winWidth > 480) {
            // Small devices Tablets (≥480px)
                columnNumb = 2; 
            } else if (winWidth < 480) {
            // Extra small devices Phones (>480px)
                columnNumb = 1;
            }
            return columnNumb;
        }

        function setColumns() {
            var winWidth = jQuery('.our-flower .container').width(),
                columnNumb = splitColumns(),
                postWidth = Math.floor(winWidth / columnNumb);
                postWidth = postWidth-1;
            container.find('.flower-item').each(function () {
                jQuery(this).css( {
                    width : postWidth + 'px'
                });
            });
        }

        function setProjects() {
            setColumns();
            container.isotope('reLayout');
        }
        container.imagesLoaded(function () {
            setColumns();
        });


        jQuery(window).bind('resize', function () {
            setProjects();
        });
		});
    
	</script>