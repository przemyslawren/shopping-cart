// arrays
let products = [];
let cart = [];

// select DOM elements
const shopProducts = document.querySelector(".shopProducts");
const cartProducts = document.querySelector(".cartProducts");
const cartTotal = document.querySelector(".cartTotal");

//fetch products from local file
fetch("src/products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    displayShopProducts();
  });

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

// update value
function update(action, id) {
  let input = document.getElementById(id);
  let value = parseInt(input.value);
  if (action === "minus" && value > 1) {
    value--;
  } else if (action === "plus") {
    value++;
  }
  input.value = value;
}

// add to  cart
function addToCart(id) {
  let input = document.getElementById(id);
  if (cart.some((cartItem) => cartItem.id === id)) {
    changeQuantity("plus", id, input.value);
  } else {
    const cartItem = products.find((product) => product.id === id);
    cart.push({
      ...cartItem,
      quantity: input.value,
    });
  }
  input.value = 1;
  displayCartProducts();
}

// change quantity in cart
function changeQuantity(action, id, addQuantity) {
  cart = cart.map((product) => {
    let quantity = parseInt(product.quantity);
    if (product.id === id) {
      if (action === "minus" && product.quantity > 1) {
        quantity--;
      } else if (action === "plus") {
        quantity += parseInt(addQuantity);
      }
    }
    return {
      ...product,
      quantity,
    };
  });
  displayCartProducts();
}

// create subCarts
function createsubCarts() {
  subCarts = [];
  const manufacturers = cart.map((product) => `${product.manufacturer}`);
  manufacturers.forEach((manufacturer) => {
    subCarts.includes(manufacturer) ? null : subCarts.push(manufacturer);
  });
  return subCarts;
}

// update cart, group by manufacturer and display total
function displayCartProducts() {
  subCarts = createsubCarts();
  cartProducts.innerHTML = "";
  let cartProduct = "";
  subCarts.forEach((manufacturer) => {
    let subTotal = 0;
    cartProduct += `
    <div class="cartProduct">
    <h4>${manufacturer}</h4>
    `;
    cart.forEach((product) => {
      if (product.manufacturer === manufacturer) {
        let totalPrice = product.price * product.quantity;
        subTotal += totalPrice;
        cartProduct += `
        <div class="cartProduct">
        <ul class="cartDetails container">
        <li><h4>${product.name}</h4></li>
        <li class="cartProductPrice">${totalPrice.toFixed(2)}zł</li>
        <li class="cartQuantity"><input type="number" id=${
          product.quantity
        } class="input" min="1" max="5" value=${product.quantity}></li>
        <li class="addRemove container">
          <button onclick="changeQuantity('plus', ${product.id}, 1)">
          +</button>
          <button onclick="changeQuantity('minus', ${product.id}, 1)">-</button>
          <li class="removeItem"> <i onclick=removeFromCart(${
            product.id
          }) class="fa-solid fa-trash-alt fa-xl"></i> </li>
        </ul>
        </div>
      `;
      }
    });
    cartProduct += `
    <div class="subTotal">Total: ${subTotal.toFixed(2)}zł</div>
    `;
    cartProducts.innerHTML = cartProduct;
  });
  displayTotal();
}

//remove from cart
function removeFromCart(id) {
  cart = cart.filter((cartItem) => cartItem.id !== id);
  displayCartProducts();
  if (!cart.length) {
    hideCheckout();
  }
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
  displayCartProducts();
}

// hide checkout
function hideCheckout() {
  document.querySelector(".grandTotal").style.display = "none";
}
