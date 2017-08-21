//Hamburger menu functionality
$(document).ready(function() {
	$("#menuButton").on("click", function(event) {
		$("header nav ul li").toggleClass("extended");
		// $("header").css({ overflow: "visible" });
	});
});

// http://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event

var lastScrollTop = 0;
$(window).scroll(function(event) {
	//measure where user is scrolled on page
	var currentScrollTop = $(this).scrollTop();

	//if they are scrolling down, hide nav
	if (currentScrollTop > lastScrollTop && currentScrollTop > 60) {
		$("header").removeClass("extended");
		$("header nav ul li").removeClass("extended");
		//if they are scrolling up, show nav
	} else {
		$("header").addClass("extended")
	}

	//if the user is scrolled to top...
	if (currentScrollTop < 60) {
		$("header").css({ "border-bottom": "none" });
	} else {
		$("header").css({ "border-bottom": "1px solid #eee" });
	}

	lastScrollTop = currentScrollTop;
});
