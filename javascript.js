	//SCROLL EFFECT//
	//===============//
	//===============//
	
	$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	// Prevent default anchor click behavior
	event.preventDefault();

	// Store hash
	var hash = this.hash;

	// Using jQuery's animate() method to add smooth page scroll
	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	$('html, body').animate({
	scrollTop: $(hash).offset().top
	-20}, 1200, function(){

	// Add hash (#) to URL when done scrolling (default click behavior)
	window.location.hash = hash;
	});
	} // End if
	});
	});
	


	


	//HOME SCRIPT//
	//===============//
	//===============//

	$(document).ready(function(){											//SEQUENTIAL PAGE INSERT//
		$(".logo").click(function(){
	
			//Assign .processing class to current page to DISABLE ability to continually click
			var $this = $(".logo");
				if ($this.hasClass('processing'))
				return;	
			$this.addClass('processing');

			//Variable names
			var heroDiv = $(".hero");
			var homeButton = $(".btn-blue");
			var hbText = $("#btn-blue-text");
			var carouselHide = $(".btn-blue-div");
			var carouselCont = $("#btn-blue-container");
			var carouselCaptions = $(".carousel-caption, .carousel-caption2");
			var ccOne = $(".carousel-caption");
			var ccTwo = $(".carousel-caption2");

			$(".fullscreen-bg__video").css({display: 'initial'});
			//$("#btn-blue").animate({zIndex: '0s'},0);
			
			//Remove .processing class to allow user to click into other pages
			var removeClasses = $(".tarifs, .blog, .what-we-do, .btn-blue");
				removeClasses.removeClass('processing');	

			//stop all animations on other pages when clicking on a page while another is loading. ex: hitting a propos and then clicking classes immediately	
			var allStop = $(".btn-blue, .what-we-do, .blog, .logo, .tarifs, .a-propos-div, .blog-div, .tarifs-div, #a-propos-h1, #blog-h1, #tarifs-h1, .mp-header, .mp-text, .mp-img");
				allStop.stop(true);	

			//Returns color of Header Div LINKS <a> back to normal	
			var removeHeaderColors = $(".tarifs a, .blog a, .what-we-do a");	
				removeHeaderColors.animate({color: '#0B1C5C'}, 1000);

			//Returns color of other Header Divs back to normal
			var removeHeaderBgColors = $(".tarifs, .blog, .what-we-do");
				removeHeaderBgColors.animate({height: '5px', backgroundColor: 'black'}, 1000);	

			//Hides headers and titiles of other pages (expect carousel)
			var titleHide = $("#tarifs-h1, #blog-h1, #a-propos-h1, .mp-header, .mp-text, .mp-img");	
				titleHide.animate({opacity: '0'}, 300);
				titleHide.animate({left: "-100em"}, 100);

			//Hides carousel page text and opacques page + sets zIndex of page to be lower than hero
			

			carouselCaptions.animate({left: "-100em"}, 1000, function(){
				carouselCont.animate({opacity: '0'}, 1000, function(){
					carouselHide.animate({width: '18.75em', left: '38.28vw', top: '51.5%', height: '64px'},1000, function() {
						carouselHide.animate({opacity: '0'}, 1000);
						carouselHide.animate({zIndex: '-5'}, 0, function(){
							//	heroDiv.animate({opacity: '0'},0);
							homeButton.animate({marginLeft: '0'},0);
							homeButton.animate({opacity: '1', }, 300);
							hbText.animate({opacity: '1'}, 500, function(){
								/*//JS for animating the page called
								//$(".hero-text").animate({opacity: '1'},500);
								heroDiv.animate({opacity: '1'}, 500);
								heroDiv.animate({height: '100vh'},800);
								//MAKES THE A PROPOS CONTAINER EXPAND//
								heroDiv.animate({width: '100%'}, 500); 		*/
							});		
						});
					});
				});				
			});
			
			var classesHide = $(".tarifs-div");								//JS for hiding transition for the Classes or COURS page
				classesHide.animate ({width: '25px', left: '82%'/*left: '1150px'*/},700);
				classesHide.animate ({opacity: '0', height: '0'},500, function(){
					/*//heroDiv.animate({opacity: '0'},0);
					homeButton.animate({marginLeft: '0'},0);
					homeButton.animate({opacity: '1', }, 300);
					hbText.animate({opacity: '1'}, 500, function(){
						//JS for animating the page called
						//$(".hero-text").animate({opacity: '1'},500);
						heroDiv.animate({opacity: '1'}, 1000);
						//heroDiv.animate({height: '100vh'},800);
						//MAKES THE A PROPOS CONTAINER EXPAND//
						//heroDiv.animate({width: '100%'}, 500); 		
					});*/
				});	

			var blogHide = $(".blog-div");
				blogHide.animate ({width: '25px', left: '91.2%'/*left: '1250px'*/},700);			// JS for hiding transition for the BLOG page
				blogHide.animate ({opacity: '0', height: '0'},500);		

			var aproposHide = $(".a-propos-div");
				aproposHide.animate ({width: '25px', left: '73.5%'/*left: '1000px'*/},700);
				aproposHide.animate ({opacity: '0', height: '0'},500);	

			heroDiv.animate({opacity: '1'}, 2500);
			heroDiv.animate({height: '100vh'},2500);
			//MAKES THE A PROPOS CONTAINER EXPAND//
			heroDiv.animate({width: '100%'}, 2500);	

		});		
	}); 

	//END FUNCTION

	
	//Calling in the animateRotate js//
	//===============================//
	//===============================//

	$.fn.animateRotate = function(angle, duration, easing, complete) {
		var args = $.speed(duration, easing, complete);
		var step = args.step;
		return this.each(function(i, e) {
	args.step = function(now) {
		$.style(e, 'transform', 'rotate(' + now + 'deg)');
		if (step) return step.apply(this, arguments);
	};

	$({deg: 0}).animate({deg: angle}, args);
	});
	};

	//Carousel Page Animation//
	//===============================//
	//===============================//

	$(document).ready(function(){		//SEQUENTIAL PAGE INSERT//
		$(".btn-blue").click(function(){
			$("#btn-blue").css({display: 'initial'}, 0, function(){
				$("#btn-blue").animate({zIndex: '1'},0);
			});
			//Assign .processing class to current page to DISABLE ability to continually click
			var $this = $(".btn-blue");
			if ($this.hasClass('processing'))
				return;	
			$this.addClass('processing');

			//Remove .processing class to allow user to click into other pages
			var removeClasses = $(".what-we-do, .tarifs, .blog, .logo");
			removeClasses.removeClass('processing');

			//Sets Z-Index of previous Pages lower to allow "animation" to appear on top	
			var zIndexPages = $("#what-we-do, #tarifs, #blog");								
			zIndexPages.animate({zIndex: '5'},0);

			//stop all animations on other pages when clicking on a page while another is loading. ex: hitting a propos and then clicking classes immediately	
			var allStop = $(".what-we-do, .tarifs, .blog, .logo, .a-propos-div, .tarifs-div, .blog-div, .hero, #a-propos-h1, #tarifs-h1, #blog-h1, .mp-header, .mp-text, .mp-img");
			allStop.stop(true);	

			//Opaques the layer being replaced to allow animation to transition smoothly	
			//Changed this to .hero-text to allow the button to stay when others are opacqued
			var heroHide2 = $(".hero");											
			heroHide2.animate({opacity: '0'}, 800);
			//This is to fade the Button TExt slower and make it le sexy
			$("#btn-blue-text").animate({opacity: '0'}, 1200);

			//opaque button blue to 0.3
			$(".btn-blue" /*front page button*/).animate({opacity: '0.3'}, 500, function(){
				//move button blue to the left 100 percent
				$(".btn-blue"/*front page button*/).animate({
					marginLeft: ['-100%', 'swing']
					}, 400, function() {
					//Move fake div left to match .btn-blue location
					$("#btn-blue").animate({
						left: '-1px',
						top: '53.3%',
						width: '9em'}, 0, function(){
							//bring fake div to light
							$("#btn-blue").animate({opacity: '1'}, 1800, 'swing', function(){
							//Exoands #btn-blue div to fit screen w/swing animation	
								$("#btn-blue").animate({
									top: '0',
									left: '0', 
									height: '100%', 
									width: ['100%', 'swing'], 
									right: '0'
									}, 300, 'swing', function() {
									$("#btn-blue"/*carousel*/).animate({width: '100%'}, 0, function() {
										$("#btn-blue-container"/*carousel*/).animate({opacity: '1'}, 500);
										$(".carousel-caption").animate({left:'11%'/*was 5.7em*/, opacity: '1'}, 600, function(){
											$(".carousel-caption").animate({height: ['100%' , 'swing']}, 900);
											$(".carousel-caption h3").animate({opacity: '1'}, 1000);
										});
										$(".carousel-caption2").animate({left: '47vw', top: '0', bottom: '0', minWidth: '45vw', opacity: '1'}, 500, function(){
											$(".carousel-caption2").animate({fontSize: ['2.625em', 'swing']}, 800);
										});
									});
								});
							});
							//fade out THE BUTTON / THE ACTUAL BUTTON ON THE FRONT PAGE
							$(".btn-blue"/*front page button*/).animate({opacity: '0'}, 1000);
						});
					});	
				});

			$('.carousel-caption2').on('mouseover', function(){
			  $('.toblur').addClass('is-hover');
			  
			}).on('mouseout', function(){
			  $('.toblur').removeClass('is-hover');
			})

			$('.carousel-caption2').on('mouseover', function(){
			  $(this).siblings('.carousel-caption').addClass('text_shadow');
			  $(this).children('.cc-title').animate({fontWeight: '900', fontSize: '1.2em', letterSpacing: '5px'}, 700);
			  
			}).on('mouseout', function(){
			  $(this).siblings('.carousel-caption').removeClass('text_shadow');
			  $(this).children('.cc-title').animate({fontWeight: '0', fontSize: '1em', letterSpacing: '0px'}, 700);
			})


			var titleHide = $("#a-propos-h1, #tarifs-h1, #blog-h1, .mp-header, .mp-text, .mp-img");	
			titleHide.animate({opacity: '0'}, 300);
			titleHide.animate({left: "-100em"}, 100);

			//hide A-Propos page		
			var aproposHide = $(".a-propos-div");
			aproposHide.animate ({width: '25px', left: '73.5%'/*left: '1000px'*/},700);
			aproposHide.animate ({opacity: '0', height: '0'},500);		

			//JS for hiding transition for the Tarifs page	
			var classesHide = $(".tarifs-div");								
			classesHide.animate ({width: '25px', left: '82%'/*left: '1150px'*/},700);
			classesHide.animate ({opacity: '0', height: '0'},500);	

			// JS for hiding transition for the BLOG page	
			var blogHide = $(".blog-div");
			blogHide.animate ({width: '25px', left: '91.2%'/*left: '1250px'*/},700);			
			blogHide.animate ({opacity: '0', height: '0'},500);		

			//Returns color of Header Div LINKS <a> back to normal	
			var removeHeaderColors = $(".what-we-do a, .tarifs a, .blog a");	
			removeHeaderColors.animate({color: '#0B1C5C'}, 1000);

			//Returns color of other Header Divs back to normal
			var removeHeaderBgColors = $(".what-we-do, .tarifs, .blog");
			removeHeaderBgColors.animate({height: '5px', backgroundColor: 'black'}, 1000);	


			//Rotate and Move Animation//
			//var btnBlueDiv = $("#btn-blue");
			//	btnBlueDiv.animate({opacity:'1'},4200);
			//btnFakeBlueDiv.animateRotate(90, {        
			// duration: 2800, 
			// swing: "linear", 
			// complete: function(){
			//	console.log(this);}
			//});
			//btnFakeBlueDiv.animate({left: '0', top:'0', width: '100%'},2800);

			/*
			//JS for animating the page called			
			var btnBlueDiv = $(".btn-blue-div");									
			btnBlueDiv.stop(true,false);
			btnBlueDiv.animate({left: '40%', width: '18.8em'}, 0);
			btnBlueDiv.animate({opacity: '1'}, 2500);	
			btnBlueDiv.animate({left: '0', top: '0', width: '2%', height: '100%'},2800);
			//aProposDiv.animate({left: '0'}, 500);
			btnBlueDiv.animate({height: '100%'}, 500);  					//MAKES THE A PROPOS CONTAINER EXPAND//
			//aProposDiv.animate({opacity: '1'}, 500);
			*/

			//Rotating the content in btn-blue-div

		});			
	});	

	//A PROPOS SCRIPT//
	//===============//
	//===============//

	$(document).ready(function(){		//SEQUENTIAL PAGE INSERT//
		$(".what-we-do"/*aka A PROPOS Page*/).click(function(){

			//Assign .processing class to current page to DISABLE ability to continually click
			var $this = $(".what-we-do");
			if ($this.hasClass('processing'))
			return;	
			$this.addClass('processing');

			//Remove .processing class to allow user to click into other pages
			var removeClasses = $(".tarifs, .blog, .logo");
			removeClasses.removeClass('processing');

			//animate header backgroundColor to change to match color of relevant page		
			var headerShine = $(".what-we-do");
			headerShine.animate({height: '50px'}, 250);
			headerShine.animate({backgroundColor: '#9B78C8'}, 1750);
			$(".what-we-do a").animate({color: 'white'},1750);	

			//Sets Z-Index of previous Pages lower to allow "animation" to appear on top	
			var zIndexPages = $("#tarifs, #blog");								
			zIndexPages.animate({zIndex: '5'},0);

			//stop all animations on other pages when clicking on a page while another is loading. ex: hitting a propos and then clicking classes immediately	
			var allStop = $("#btn-blue, .btn-blue, .carousel-caption, .carousel-caption2, .tarifs, .blog, .logo, .tarifs-div, .blog-div, .hero, #tarifs-h1, #blog-h1, .mp-header, .mp-text, .mp-img");
			allStop.stop(true);	

			//Opaques the layer being replaced to allow animation to transition smoothly + adds display: none to BG Video	
			var heroHide = $(".hero");											
			heroHide.animate({opacity: '0'}, 800, function() {
					$(".fullscreen-bg__video").css({display: 'none'});
				});

			$(".carousel-caption").animate({height: ['0','swing']}, 600, function(){
				$(".carousel-caption2").animate({height: ['0','swing']}, 600, function(){
					$(".carousel-inner img").animate({opacity: ['0','swing']}, 700, function(){
						$("#btn-blue").animate({top: '0', width: '0.8em', height: '64px'});
					});
				});
			});

			var titleHide = $("#tarifs-h1, #blog-h1, .mp-header, .mp-text, .mp-img");	
			titleHide.animate({opacity: '0'}, 300);
			titleHide.animate({left: "-100em"}, 100);

			//JS for hiding transition for the Classes or COURS page	
			var classesHide = $(".tarifs-div");								
			classesHide.animate ({width: '25px', left: '82%'/*left: '1150px'*/},700);
			classesHide.animate ({opacity: '0', height: '0'},500);	

			// JS for hiding transition for the BLOG page	
			var blogHide = $(".blog-div");
			blogHide.animate ({width: '25px', left: '91.2%'/*left: '1250px'*/},700);			
			blogHide.animate ({opacity: '0', height: '0'},500);		

			//Returns color of Header Div LINKS <a> back to normal	
			var removeHeaderColors = $(".tarifs a, .blog a");	
			removeHeaderColors.animate({color: '#0B1C5C'}, 1000);

			//Returns color of other Header Divs back to normal
			var removeHeaderBgColors = $(".tarifs, .blog");
			removeHeaderBgColors.animate({height: '5px', backgroundColor: 'black'}, 1000);

			//JS for animating the page called			
			var aProposDiv = $(".a-propos-div");									
			aProposDiv.stop(true,false);
			aProposDiv.animate({opacity: '1'}, 0);	
			aProposDiv.animate({height: '100%'},800);
			aProposDiv.animate({left: '0'}, 500);
			aProposDiv.animate({width: '100%'}, 500);  	//MAKES THE A PROPOS CONTAINER EXPAND//
			//aProposDiv.animate({opacity: '1'}, 500);

			// Moving the H1 text in after the page animation finishes	
			var aProposDivH1 = $("#a-propos-h1");								
			aProposDivH1.animate({fontSize: '1.8em'}, 300);
			aProposDivH1.animate({color: 'white'}, 300);
			aProposDivH1.animate({marginTop: '1em'}, 300);
			aProposDivH1.animate({left: '4.5em'}, 300);
			aProposDivH1.animate({opacity: '1'}, 1500);
			zIndexPages.animate({zIndex: '6'},0);

			var aProposDivContent = $(".mp-text, .mp-header, .mp-img");
			var aProposMpText = $(".mp-text");
			var aProposMpHeader = $(".mp-header");
			var aProposMpImg = $(".mp-img");
			var aProposMpParagraph = $(".mp-paragraph");
			aProposDivContent.animate({opacity: '1'}, 1300);
			aProposMpText.animate({left: '6em'}, 400);
			aProposMpHeader.animate({left: '1em'}, 600);
			aProposMpImg.animate({left: '55em'}, 800);
			aProposMpParagraph.animate({left: '3em'}, 1000);

		});	
	});

	//COURS SCRIPT//
	//===============//
	//===============//

	$(document).ready(function(){											// CLASSES SEQUENTIAL PAGE INSERT//
	$(".tarifs").click(function(){

	//Assign .processing class to current page to DISABLE ability to continually click
	var $this = $(".tarifs");
	if ($this.hasClass('processing'))
	return;	
	$this.addClass('processing');

	//Remove above code to OTHER pages to allow clicking into other pages
	var removeClasses = $(".what-we-do, .blog, .logo");
	removeClasses.removeClass('processing');

	//animate header backgroundColor to change to match color of relevant page		
	var headerShine = $(".tarifs");
	headerShine.animate({height: '50px'}, 250);
	headerShine.animate({backgroundColor: '#77DD77'}, 1750);
	$(".tarifs a").animate({color: 'white'},1750);	

	//lower zindex of other pages to allow content to show	
	var zIndexPages = $("#a-propos, #blog");
	zIndexPages.animate({zIndex: '5'},0);	

	//stop all animations on other pages when clicking on a page while another is loading. ex: hitting a propos and then clicking classes immediately	
	var allStop = $(".what-we-do, .blog, .logo, .a-propos-div, .blog-div, .hero, #a-propos-h1, #blog-h1, .mp-header, .mp-text, .mp-img");
	allStop.stop(true);

	//hide .hero div when user lands on homepage and clicks any page	
	var heroHide = $(".hero");
	heroHide.animate({opacity: '0'}, 800);

	//Hide content of page user is leaving
	var titleHide = $("#a-propos-h1, #blog-h1, .mp-header, .mp-text, .mp-img");	
	titleHide.animate({opacity: '0'}, 300);	
	titleHide.animate({left: "-100em"}, 100);

	//hide current page		
	var aproposHide = $(".a-propos-div");
	aproposHide.animate ({width: '25px', left: '73.5%'/*left: '1000px'*/},700);
	aproposHide.animate ({opacity: '0', height: '0'},500);	

	//hide current page	
	var blogHide = $(".blog-div");
	blogHide.animate ({width: '25px', left: '91.2%'/*'1250px'*/},700);
	blogHide.animate ({opacity: '0', height: '0'},500);		

	//Returns color of Header Div LINKS <a> back to normal	
	var removeHeaderColors = $(".what-we-do a, .blog a");	
	removeHeaderColors.animate({color: '#0B1C5C'}, 1000);

	//Returns color of other Header Divs back to normal
	var removeHeaderBgColors = $(".what-we-do, .blog");
	removeHeaderBgColors.animate({height: '5px', backgroundColor: 'black'}, 1000);	

	//Begin animation of clicked page	
	var aProposDiv = $(".tarifs-div");
	aProposDiv.animate({opacity: '1'}, 0);
	aProposDiv.animate({height: '100%'},800); //changed to % over vh
	aProposDiv.animate({left: '0'}, 500);
	aProposDiv.animate({width: '100%'}, 500);  			//MAKES THE A PROPOS CONTAINER EXPAND//
	aProposDiv.animate({opacity: '1'}, 500);

	//Begin animation of clicked page's h1			
	var aProposDivH1 = $("#tarifs-h1");
	aProposDivH1.animate({fontSize: '1.8em'}, 300);
	aProposDivH1.animate({color: 'white'}, 300);
	aProposDivH1.animate({marginTop: '1em'}, 300);
	aProposDivH1.animate({left: '4.5em'}, 300);
	aProposDivH1.animate({opacity: '1'}, 1500);
	zIndexPages.animate({zIndex: '6'},0);

	//begin animation of clicked page's content (mp-content)			
	var aProposDivContent = $(".mp-text, .mp-header, .mp-img");
	var aProposMpText = $(".mp-text");
	var aProposMpHeader = $(".mp-header");
	var aProposMpImg = $(".mp-img");
	var aProposMpParagraph = $(".mp-paragraph");
	aProposDivContent.animate({opacity: '1'}, 1300);
	aProposMpText.animate({left: '6em'}, 400);
	aProposMpHeader.animate({left: '1em'}, 600);
	aProposMpImg.animate({left: '55em'}, 800);
	aProposMpParagraph.animate({left: '3em'}, 1000);		
	});	

	});

									
	//BLOG SCRIPT//
	//===============//
	//===============//

	// CLASSES SEQUENTIAL PAGE INSERT//
	$(document).ready(function(){											
	$(".blog").click(function(){

	//Assign .processing class to current page to DISABLE ability to continually click
	var $this = $(".blog");
	if ($this.hasClass('processing'))
	return;	
	$this.addClass('processing');

	//remove the ".processing" from .what-we-do and .tarifs to allow clicking//
	var removeClasses = $(".what-we-do, .tarifs, .logo");
	removeClasses.removeClass('processing');

	//animate header backgroundColor to change to match color of relevant page		
	var headerShine = $(".blog");
	headerShine.animate({height: '50px'}, 250);
	headerShine.animate({backgroundColor: '#E79A8E'}, 1750);
	$(".blog a").animate({color: 'white'},1750);

	//Lower Z-Index to allow previous pages to come above//	
	var zIndexPages = $("#tarifs, #a-propos");
	zIndexPages.animate({zIndex: '5'},0);

	//stop all animations on other pages when clicking on a page while another is loading. ex: hitting a propos and then clicking classes immediately	
	var allStop = $(".what-we-do, .tarifs, .logo, .a-propos-div, .tarifs-div, .hero, #a-propos-h1, #tarifs-h1, .mp-header, .mp-text, .mp-img");
	allStop.stop(true);	

	//Hide the .hero div when animating other pages in from home	
	var heroHide = $(".hero");
	heroHide.animate({opacity: '0'}, 800);

	//Shift .moving-pages headers and text before fading out	
	var titleHide = $("#tarifs-h1, #a-propos-h1, .mp-header, .mp-text, .mp-img");	
	titleHide.animate({opacity: '0'}, 300);	
	titleHide.animate({left: "-100em"}, 100);

	//hide current page when clicking on another page		
	var classesHide = $(".tarifs-div");
	classesHide.animate ({width: '25px', left: '82%'},700);
	classesHide.animate ({opacity: '0', height: '0'},500);	

	//hide current page when clicking on another page	
	var aproposHide = $(".a-propos-div");
	aproposHide.animate ({width: '25px', left: '73.5%'},700);
	aproposHide.animate ({opacity: '0', height: '0'},500);						

	//Returns color of Header Div LINKS <a> back to normal	
	var removeHeaderColors = $(".tarifs a, .a-propos a");	
	removeHeaderColors.animate({color: '#0B1C5C'}, 1000);

	//Returns color of other Header Divs back to normal
	var removeHeaderBgColors = $(".tarifs, .a-propos");
	removeHeaderBgColors.animate({height: '5px', backgroundColor: 'black'}, 1000);	

	//Begin animation of clicked page	 
	var aProposDiv = $(".blog-div");
	aProposDiv.animate({opacity: '1'}, 0);
	aProposDiv.animate({height: '100%'},800);
	aProposDiv.animate({left: '0'}, 500);
	aProposDiv.animate({width: '100%'}, 500);  			//MAKES THE A PROPOS CONTAINER EXPAND//
	aProposDiv.animate({opacity: '1'}, 500);

	//Begin animation of clicked page's h1	
	var aProposDivH1 = $("#blog-h1");
	aProposDivH1.animate({fontSize: '1.8em'}, 300);
	aProposDivH1.animate({color: 'white'}, 300);
	aProposDivH1.animate({marginTop: '1em'}, 300);
	aProposDivH1.animate({left: '4.5em'}, 300);
	aProposDivH1.animate({opacity: '1'}, 1500);
	zIndexPages.animate({zIndex: '6'},0);

	//begin animation of clicked page's content (mp-content)	
	var aProposDivContent = $(".mp-text, .mp-header, .mp-img");
	var aProposMpText = $(".mp-text");
	var aProposMpHeader = $(".mp-header");
	var aProposMpImg = $(".mp-img");
	var aProposMpParagraph = $(".mp-paragraph");
	aProposDivContent.animate({opacity: '1'}, 1300);
	aProposMpText.animate({left: '6em'}, 400);
	aProposMpHeader.animate({left: '1em'}, 600);
	aProposMpImg.animate({left: '55em'}, 800);
	aProposMpParagraph.animate({left: '3em'}, 1000);	

	});	
	});



	//CAROUSEL JS//
	//===========//
	//----====-----//



	if (typeof jQuery === 'undefined') {
	  throw new Error('Bootstrap\'s JavaScript requires jQuery')
	}

	+function ($) {
	  'use strict';
	  var version = $.fn.jquery.split(' ')[0].split('.')
	  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
	    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
	  }
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: transition.js v3.3.7
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap')

	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }

	    return false // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }

	  $(function () {
	    $.support.transition = transitionEnd()

	    if (!$.support.transition) return

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: alert.js v3.3.7
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }

	  Alert.VERSION = '3.3.7'

	  Alert.TRANSITION_DURATION = 150

	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = $(selector === '#' ? [] : selector)

	    if (e) e.preventDefault()

	    if (!$parent.length) {
	      $parent = $this.closest('.alert')
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'))

	    if (e.isDefaultPrevented()) return

	    $parent.removeClass('in')

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }

	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
	      removeElement()
	  }


	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')

	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.alert

	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert


	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }


	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: button.js v3.3.7
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }

	  Button.VERSION  = '3.3.7'

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }

	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()

	    state += 'Text'

	    if (data.resetText == null) $el.data('resetText', $el[val]())

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state])

	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d).prop(d, true)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d).prop(d, false)
	      }
	    }, this), 0)
	  }

	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')

	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false
	        $parent.find('.active').removeClass('active')
	        this.$element.addClass('active')
	      } else if ($input.prop('type') == 'checkbox') {
	        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
	        this.$element.toggleClass('active')
	      }
	      $input.prop('checked', this.$element.hasClass('active'))
	      if (changed) $input.trigger('change')
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
	      this.$element.toggleClass('active')
	    }
	  }


	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.button', (data = new Button(this, options)))

	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }

	  var old = $.fn.button

	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button


	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }


	  // BUTTON DATA-API
	  // ===============

	  $(document)
	    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      var $btn = $(e.target).closest('.btn')
	      Plugin.call($btn, 'toggle')
	      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
	        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
	        e.preventDefault()
	        // The target component still receive the focus
	        if ($btn.is('input,button')) $btn.trigger('focus')
	        else $btn.find('input:visible,button:visible').first().trigger('focus')
	      }
	    })
	    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
	    })

	}(jQuery);


	/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 240000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */