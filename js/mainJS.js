$(document).ready(function () { 
 $('.menu').on('click', function(e) {
    e.preventDefault()
  $('.navbar-burger').toggleClass('burger-open');
 });
 	$('.slider').slick({
   arrows: false,
   autoplay: true
   });

});