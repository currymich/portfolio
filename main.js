$(document).ready(function(){
  $('#menuButton').on('click', function(event){
    $('header nav ul li').toggleClass('extended')
  })
})

// http://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('header').css({'height': '0', 'overflow': 'hidden'});
       $('header nav ul li').removeClass('extended');
   } else {
       $('header').css({'background': 'rgb(255, 255, 255)','height': '3.0em', 'overflow': 'visible'})
   }
   lastScrollTop = st;
   if (st == 0) {
     $('header').css({'background': 'transparent'})
   }
});
