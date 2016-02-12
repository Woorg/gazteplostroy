$('document').ready(function() {

	/*Плавный скроулинг*/

	$(window).scroll(function (){
		if ($(this).scrollTop() > 250)
			$('.topline').fadeIn();
		else
			$('.topline').fadeOut(300);
	});

	$('a[href*=#]').click(function(){
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
		return false;
	});

	// popup
	$('.js_popup').magnificPopup({
		type: 'inline',
		midClick: true,
		callbacks: {
			open: function() {
				// Will fire when this exact popup is opened
				// this - is Magnific Popup object
			},
			close: function() {
			  // Will fire when popup is closed

			}
		// e.t.c.
  		}
	});


});
