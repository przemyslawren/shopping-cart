// select shop element
const shopProducts = document.querySelector(".shopProducts");
const cartProducts = document.querySelector(".cartProducts");
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
          <li class="price productSubtotal">${totalPrice.toFixed(2)}zł</li>
          <li class="quantity"><input role="textbox" type="number" id=${
            product.id
          } class="input" value=${product.quantity}></li>
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
  updateCart();
}

function updateCart() {
  cartProducts.innerHTML = "";
  cart.forEach((cartItem) => {
    let totalPrice = cartItem.price * cartItem.quantity;
    const item = `
      <div class="cartProduct">
        <h3>${cartItem.name}</h3>
        <h4>${cartItem.manufacturer}</h4>
        <ul class="productDetails container">
          <li class="cart-item-price product-subtotal">${totalPrice.toFixed(
            2
          )}zł</li>
          <li class="quantity"><input role="textbox" type="number" id=${
            cartItem.id
          } class="input" value=${cartItem.quantity}></li>
          <li class="addRemove container">
            <button onclick="update('plus', ${cartItem.id})">
            +</i></button>
            <button onclick="update('minus', ${cartItem.id})">-</i></button>
            <li class="removeItem"> <i onclick=removeFromCart(${
              cartItem.id
            }) class="fa-solid fa-trash-alt fa-xl"></i> </li>
        </ul>
      </div>
    `;
    cartProducts.innerHTML += item;
  });
  displayTotal();
  const checkoutButton = `<button onclick="checkout()" class="checkout-button">Checkout</button>`;
  cartProducts.innerHTML += checkoutButton;
}

function calculateTotal() {
  let total = 0;
  cart.forEach((cartItem) => {
    total += cartItem.price * cartItem.quantity;
  });
  return total;
}

function displayTotal() {
  const total = calculateTotal();
  const totalCost = `<h2>Total: ${total.toFixed(2)}zł</h2>`;
  cartProducts.innerHTML += totalCost;
}

function removeFromCart(id) {
  let index = cart.findIndex((cartItem) => cartItem.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  updateCart();
}

function checkout() {
  let total = 0;
  cart.forEach((cartItem) => {
    total += cartItem.price * cartItem.quantity;
  });

  alert(`Checking out, total amount is: ${total.toFixed(2)}zł`);
  clearCart();
}

function clearCart() {
  cart = [];
  updateCart();
}
// cart array

// updateCart();
// console.log(cart);
