$(document).ready( function(){

/* Functions
========================================================================== */

function toggleState( container, state ) {
  if ( $( container ).hasClass( state ) ) {
    // Close
    $( $( container ) ).removeClass( state );
  } else {
    // Open
    $( $( container ) ).addClass( state );
  }
}

/* Author expand
========================================================================== */

$( ".Author-biogExpand" ).click( function() {
  
  toggleState( ".Author-biog", "is-closed" );
  $( this ).hide();
});

/* Block expand
========================================================================== */

$(".Block-headerContentSummaryCTAsToggle" ).click( function() {
  toggleState( $( this ).parents( ".Block-header" ).next(), "is-hidden" );

  /**
   * Resizes carousel so Slick can calculate
   * dimensions after .is-hidden is removed
   * from container. 
   * See: https://github.com/kenwheeler/slick/issues/1004.
   * Need to call resize and then reset slick dimensions
   * to ensure carousel centres correctly.
   */
  $( this ).parents( ".Block-header" ).next().find( ".Panel-carousel" ).resize().slick( "setDimensions" );

});

/* Hamburger animation
========================================================================== */

$(".Nav-hb" ).click( function() {
  toggleState( ".Nav-offCanvas", "is-active" );

  /* HB animation */
  $( this ).toggleClass( "is-active" );
  
  /* Add class to disable scroll */
  $( "html" ).toggleClass( "is-noScroll" );
});

/* Button actions
========================================================================== */

/* Show more */
$(".Btn" ).click( function() {
  toggleState( $( this ), "is-on" );
});

/* Slick carousel
========================================================================== */

$('.Panel-carousel').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  prevArrow: '<button type="button" class="Panel-carouselArrowPrev"></button>',
  nextArrow: '<button type="button" class="Panel-carouselArrowNext"></button>',
  responsive: [
    {
      breakpoint: 799,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

/* Clipboard
========================================================================== */

new Clipboard('.js-Copy');


/* End doc ready */
});

/* Navbar animation
========================================================================== */

$( window ).on( 'scroll', function () {
    if ($(this).scrollTop() > 10) {
        if (!$( '.Nav' ).hasClass( 'is-scrolled' )) {
            $( '.Nav' ).addClass( 'is-scrolled' );
        }
    } else {
        if ($( '.Nav' ).hasClass( 'is-scrolled' )) {
            $( '.Nav' ).removeClass( 'is-scrolled' );
        }
    }
});