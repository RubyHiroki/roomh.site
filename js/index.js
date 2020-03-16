$(function () {
  $('.main').hide();
  $('.opening p').css({opacity: '0'});
  setTimeout(function () {
    $('.first').stop().animate({opacity: '1'}, 1000);
  }, 3000);
});