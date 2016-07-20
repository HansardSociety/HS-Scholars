$(document).ready( function(){

/* Smooth scroll
========================================================================== */

$(".Byline-contBelow" ).on("click", function(){

  $(".Content-main").velocity("scroll", {
      
    duration: 800,
    offset: -96
  });
});

/* Open profile
========================================================================== */

$(".Profile-headerExpand" ).click( function() {
  toggleProfile();
  $(this).toggleClass( "is-on" );
  $(this).toggleClass( "is-off" );
  $(this).parent().next().toggleClass( "is-closed" );
});

function toggleProfile() {
  var $profileBiog = $(this).parent().next();

  if ( $profileBiog.hasClass("is-closed") ) {
    // Close
    $profileBiog.removeClass("is-closed");
  } else {
    // Open
    $profileBiog.addClass("is-closed");
  }
}

/* Off canvas
========================================================================== */

$(".Nav-rowToggle" ).click( function() {
  toggleOffCanvas();
  $(this).find(".HB").toggleClass( "is-active" );
});

function toggleOffCanvas() {
  if ( $(".OffCanvas").hasClass("is-active") ) {
    // Close
    $(".OffCanvas").removeClass("is-active");
  } else {
    // Open
    $(".OffCanvas").addClass("is-active").scrollTop(this);
  }
}

/* FitVids
========================================================================== */

$(".Content-main").fitVids();

/* Accordion
========================================================================== */

$(".Accordion-title" ).click( function() {
  toggleAccordion();
  $(this).toggleClass( "is-on" );
  $(this).toggleClass( "is-off" );
  $(this).next().toggleClass( "is-closed" );
});

function toggleAccordion() {
  var $accordionContent = $(this).next();

  if ( $accordionContent.hasClass("is-closed") ) {
    // Close
    $accordionContent.removeClass("is-closed");
  } else {
    // Open
    $accordionContent.addClass("is-closed");
  }
}

/* Keep reading
========================================================================== */

$(".Content-mainTapContinue").click( function() {

  $(this).hide();
  $(".Content-main").removeClass("is-covered");
});


/* Nav menu
========================================================================== */

$(".Dropdown-title").click( function() {
  toggleNavList();
  $(this).next().toggleClass( "is-open" );

  $(".Dropdown-title").not(this).next().removeClass("is-open");

});

$(".Article").click( function() {

  $(".Dropdown-title").next().removeClass("is-open");
});

function toggleNavList() {
  // var $navList = $(this).parent().next();

  if ( $(this).next().hasClass("is-open") ) {
    // Close
    $(this).next().removeClass("is-open");
  } else {
    // Open
    $(this).next().addClass("is-open");

  }
}

/* Flickity
========================================================================== */

$( '.Panel-carousel.is-large' ).flickity({
  cellAlign: 'center',
  wrapAround: true,
  contain: true,
  pageDots: false,
  initialIndex: 1
});
$( '.Panel-carousel.is-small' ).flickity({
  cellAlign: 'center',
  wrapAround: true,
  contain: true,
  pageDots: false,
  watchCSS: true
});

// Flickity FOUC hack
var $gallery = $('.Panel-carousel').removeClass('is-hidden');
// trigger redraw for transition
$gallery[0].offsetHeight;
// init Flickity
$gallery.flickity();

/* Profile overlay
========================================================================== */

$(".PanelCard-actionsToggle" ).click( function() {
  toggleOverlay();

  $(this).toggleClass( "is-on" );
  $(this).toggleClass( "is-off" );

  if ( $(this).hasClass( "is-on" ) ) {
    $(this).find(".Btn-text").text("Close");
  } else {
    $(this).find(".Btn-text").text("Open");
  }

  $(this).next().toggleClass( "is-hidden" );
});

function toggleOverlay() {
  var $overlayContent = $(this).next();

  if ( $overlayContent.hasClass("is-hidden") ) {
    // Close
    $overlayContent.removeClass("is-hidden");
  } else {
    // Open
    $overlayContent.addClass("is-hidden");
  }
}



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