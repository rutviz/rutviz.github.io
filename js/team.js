jQuery(document).ready(function($) {
	$('.c1').on('click', function(e) {
		e.preventDefault();

		$('.card').toggleClass('expanded');
	});
	$('.c2').on('click', function(e) {
		e.preventDefault();

		$('.card1').toggleClass('expanded');
	})
});