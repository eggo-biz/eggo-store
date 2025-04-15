(function ($) {
  function addToCartSettings() {
    $(document).on('click', '.add-to-cart', function (e) {
      e.preventDefault();
      let $addToCartBtn = $(this),
        $productCard = $addToCartBtn.closest('.product-card'),
        pid = $productCard.attr('pid'),
        input = $productCard.find('.spin-input-field'),
        quantity = parseFloat(input.val());
      if (quantity > 0) {
        $store.addToCart(pid, quantity);
        input.val(1).trigger('change');
      }
    });
    /*  $(document).on('change', '.product-card .spin-input-field', function () {
       let $input = $(this);
       setTimeout(function () {
         let inputValue = parseInt($input.val()),
           addToCartArea = $input.closest('.product-card').find('.card-price-add');
         if (inputValue > 0) {
           if (addToCartArea.find('.add-to-cart').length === 0) {
             addToCartArea.append(
               '<a class="add-to-cart" href="#">Add to cart</a>'
             );
           }
         } else {
           addToCartArea.find('.add-to-cart').remove();
         }
       }, 200);
     }) */
  }
  // $(document).ready(function () {});
  $(window).on('load', function () {
    addToCartSettings();
  });
  // $(window).on('scroll', function () {});
  // $( document ).ajaxComplete(function() {})
  // $(window).on('resize', function () {});
}(jQuery));
