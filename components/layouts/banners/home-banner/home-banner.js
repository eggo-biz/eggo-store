(function ($) {
  function arrowClick() {
    $('.down-arrow').on('click', function () {
      scrollToSection('.products-sec', -60, 1000);
    });
  }
  $(document).ready(function () { arrowClick(); });
  // $(window).on('load', function () {});
  // $(window).on('scroll', function () {});
  // $( document ).ajaxComplete(function() {})
  // $(window).on('resize', function () {});
}(jQuery));
