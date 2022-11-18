$(document).ready(function(){


	if ($('.reviews__carousel').length) {
		if ($(window).width() > 991) {
			$('.reviews__carousel').slick({
				slidesToShow:4,
				slidesToScroll:4,
				arrows:true,
				dots:true,

				responsive: [
			    {
			      breakpoint: 1740,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: false,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 1360,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: false,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 1360,
			      settings: {
			      	adaptiveHeight:true,
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: false,
			        dots: true
			      }
			    }
			  ]
			});
		}
		
	}

	$('.scroll--down').on("click" ,function(e){
		e.preventDefault();
		 $('html').animate({ 
    	    scrollTop: $(".about__section").offset().top // прокручиваем страницу к требуемому элементу
	        }, 800 // скорость прокрутки
        );
	});
	$(window).on("scroll" ,function(e){
		$('.section__name').each(function(index,elem){
			if ($(window).scrollTop() > $(elem).offset().top -  $(window).height()/2) {
				$('.name__section').text($(elem).attr("data-name"));
			}
		});
		$('.part__float').each(function(index,elem){
			if (($(elem).offset().top  +  ($(elem).height()/1.5)) >= $('.white__box').offset().top) {
				$(elem).addClass("white");
			} else {
				$(elem).removeClass("white");
			}

			if (($(elem).offset().top  +  ($(elem).height()/1.5)) >= $('.footer__wrapper').offset().top) {
				$(elem).removeClass("white");
			} else {
			}
		});
	});



	$('.menu__button>a').on("click" ,function(e){
		e.preventDefault();
		$('.mobile__menu').fadeIn(300);
		setTimeout(function(){
			$('body,html').css("overflow-y" , "hidden");
		}, 300);
	});
	$('.mobile__menu .top__controls>a').on("click" ,function(e){
		e.preventDefault();
		$('.mobile__menu').fadeOut(300);
		$('body,html').css("overflow-y" , "initial");
	});

	$('.stick__left').css("top" ,'0px');
	$('.stick__top').css("left" ,'0px');

	$(window).on("scroll" ,function(){
		progressScroll();
		if ($(window).scrollTop() > 1) {
			$('header').addClass('active__header');
		}  else {
			$('header').removeClass('active__header');
		}
	});

	$(window).on('resize' ,function(e){
		if ($("footer").hasClass("active__form")) {
			$('.float__form').css("height" , $(document).height() - $(".copyright__info").offset().top + 30 + "px");
		}
	});
	$('.copyright__info>a').on('click' ,function(e){
		e.preventDefault();
		if ($('footer').hasClass("active__form")) {
			$("footer").removeClass("active__form");
			
			$('.float__form').css("bottom" ,"-100vh");
		} else {
			$('html').scrollTop($('.copyright__info').offset().top)

			// setTimeout(function(){
				$('.float__form').css("height" , $(document).height() - $(".copyright__info").offset().top + 30 + "px");
				$('.float__form').css("bottom" ,"0px");
			// }, 300);
			setTimeout(function(){
				$("footer").addClass("active__form");
			},300);
			
		}
	});


	function progressScroll(){
		let totalHeight = $(document).height();
		let progress;
		progress = $(window).scrollTop()/(totalHeight - $(window).height());
		progress = progress*100;
		if (progress > 100) {
			progress = 100;
		}
		$('.progress__float>img').css("top" , progress + "%");
	}

});