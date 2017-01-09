$(document).ready(function(){
  $('#menuButton').on('click', function(event){
    $('header nav ul li').toggleClass('active')
  })
})

// http://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('header').css('height', '0');
   } else {
       $('header').css('height', 'auto')
   }
   lastScrollTop = st;
});
