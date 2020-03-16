$(function() {
  $('.main').css({opacity: '0'});
  setTimeout(function() {
  $('.main').stop().animate({opacity: '1'}, 1000);
}, 3000);
});