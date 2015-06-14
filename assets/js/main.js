// Header menu FX
var $head = $( '.nav-top' );
$('.header-waypoint').each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );
	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$head.attr('class', 'nav-main nav-top ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$head.attr('class', 'nav-main nav-top ' + animClassUp);
		}
	}, { offset: '-25%' } );
});

// Isotope
var $container = $('.isotope-container');
$(document).ready(function() {
	$container.imagesLoaded( function() {
		$container.isotope({
			itemSelector: '.isotope-item',
		});
	});
});



