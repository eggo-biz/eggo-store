(function ($) {
  /* Eggo Cart */
  $.eggoStore = function (options) {
    // This is the easiest way to have default options.
    var settings = $.extend({
      defaultFunction: function () {
        // console.log('popupclosed with id:' + this.id);
      },
    }, options);
    let products = [
      {
        "name": "Country Egg",
        "id": "pid-1",
        "price": 200,
        "stock": 100,
        "color": "#9b7b5f",
        "packing": "tray",
        "img": "./components/helpers/store/img/products/Country Egg.png"
      },
      {
        "name": "Duck Egg",
        "id": "pid-2",
        "price": 250,
        "stock": 10,
        "color": "#ac927c",
        "packing": "tray",
        "img": "./components/helpers/store/img/products/Duck Egg.png"
      },
      {
        "name": "Leghorn Egg",
        "id": "pid-3",
        "price": 170,
        "stock": 300,
        "color": "#b6aea5",
        "packing": "tray",
        "img": "./components/helpers/store/img/products/Leghorn Egg.png"
      },
      {
        "name": "Quail Egg",
        "id": "pid-4",
        "price": 220,
        "stock": 25,
        "color": "#64493b",
        "packing": "box",
        "img": "./components/helpers/store/img/products/Quail Egg.png"
      },
    ],
      cartName = "eggo_cart";
    var instanceObject = {
      products: function () {
        return products;
      },
      getProduct: function (productID) {
        let product = products.filter(product => product.id === productID);
        return product.length ? product[0] : null;
      },
      getCart: function () {
        return JSON.parse(sessionStorage.getItem(cartName)) || [];
      },
      updateCart: function (cart) {
        sessionStorage.setItem(cartName, JSON.stringify(cart));
      },
      addToCart: function (pid, quantity) {
        let cart = this.getCart(),
          product = this.getProduct(pid);
        if (null) {
          return;
        }
        let existingItem = cart.find(item => item.id === pid);
        if (product)
          if (existingItem) {
            existingItem.quantity += quantity;
          } else {
            cart.push({ ...product, quantity: quantity });
          }
        this.updateCart(cart);
        this.updateCartUI();
      },
      removeFromCart: function (pid) {
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== pid);
        sessionStorage.setItem(cartName, JSON.stringify(cart));
        this.updateCart(cart);
        this.updateCartUI();
      },
      // updateCartUI: function () {
      //   let cart = this.getCart(),
      //     cartContainer = $("#cart-items"),
      //     struct = '';
      //   cartContainer.html = "",
      //     totalAmount = 0;
      //   cart.forEach(item => {
      //     let totalPrice = parseFloat(item.price * item.quantity).toFixed(2);
      //     struct +=
      //       `
      //       <div class="cart-item">
      //         <span class="name">${item.name} => </span>
      //         <span class="price">₹ ${item.price}</span>
      //         <span class="quantity">X ${item.quantity}</span>
      //         <span class="total">=  ₹ ${totalPrice}</span>
      //       </div>
      //     `;
      //     totalAmount += totalPrice;
      //   });
      //   cartContainer
      //     .append(struct);
      // },
      updateCartUI: function () {
        let cart = this.getCart(),
          $cartSection = $('.cart-sec'),
          $cartItemsWrap = $("#cart-items"), // Using jQuery selector
          totalAmount = 0;
        $cartItemsWrap.empty(); // Clear previous cart items
        console.log(cart.length)
        if (cart.length) {
          $cartSection.addClass('has-items');
          cart.forEach(item => {
            let totalPrice = parseFloat(item.price * item.quantity),
              cartItem = $(`
                  <div class="cart-item">
                    <span class="name">${item.name} => </span>
                    <span class="price">₹ ${item.price}</span>
                    <span class="quantity">X ${item.quantity}</span>
                    <span class="total">= ₹ ${totalPrice.toFixed(2)}</span>
                  </div>
              `);
            totalAmount += totalPrice;
            $cartItemsWrap.append(cartItem);
          });
          $cartItemsWrap.append(
            `
              <div>----------------------------------------------------------</div>
              <div> Total Amount: ${totalAmount.toFixed(2)}</div>
              <div>----------------------------------------------------------</div>
            `
          )
        } else {
          $cartSection.removeClass('has-items');
          $cartItemsWrap.append(
            `
            <div class="msg no-result">Nothing added yet...</div>
            `
          );
        }
      }

    }
    return (instanceObject);
  }
}(jQuery));
