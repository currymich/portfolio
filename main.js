$(document).ready(function(){
  $('#menuButton').on('click', function(event){
    $('header nav ul li').toggleClass('extended')
  })
})

// http://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event

var lastScrollTop = 0;
$(window).scroll(function(event){
  //measure where user is scrolled on page
  var currentScrollTop = $(this).scrollTop();

  //if they are scrolling down, hide nav
  if (currentScrollTop > lastScrollTop){
    $('header').css({'height': '0', 'overflow': 'hidden'});
    $('header nav ul li').removeClass('extended');

  //if they are scrolling up, show nav
  } else {
    $('header').css({'background': 'rgb(255, 255, 255)','height': '3.0em'})
  }

  //if the user is scrolled to top...
  if (currentScrollTop == 0) {
    $('header').css({'background': 'transparent', 'border-bottom': 'none'})
  } else {
    $('header').css({'background': '#fff', 'border-bottom': '1px solid #ddd'})
  }

  lastScrollTop = currentScrollTop;
});
