$(document).ready( function(){


/* Hamburger animation
========================================================================== */

$(".Nav-hb" ).click( function() {
  toggleOffCanvas();
  $( this ).toggleClass( "is-active" );
  $( "html" ).toggleClass( "is-noScroll" );
});

function toggleOffCanvas() {
  if ( $( ".Nav-offCanvas" ).hasClass( "is-active" ) ) {
    // Close
    $( ".Nav-offCanvas" ).removeClass( "is-active" );
  } else {
    // Open
    $( ".Nav-offCanvas" ).addClass( "is-active" ).scrollTop( this );
  }
}

/* Flickity
========================================================================== */

$( '.Carousel' ).flickity({
  cellAlign: 'center',
  cellSelector: '.Carousel-item',
  wrapAround: true,
  contain: true,
  pageDots: false,
  initialIndex: 1
});



}); // End Doc Ready

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