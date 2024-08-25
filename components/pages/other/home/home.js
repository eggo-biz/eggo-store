(function ($) {
  var loader;
  function siteLoaded() {
    setTimeout(function () {
      $('body').addClass('page-loaded');
      loader.hide();
    }, 1000);
  }
  $(document).ready(function () {
    loader = $('body').siteLoader();
    loader.show();
  });
  $(window).on('load', function () {
    siteLoaded();
  });
  // $(window).on('scroll', function () {});
  // $( document ).ajaxComplete(function() {})
  // $(window).on('resize', function () {});
}(jQuery));
