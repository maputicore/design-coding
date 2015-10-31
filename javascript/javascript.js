// Javascript
$( document ).ready(function() {
	// get and set width for content
	// setting home page
	$('section.home').show(); 
	// none scroll
	$('html').css('overflow', 'hidden');
  set_width_value();
  getClass();
});
// resize set value
$( window ).resize(function() {
	set_width_value();
});
// function define
function set_width_value () {
	var width_vale = $(window).width();
  $(".main-content").width(width_vale - 45);
};
function getClass () {
	$(".left-slider li").each(function() {
		$(this).click(function() {
			var className = $(this).attr('class');
			$('section').hide();
			$(".left-slider li").removeClass('active');
			$(".left-slider li i").removeClass('active-icon');
			$("." + className).show();
			$(this).children().addClass('active-icon')
			$(this).addClass('active');
		});
	});
};
