$(document).ready(function(){
	
	$('#video').click(function() {
		$('.image-cont').hide();
		$('.video-cont').show();
		$('#image').removeClass('active');
		$('#image').addClass('control');
		$(this).removeClass('control');
		$(this).addClass('active');
	});

	$('#image').click(function() {
		$('.video-cont').hide();
		$('.image-cont').show();
		$('#video').removeClass('active');
		$('#video').addClass('control');
		$(this).removeClass('control');
		$(this).addClass('active');
	});

});