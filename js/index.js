$(function () {
  // .openingのjs
  $('.opening').on('touchmove.noScroll', function(e) {
    e.preventDefault();
  });
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

  // .mainのjs
  $('h3, li').css({opacity: '0'});
  $('.title').textillate({
    initialDelay: 7000,
    autoStart: true,
    in: {
      effect: 'fadeInDown',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false
    }
  });
  setTimeout(function () {
    $('h3').stop().animate({opacity: '1'}, 3000);
  }, 15000);
  setTimeout(function () {
    $('li').stop().animate({opacity: '1'}, 3000);
  }, 17000);
});