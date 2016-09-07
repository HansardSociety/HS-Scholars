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

/* Body click events
========================================================================== */

$( "body" ).click( function() {
  $( ".Tooltip" ).hide();
});

/* Block expand
========================================================================== */

$( ".Block-headerContentSummaryCTAsToggle" ).click( function() {
  toggleState( $( this ).parents( ".Block-header" ).next(), "is-hidden" );

  if ( !$( this ).parents( ".Block-header" ).next().hasClass( "is-hidden" ) ) {
    $( this ).find( ".Btn-text" ).text( "Show less" );
  } else {
    $( this ).find( ".Btn-text" ).text( "Show more" );
  }

  /**
   * Resizes carousel so Slick can calculate
   * dimensions after .is-hidden is removed
   * from container. 
   * See: https://github.com/kenwheeler/slick/issues/1004.
   * Need to call resize and then reset slick dimensions
   * to ensure carousel centres correctly.
   */
  $( this ).parents( ".Block-header" ).next().find( ".Panel-carousel" ).resize().slick( 'setDimensions' );

});

/* Caption expand
========================================================================== */

$( ".Photo-captionOpen" ).click( function(){

  toggleState( $( this ).parent( ".Photo-caption" ), "is-hidden" );
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

/* Gallery */
$('.Panel-carousel--gallery').slick({
  infinite: true,
  focusOnSelect: true,
  adaptiveHeight: true,
  slidesToScroll: 1,
  mobileFirst: true,
  prevArrow: '<button type="button" class="Panel-carouselArrowPrev"></button>',
  nextArrow: '<button type="button" class="Panel-carouselArrowNext"></button>',
  centerMode: true,
  variableWidth: true
});

/* Three boxes */
$('.Panel-carousel--3').slick({
  infinite: true,
  focusOnSelect: true,
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

var clipboard = new Clipboard('.js-Clipboard');

clipboard.on('success', function(e) {
  $( e.trigger )
    .append( "<span class='Tooltip'><p class='Tooltip-text'>Copied!</p></span>" )
    .find( ".Tooltip" )
    .velocity( "fadeOut",
      {
        delay: 800,
        duration: 200
      }, {
        easing: "linear"
      }
    );
});
clipboard.on('error', function(e) {
  
  $( e.trigger )
    .append( "<span class='Tooltip'><p class='Tooltip-text'>" + e.text + "</p></span>" );
});

/* End doc ready */
});

/* Navbar animation
========================================================================== */

$( window ).on( 'scroll', function () {
    if ( $( this ).scrollTop() > 10 ) {
        if ( !$( '.Nav' ).hasClass( 'is-scrolled' ) ) {
            $( '.Nav' ).addClass( 'is-scrolled' );
        }
    } else {
        if ($( '.Nav' ).hasClass( 'is-scrolled' )) {
            $( '.Nav' ).removeClass( 'is-scrolled' );
        }
    }
});