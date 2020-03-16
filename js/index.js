$(function () {
  // .openingのjs
  $('.opening p').css({opacity: '0'});
  setTimeout(function () {
    $('.first').stop().animate({opacity: '1'}, 3000);
  }, 300);
  setTimeout(function () {
    $('.first').stop().animate({opacity: '0'}, 3000);
  }, 3300);
  setTimeout(function () {
    $('.second').stop().animate({opacity: '1'}, 3000);
  }, 6300);
  setTimeout(function () {
    $('.second').stop().animate({opacity: '0'}, 3000);
  }, 9300);

  setTimeout(function () {
    $('.opening').fadeOut(1000, function () {
      $(this).remove();
    });
    $('.main').appendTo('.main').hide().fadeIn(1000);
  }, 13000);
});