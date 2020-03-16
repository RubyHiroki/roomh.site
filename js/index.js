$(function () {
  $('.opening p').css({opacity: '0'});
  setTimeout(function () {
    $('.first').stop().animate({opacity: '1'}, 3000);
  }, 1000);
  setTimeout(function () {
    $('.first').stop().animate({opacity: '0'}, 3000);
  }, 7000);
  setTimeout(function () {
    $('.second').stop().animate({opacity: '1'}, 3000);
  }, 9000);
  setTimeout(function () {
    $('.second').stop().animate({opacity: '0'}, 3000);
  }, 15000);
});