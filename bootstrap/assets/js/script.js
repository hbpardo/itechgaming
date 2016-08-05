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

	$('p.caption a').each(function(){
		$(this).each(function(){
			var txt = $(this).html().length;
			var cont = $(this).html();

			if (txt >= 30) {
				$(this).html(cont.substring(0,29) + '...');
			} else {
				$(this).html(cont);
			}

			console.log(txt + ' ' +cont);
		});
	});

});