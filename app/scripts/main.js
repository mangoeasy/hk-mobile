$(function() {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items:1
  })

  $('.count-board h5,.lastest-update p').flowtype({
    minimum: 320,
    maximum: 1200,
    minFont: 12,
    maxFont: 40,
    fontRatio : 30

  });

});
