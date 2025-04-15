(function ($) {
  function cartSettings() {
    $(document).on('click', '.cart-bubble', function () {
      $(this)
        .siblings('.cart-panel')
        .toggleClass('active');
    });
    $(document).on('click', '.cart-panel-close', function (e) {
      e.preventDefault();
      $(this)
        .closest('.cart-panel')
        .removeClass('active');
    });
  }
  // $(document).ready(function () {});
  $(window).on('load', function () {
    cartSettings();
  });
  // $(window).on('scroll', function () {});
  // $( document ).ajaxComplete(function() {})
  // $(window).on('resize', function () {});
}(jQuery));
