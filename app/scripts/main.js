$(function() {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  $('.count-board h5,').flowtype({
    minimum: 320,
    maximum: 1200,
    minFont: 12,
    maxFont: 40,
    fontRatio : 30

  });

});
