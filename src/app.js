const productList = document.querySelector(".productList");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cartList");
const cartTotalValue = document.getElementById("cartTotalValue");

let cartItemID = 1;

eventListeners();

// all event listeners
function eventListeners() {
  window.addEventListener("DOMContentLoaded", () => {
    loadJSON();
  });

  productList.addEventListener("click", purchaseProduct);
}

// load products from JSON file
function loadJSON() {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.forEach((product) => {
        html += `
        <div id=${product.id} class="product">
        <img class="product-image" src="${product.image}" alt="Image of a bike"</img>
        <h3>${product.name}</h3>
        <h4>${product.manufacturer}</h4>
        <p>${product.shortDescription}</p>
        <div class="price-quantity">
        <span>${product.price}zł</span>
        <span class="quantity">
        <i class="bi bi-dash-square"></i>
        <span>${product.quantity}</span>
        <i class="bi bi-plus-square"></i>
        </span>
        <button class="btn btn-success btn-sm add-product"><i class="bi bi-cart-plus"></i>
        </button>
        </div>
        </div>
        `;
      });
      productList.innerHTML = html;
    })
    .catch((error) => {
      alert(error);
    });
}

// purchase product
function purchaseProduct(e) {
  console.log;
}

function getProductInfo(product) {
  let productInfo = {
    id: cartItemID,
    imgSrc: product.querySelector(".product"),
  };
}
