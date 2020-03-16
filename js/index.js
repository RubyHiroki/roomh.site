$(function() {
  $('.main').css({display: 'none'});
  setTimeout(function() {
  $('.main').stop().animate({display: 'block'}, 1000);
}, 3000);
});