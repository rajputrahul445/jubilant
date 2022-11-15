$(document).ready(function(){
      $('.slider').owlCarousel({
          loop:true,
          margin:0,
          nav:false,
          autoplay:true,
          autoplayTimeout:10000,
          dots:true,
          navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });
   
    $('.threeSlider').owlCarousel({
          loop:true,
          margin:20,
          nav:true,
          center: true,
          autoplay:true,
          autoplayTimeout:5000,
          dots:true,
          navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:3
              }
          }
      });
    });



$( ".navbar-toggler, .cross-toggler" ).click(function() {
    $(".collapse").toggleClass("active");
    $(".overLay").toggleClass("active");
  });
$( ".searchToggle" ).click(function() {
  $(".searchBar").toggleClass("active");
});

$( ".closeSticky" ).click(function() {
    $(".stickyMenu").hide();
  });
if(window.innerWidth < 991){
  $( ".dropmenuToggle" ).click(function() {
    $(this).parent(".dropdown").toggleClass("active");
  });
}
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 41) {
        $(".mainHeader").addClass("fixedHeader");
    }else{
    	$(".mainHeader").removeClass("fixedHeader");
    }
});




$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

/*==================================================*/
$(function() {
      
        var Page = (function() {

          var $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
              //speed : 540,
              interval : 4500,
              autoplay : true,
              keyboard : false,
              onBeforeChange : function( slide, pos ) {

                $nav.removeClass( 'nav-dot-current' );
                $nav.eq( pos ).addClass( 'nav-dot-current' );


              }
            } ),

            init = function() {

              initEvents();
              
            },
            initEvents = function() {

              $nav.each( function( i ) {
              
                $( this ).on( 'click', function( event ) {
                  
                  var $dot = $( this );
                  
                  if( !slitslider.isActive() ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $dot.addClass( 'nav-dot-current' );
                  
                  }
                  
                  slitslider.jump( i + 1 );
                  return false;
                
                } );
                
              } );

            };

            return { init : init };

        })();

        Page.init();

        /**
         * Notes: 
         * 
         * example how to add items:
         */

        /*
        
        var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
        
        // call the plugin's add method
        ss.add($items);

        */
      
      });
