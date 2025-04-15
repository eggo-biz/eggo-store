(function ($) {
  function displayProducts() {
    let struct = '',
      products = $store.products(),
      $productsContainer = $('.products-container');
    if (products.length) {
      products
        .forEach(product => {
          struct +=
            `
            <div class="each-product">
              <div class="card product-card" pid="${product.id}">
                <div class="card-box">
                  <div class="card-head bg-c2">
                    <div class="card-title">
                      ${product.name}
                    </div>
                  </div>
                  <div class="card-img">
                    <img width="350px" height="350px" src="${product.img}" alt="${product.name}">
                  </div>
                  <div class="card-content">
                    <div class="card-price-add">
                      <div class="card-buy-info">
                        <span class="card-price">
                          ₹<span class="price">${product.price.toFixed(2).toString()}</span>
                        </span>
                        <span class="card-price-slash">
                        /
                        </span>
                        <span class="card-price-for">
                        ${product.packing}
                        </span>
                      </div>
                      <a title="Add to Cart" class="add-to-cart" href="#">Add to cart</a>
                      </div>
                      <div class="spin-input reached-min">
                        <a href="#" class="spin-input-control spin-input-minus">-</a>
                        <input type="number" min="1" max="${product.stock}" step="1" value="1" class="spin-input-field">
                        <a href="#" class="spin-input-control spin-input-plus">+</a>
                      </div>  
                  </div>
                </div>
              </div>
            </div>
            `
        });
      $productsContainer.removeClass('empty')
    } else {
      $productsContainer.addClass('empty')
      struct += `<div class="msg no-result">No Products Found...</div>`;
    }
    $productsContainer
      .append(struct);
  }
  // $(document).ready(function () {});
  $(window).on('load', function () {
    displayProducts();
  });
  // $(window).on('scroll', function () {});
  // $( document ).ajaxComplete(function() {})
  // $(window).on('resize', function () {});
}(jQuery));
