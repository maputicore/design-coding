// Javascript
$( document ).ready(function() {
	// get and set width for content
	// setting home page
	$('section.home').show(); 
	// none scroll
	$('html').css('overflow', 'hidden');
	SetWidthValue();
	SetContentHeightValue();
	SetViewbyClick();
	// set view by button control
	ShowSocialView();
  $(".footer .button-control .fa-arrow-circle-left").click( function () {
		SetViewbyBackButton();
	});
  $(".footer .button-control .fa-arrow-circle-right").click( function () {
		SetViewbyNextButton();
	});
});
// resize set value
$( window ).resize(function() {
	SetWidthValue();
	SetContentHeightValue();
});
// function define
function SetWidthValue () {
	var width_vale = $(window).width();
  $(".main-content").width(width_vale - 45);
};
// function set height content value
function SetContentHeightValue () {
	var height_value = $(window).height();
	$("section .content-section").height(height_value - 110);
};
// Set view by click to icon 
function SetViewbyClick () {
	$(".left-slider li").each(function() {
		$(this).click(function() {
			var className = $(this).attr('class');
			SetView(className);
		});
	});
};
// Set view by next button
function SetViewbyNextButton () {
	var CurrentActiveClass = $( ".left-slider" ).find( ".active" ).attr("name");
	if (CurrentActiveClass == "home") {SetView("blog");};
	if (CurrentActiveClass == "blog") {SetView("setting");};
	if (CurrentActiveClass == "setting") {SetView("about-us");};
	if (CurrentActiveClass == "about-us") {SetView("contact");};
	if (CurrentActiveClass == "contact") {SetView("home");};
};
// Set view by back button
function SetViewbyBackButton () {
	var CurrentActiveClass = $( ".left-slider" ).find( ".active" ).attr("name");
	if (CurrentActiveClass == "home") {SetView("contact");};
	if (CurrentActiveClass == "blog") {SetView("home");};
	if (CurrentActiveClass == "setting") {SetView("blog");};
	if (CurrentActiveClass == "about-us") {SetView("setting");};
	if (CurrentActiveClass == "contact") {SetView("about-us");};
}
// Set view 
function SetView (View) {
	$('section').slideUp(750);
	$(".left-slider li").removeClass('active');
	$(".left-slider li span i").removeClass('active-icon');
	$(".main-content section." + View).slideDown(750);
	$(".left-slider li." + View + " span i").addClass('active-icon')
	$(".left-slider li." + View).addClass('active');
};
function ShowSocialView () {
	$(".footer .social-connect ul li").each(function() {
		$(this).click(function() {
			var AttrName = $(this).attr('title');
			$(".footer .social-view").toggle("slide", {direction:'right'} , "easeOutQuint ", 500);
			switch (AttrName){
			   case "Github": {SetSocialViewDetails("https://github.com/ngocquyhoang", "./images/git.png", AttrName, "Connect us on <br />" + AttrName)};
			   break;
			   case "Facebook": {SetSocialViewDetails("https://www.facebook.com/ngocquyhoang.93", "./images/git.png", AttrName, "Connect us on <br />" + AttrName)};
			   break;				   
			   case "Goolge Plus": {SetSocialViewDetails("https://www.google.com", "./images/git.png", AttrName, "Connect us on <br />" + AttrName)};
			   break;
			   default: {SetSocialViewDetails("https://twitter.com/malloryandbob", "./images/git.png", AttrName, "Connect us on <br />" + AttrName)};
			};
		});
	});
};
function SetSocialViewDetails (link_href, image_src, title_des, button_des) {
	$(".footer .social-view ul li figure figcaption a").attr("href", link_href);
	// $(".footer .social-view ul li figure div img").attr("src", image_src);
	$(".footer .social-view h3").html(title_des);
	$(".footer .social-view a").html(button_des);
}