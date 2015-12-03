$(function() {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 1
  })
  $('body').flowtype({
    minimum: 320,
    maximum: 640,
    minFont: 12,
    maxFont: 35,
    fontRatio: 30

  });
  //
  // $('.lastest-update p').flowtype({
  //   minimum: 320,
  //   maximum: 640,
  //   minFont: 12,
  //   maxFont: 40,
  //   fontRatio : 30
  //
  // });
});
