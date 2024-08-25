(function ($) {
  function homeAnimation() {
    let offsetValue = $('.site-header').outerHeight();
    let fadeUpElements = $(
      '\
         .section-title\
      '
    );
    fadeUpElements.attr({
      "data-aos": "fade-up",
      "data-aos-delay": "10",
      "data-aos-duration": "1000",
      "data-aos-offset": offsetValue
    });
    let delayGap = 300;
    oneByOneWrapper = $(
      '\
      .products-container\
      '
    );
    fadeUpOneByOne(
      oneByOneWrapper,
      delayGap
    );
    function fadeUpOneByOne(wrapper, delayGap) {
      wrapper.each(function () {
        delay = 0;
        $(this)
          .find('>*')
          .each(function () {
            var item = $(this);
            item.attr({
              "data-aos": "fade-up",
              'data-aos-delay': delay,
              "data-aos-duration": "1000",
              "data-aos-offset": offsetValue
            });
            delay += delayGap;
          });
      });
    }
    AOS.init({
      disable: 'phone',
      once: true
    });
  }

  $(window).on('load', function () {
    setTimeout(function () {
      homeAnimation();
    }, 1500);
  });
}(jQuery));
