$(document).ready(function(){

	$('#btn-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 100);
    return false;
	});

	$(window).scroll(function() {
    if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
        $('.btn-to-top').fadeIn();
    } else {
    		$('.btn-to-top').fadeOut();
    }
  });

  $('#nav-icon').click(function(){
  	//$('#mobile-menu').slideToggle('fast');
  	
  	// $(this).find('span')
  	// 	.toggleClass('glyphicon-menu-hamburger animated tada')
  	// 	.toggleClass('glyphicon-remove-circle animated flipInX');

    $(this).toggleClass('open');
    $('#mobile-menu').slideToggle('fast');
  });


  $('#btn-nav').click(function(e){
    console.log('Dorae Mo-on');
    $('.second-menu-link').slideToggle('slow', function(){
      console.log('Initiated');
    });

    $(this).find('span')
      .toggleClass('glyphicon-chevron-down animated tada')
      .toggleClass('glyphicon-chevron-up animated flipInX');
    e.preventDefault(e);
  });

});