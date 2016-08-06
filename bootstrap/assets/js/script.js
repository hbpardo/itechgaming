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
		});
	});

	//show hide recomendations
	var showbtn = $('#show-btn');
	var hidebtn = $('#close-btn');
	var banner = $('#rec-banner');

	hidebtn.click(function(){
		showbtn.show();
		banner.fadeOut('fast');
		$(this).hide();
	});

	showbtn.click(function(){
		hidebtn.show();
		banner.fadeIn('fast');
		$(this).hide();
	});

	$('#btn-menu').click(function(){
		$('#menu').slideToggle();
		$('i',this).toggleClass("glyphicon-menu-hamburger glyphicon-chevron-up");
	});
	

});


var id;
$(window).on('resize', (function() {
    clearTimeout(id);
    id = setTimeout(doneResizing, 500);
    
}));

function doneResizing(){
	var win = $(this); //this = window
  if (win.width() >= 985) {
  	$('#menu').show();

  	if ($('#btn-menu i').attr('class') === 'glyphicon glyphicon-chevron-up') {
			$('#btn-menu i').removeClass("glyphicon-chevron-up");
			$('#btn-menu i').addClass("glyphicon-menu-hamburger");
		}
  	
   }
  	

  if (win.width() <= 984) {
  	$('#menu').hide();

  	if ($('#btn-menu i').attr('class') === 'glyphicon glyphicon-chevron-up') {
			$('#btn-menu i').removeClass("glyphicon-chevron-up");
			$('#btn-menu i').addClass("glyphicon-menu-hamburger");
		}
		

  }
}

