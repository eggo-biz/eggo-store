(function ($) {
  function setDeviceType() {
    if (!window.matchMedia("(pointer: coarse)").matches) {
      $('body').addClass('non-touch-device');
    }
    else {
      $('body').addClass('touch-device');
    }
  }
  /* Settings for header section */
  function headerSettings() {
    setDeviceType();
    $('a').on('click', function (e) {
      e.preventDefault();
    })
  }
  /* Header Scrolldown animation class set */
  function headerAnimate() {
    if (
      $(window).scrollTop() > 15
    ) {
      $("body").addClass("animate-header");
    } else {
      $("body").removeClass("animate-header");
    }
  }
  $(window).on('load', function () {
    headerSettings();
    setTimeout(function () {
      headerAnimate();
      $('.site-header').addClass('loaded');
      $('body').addClass('header-loaded');
    }, 1000);
  });
  $(window).on('resize', function () {
    setTimeout(function () {
      headerAnimate();
    }, 1000);
  });
  $(window).on("scroll", function () {
    headerAnimate();
  });
  $(window).on('resize', function () {
    setDeviceType();
  });
}(jQuery));
