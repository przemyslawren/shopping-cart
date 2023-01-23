fetch("products.json")
  .then((response) => response.json())
  .then((products) => {
    let container = document.getElementsByClassName("shop")[0];
    products.forEach((item) => {
      let div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `

        <img class="product-image" src="${item.image}" alt="Image of a bike"</img>
        <h3>${item.name}</h3>
        <h4>${item.manufacturer}</h4>
        <p>${item.shortDescription}</p>
        <span>${item.price}zł</span>
        <span class="quantity">
        <button class="btn btn-primary btn-sm"><i class="bi bi-dash-square"></i></button>
        <span>${item.quantity}</span>
        <button class="btn btn-primary btn-sm"><i class="bi bi-plus-square"></i></button>
        </span>
        <button class="btn btn-success btn-sm add-item"><i class="bi bi-cart-plus"></i>
        </button>
        
      `;
      container.appendChild(div);
    });
  })
  .catch((error) => console.log("App error:", error));

function renderAllCartItems(cartItemsArray) {
  cartItemsArray.forEach((cartItem) => renderCartItem(cartItem));
}

function renderCartItem(cartItem) {
  const newLi = document.createElement("li");
  newLi.innerHTML = `
      <p id="pTag">${item.name}: ${item.price}zł
      <button class="delete-button">
      <span>remove</span></button></p>
      `;
  findListOfItems.append(newLi);
}
