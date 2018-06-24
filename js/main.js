$(document).ready(function(){
  $('.comments').slick({
      infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  dots: true,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	  ]
	  });
	$('.text').slick({
		arrows: false,
		dots: true,
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

  

  $('.bottomlink').click(function(e) {
  	e.preventDefault();
  	$('html, body').animate({
        scrollTop: $("#form").offset().top
    }, 500);
  });

	// filter
	$(".links a").click(function(e){
		e.preventDefault();
		//$('.links a').removeClass('active');
		$(this).addClass('active');
		var selectedClass = $(this).data("rel");

	    $(".img_block").fadeTo(100, 0.1);
		$(".img_block .col-md-3").not("."+selectedClass).fadeOut();
	    
	    setTimeout(function() {
	      $("."+selectedClass).fadeIn();
	      $('.img_block').fadeTo(500, 1);
	    }, 500);
		
	});


	$('.icon-1').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.sidebar').toggleClass('active');
	});

});
