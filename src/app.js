// select shop element
const shopProducts = document.querySelector(".shopProducts");
const cartProducts = document.querySelector(".cartProducts");
const cartTotal = document.querySelector(".cartTotal");
let cart = [];

// render shop products
function displayShopProducts() {
  products.forEach((product) => {
    let totalPrice = product.price * product.quantity;
    const item = `
        <div class="shopProduct">
        <img src="${product.image}" alt="Image of a bike"</img>
        <h3>${product.name}</h3>
        <h4>${product.manufacturer}</h4>
        <p>${product.shortDescription}</p>
        <ul class="productDetails container">
          <li class="shopProductPrice">${totalPrice.toFixed(2)}zł</li>
          <li class="quantity"><input type="number" id=${
            product.id
          } class="input" min="1" max="5" value=${product.quantity}></li>
          <li class="addRemove container">
            <button onclick="update('plus', ${product.id})">
            +</i></button>
            <button onclick="update('minus', ${product.id})">-</i></button>
          <li class="addToCart"><i onclick=addToCart(${
            product.id
          }) class="fa-solid fa-cart-plus fa-xl"></i></li>
        </ul>
        </div>
  `;
    shopProducts.innerHTML += item;
  });
}

displayShopProducts();

// update value
function update(action, id) {
  let input = document.getElementById(id);
  let value = input.value;
  if (action === "minus" && value > 0) {
    value--;
  } else if (action === "plus") {
    value++;
  }
  input.value = value;
}

// change quantity
function changeQuantity(action, id) {
  let input = document.getElementById(id);
  let value = parseInt(input.value);
  let cartItem = cart.find((cartItem) => cartItem.id === id);

  if (action === "minus" && value > 0) {
    value--;
  } else if (action === "plus") {
    value++;
  }

  input.value = value;
  if (cartItem) {
    cartItem.quantity = value;
  }
  updateCart();
}

// add to  cart
function addToCart(id) {
  let input = document.getElementById(id);
  let value = parseInt(input.value);
  let existingCartItem = cart.find((cartItem) => cartItem.id === id);

  if (existingCartItem) {
    existingCartItem.quantity += value;
  } else {
    const cartItem = products.find((product) => product.id === id);
    cart.push({
      ...cartItem,
      quantity: value,
    });
  }

  input.value = 1;
  displayTotal();
  updateCart();
}

// update cart and display total
function updateCart() {
  cartProducts.innerHTML = "";
  cart.forEach((cartItem) => {
    let totalPrice = cartItem.price * cartItem.quantity;
    const item = `
      <div class="cartProduct">
        <ul class="cartDetails container">
        <li><h4>${cartItem.name}</h4></li>
        <li class="cartProductPrice productSubtotal">${totalPrice.toFixed(
          2
        )}zł</li>
          <li class="cartQuantity"><input type="number" id=${
            cartItem.id
          } class="input" min="1" max="5" value=${cartItem.quantity}></li>
          <li class="addRemove container">
            <button onclick="update('plus', ${cartItem.id})">
            +</button>
            <button onclick="update('minus', ${cartItem.id})">-</button>
            <li class="removeItem"> <i onclick=removeFromCart(${
              cartItem.id
            }) class="fa-solid fa-trash-alt fa-xl"></i> </li>
        </ul>
      </div>
    `;
    cartProducts.innerHTML += item;
  });
}

// calculate total
function calculateTotal() {
  let total = 0;
  cart.forEach((cartItem) => {
    total += cartItem.price * cartItem.quantity;
  });
  return total;
}

//display total
function displayTotal() {
  let total = calculateTotal();
  cartTotal.innerHTML = `
  <div class="grandTotal">
  <h4>Grand total: ${total.toFixed(2)}zł</h4>
  <button onclick="checkout()" class="btn btn-secondary
  ">Checkout</button>
  </div>`;
}

//remove from cart
function removeFromCart(id) {
  cart = cart.filter((cartItem) => cartItem.id !== id);
  updateCart();
  if (!cart.length) {
    hideCheckout();
  }
}

// checkout
function checkout() {
  let total = 0;
  cart.forEach((cartItem) => {
    total += cartItem.price * cartItem.quantity;
  });

  alert(`Checking out, total amount is: ${total.toFixed(2)}zł`);
  clearCart();
  hideCheckout();
}

// clear cart
function clearCart() {
  cart = [];
  updateCart();
}

// hide checkout
function hideCheckout() {
  document.querySelector(".grandTotal").style.display = "none";
}
