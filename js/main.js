(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		$('.video-play-icon').magnificPopup({type:'video'});


		// $(".header-area").sticky({topSpacing:0});

    // jQuery scroll psy
    $('body').scrollspy({ 
        target: '.navbar-collapse',
        offset: 95
    }); 


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	