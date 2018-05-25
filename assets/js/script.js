(function($) {
	
	"use strict";
	var div =  $('.login-message');
	var passwordEqual = false ;
	var user_data;
	if(localStorage.getItem('userState')) {
		user_data = JSON.parse(localStorage.getItem('userState'));
		if(user_data.hasOwnProperty('email') && 'loggedIn' === user_data.state) {
			_setUserData(user_data)
		}
	}
	
	function _setUserData(data) {
		$('.login-sign').css('display', 'none');
		$('.user').css('display', 'block');
		$('.user-name').html('');
		$('.user-name').html('<span>Welcome &nbsp; <strong style = "color: darkred">'+ data.name+ '</strong><span>');
	}
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 250) {
				siteHeader.addClass('fixed-header');
				$('.dropdown-content').css({'top':'5rem'});
				$('.dropdown-content-for-user').css({'top':'5rem'});
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				$('.dropdown-content').css({'top':'7rem'});
				$('.dropdown-content-for-user').css({'top':'7rem'});
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	//Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				},
				1300:{
					items:4
				}
			}
		});    		
	}
	
	
	//Event Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Minutes</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Seconds</div></div>'));
		});
	 });
	}
	
	
	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				}
			}
		});    		
	}
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}

	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
		//Registration Form Validation
		if($('#registeration-form').length){
			$('#registeration-form').validate({
				rules: {
					fusername: {
						required: true
					},
					lusername: {
						required: true
					},
					password: {
						required: true
					},
					passwordconfirm: {
						required: true
					},
					address : {
						required: true
					},
					emailId: {
						required: true
					}
				}
			});
		};

		/******* login validations ****/
		if($('#login-form').length){
			$('#login-form').validate({
				rules: {
					login_password: {
						required: true
					},
					login_email: {
						required: true
					}
				}
			});
		};


	// validate password 
	$('#confirm').on('keyup', function() {
		$('.message').text('');
		$('.register-alert').css('display', 'none');
	});
	$('.register-now').on('click', function() {
		_validatePassword() ;
	});

	$('.login-btn').on('click', function() {
		div.text('');
		div.removeClass('alert alert-danger');
		div.removeClass('alert alert-success');
		div.css('display', 'none');
		_loginUser();
	});

	/******** login form ******/
	function _loginUser() {
		var form = $('#login-form');
		if(form.valid() )
		{
			login();
		}
	}

	$('.logout').on('click', function() {
		_logOut();
	});
	function _logOut() {
		$('.preloader').fadeIn(100);
		var parameters = new Object();
		parameters.UserName = CONSTANT.USER_NAME ;
		parameters.UserPassword = CONSTANT.PASSWORD;
		parameters.token = CONSTANT.TOKEN ;
		parameters.action = CONSTANT.LOGOUT_ACTION;
        $.ajax({
			url: CONSTANT.URL_PATH,
			type: 'post',
			cash: false,
			data: 'data='+JSON.stringify(parameters),
			success: function(data) {
				_logoutSuccess() ;
				localStorage.clear();
				$('.preloader').fadeOut(500);
			},
			error: function(err) {
				console.error(err);
				$('.preloader').fadeOut(500);
			}
		})
		$('.login-sign').css('display', 'block');
		$('.user').css('display', 'none');
		$('.user-name').text('');
	}
	/********* login function *****/
	function login() {
		$('.preloader').fadeIn(100);
	    var email = $('.login_email').val(), password = $('.login_password').val(), 
	     parameters = new Object();
	     parameters.UserName = CONSTANT.USER_NAME ;
		 parameters.UserPassword = CONSTANT.PASSWORD;
		 parameters.token = CONSTANT.TOKEN ;
		 parameters.action = CONSTANT.LOGIN_ACTION;
		 parameters.password = password;
		 parameters.email = email ;
	 /********* send data to db ****/
	 $.ajax({
		 url: CONSTANT.URL_PATH,
		 type: 'post',
		 data: 'data='+JSON.stringify(parameters),
		 cash: false,
		 success: function(data) {
			 var json = JSON.parse(data);
			 if(!json.data) {
				_loginError(json.error);
			 }else {
				 _loginSuccess(json.data.message, json.data.firstname);
				 var user_data = new Object();
				 localStorage.clear();
				 user_data.state = 'loggedIn';
				 user_data.email = email;
				 user_data.name = json.data.firstname.toUpperCase();
				 localStorage.setItem('userState',JSON.stringify(user_data));
			 }
			 $('.preloader').fadeOut(500);
		 },
		 error: function(err) {
			 console.error(err);
			 $('.preloader').fadeOut(500);
		 }
	 })
	}
	/********** set login/login error ****/
	function _logoutSuccess() {
		$('.login-sign').css('display', 'block');
		$('.user').css('display', 'none');
		 alert('Logout successful .');
	}

	function _loginError(message) {
		div.text('');
		div.removeClass('alert alert-success');
		div.addClass('alert alert-danger');
		div.text('');
		div.text(message);
		div.css('display', 'block');
	}
	function _loginSuccess(message, name) {
		div.text('');
		div.removeClass('alert alert-danger');
		div.addClass('alert alert-success');
		div.text('');
		div.text(message);
		div.css('display', 'block');
		setTimeout(() => {
			//location.href='../../index.html';
		/****** remove login sign and display user name *****/
		$('.login-sign').css('display', 'none');
		$('.user').css('display', 'block');
		$('.user-name').html('');
		$('.user-name').html('<span>Welcome &nbsp; <strong style = "color: darkred">'+ name.toUpperCase()+ '</strong><span>');
		   closeModal();
		}, 3000)
	}
	function _validatePassword() {
		/******* if form is valid ***/
		if (  $('#registeration-form').valid() ) {
			if ($('#confirm').val() !== $('#password').val()) {
				$('.message').text('Sorry, Your Password and Confirm Password don\'t match .');
				$('.register-alert').css('display', 'block');
				return false;
		  }else{
				   $('.message').text('');
				   $('.register-alert').css('display', 'none');  
				   _registerClient();
		    }
		}
		
	}
	/*********** register upon successfull validation ****/
	function _registerClient() {
		$('.preloader').fadeIn(100);
	  /*********** getting values *******/
		 var firstName = $('#firstName').val();
		 var lastName = $('#lastName').val();
		 var password = $('#password').val();
		 var address = $('#address').val();
		 var additionalAddress = $('#additionalAddress').val();
		 var email = $('#email').val();
		 /******* setting object ****/
		 var parameters = new Object(), data;
		 parameters.UserName = CONSTANT.USER_NAME ;
		 parameters.UserPassword = CONSTANT.PASSWORD;
		 parameters.token = CONSTANT.TOKEN ;
		 parameters.action = CONSTANT.REGISTERATION_ACTION;
		 parameters.firstName = firstName;
		 parameters.lastName = lastName ;
		 parameters.password = password;
		 parameters.email = email ;
		 parameters.address = address;
		 parameters.altaddress = additionalAddress ;
         $.ajax({
			 url: CONSTANT.URL_PATH,
			 type: 'post',
			 cash: false,
			 data: 'data='+JSON.stringify(parameters),
			 success: function(data) {
				 var json = JSON.parse(data);
				/**** error ***/
				if(!json.data) {
			    	_alertError(json.error);
				}else {
					_alertSuccess();
				}
				$('.preloader').delay(200).fadeOut(300);
			 },
			 error: function(err) {
				 _alertError(err);
				 $('.preloader').delay(200).fadeOut(300);
			 }
		 });
		
	}

	/************ login link clicked ****/
	$('.login-menu').on('click', function() {
		document.getElementById('id01').style.display='block';
	});
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	

	/************ set registeration alerts ***/
	function _alertError(message) {
		    $('.message').removeClass('alert alert-success'); 
			$('.message').addClass('alert alert-danger'); 
			$('.message').text('');
			$('.message').text('Sorry, '+ message);
			$('.register-alert').css('display', 'block'); 

		setTimeout(() => {
			$('.message').text('');
			$('.message').removeClass('alert alert-success'); 
			$('.message').removeClass('alert alert-danger'); 
			$('.register-alert').css('display', 'none');  
		}, 5000);
	}

	function _alertSuccess() {
		    $('.message').text('');
			$('.message').removeClass('alert alert-danger'); 
			$('.message').addClass('alert alert-success'); 
			$('.message').text('Thank you for registering with us, a confirmation email is expected to be sent to you in 5 mins, please check your email.');
			$('.register-alert').css('display', 'block');  
		setTimeout(() => {
			$('.message').text('');
			$('.message').removeClass('alert alert-danger'); 
			$('.message').removeClass('alert alert-success'); 
			$('.register-alert').css('display', 'none');  
		}, 7000);

		setTimeout(() => {
			location.href = '../index.html';
		}, 8000);
	}
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	/*********** read more  *******/
<<<<<<< HEAD
	$('.content_block').on('click', function () {
=======
	$('.content').on('click', function () {
>>>>>>> 76577b7024806651e490104edabf913fc2cae806
		_readMoreBlock(this);
	});

	$('.more').on('click', function () {
		_handleClick(this);
	})

	function _readMoreBlock(_instance) {
		var content = $(_instance).data('content'), header = $(_instance).data('header');
		$('.modal-title').text('');
		$('.modal-body').find('p').text('');
		$('.modal-title').text(header);
		$('.modal-body').find('p').text(content);
		$('#myModal').modal('show')
	}

<<<<<<< HEAD
	/*********** close modal ****/
	$('.closeModal').on('click', function(){
		closeModal();
	})
	function closeModal() {
		div.text('');
		div.removeClass('alert alert-danger');
		div.removeClass('alert alert-success');
		div.text('');
		div.css('display', 'none');
		document.getElementById('id01').style.display='none'; 
		document.getElementById('login-form').reset();
		var validator = $( "#login-form" ).validate(); 
		validator.resetForm();
   }
   // Get the modal
  
   
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
	   var modal = document.getElementById('id01');
	   if (event.target == modal) {
		   modal.style.display = "none";
		   closeModal();
	   }
   }
   $('.login-icon, .dropdown-content').on('mouseenter', function() {
	  $('.dropdown-content').css('display', 'block');
   });

   $('.login-icon, .dropdown-content').on('mouseleave', function() {
	$('.dropdown-content').css('display', 'none');
 })

 $('.user-name, .dropdown-content-for-user').on('mouseenter', function() {
	$('.dropdown-content-for-user').css('display', 'block');
 });

 $('.user-name, .dropdown-content-for-user').on('mouseleave', function() {
  $('.dropdown-content-for-user').css('display', 'none');
})

=======
>>>>>>> 76577b7024806651e490104edabf913fc2cae806
	function _handleClick(event) {
		var id = $(event).data('id');
		$('#myModal').modal('show')
	}
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);