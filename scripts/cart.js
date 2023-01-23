fetch("products.json")
  .then((response) => response.json())
  .then((cartItemsArray) => {
    cartArray = cartItemsArray;
    renderAllCartItems(cartArray);
  });

function renderAllCartItems(cartItemsArray) {
  cartItemsArray.forEach((cartItem) => renderCartItem(cartItem));
}

function renderCartItem(cartItem) {
  const newLi = document.createElement("li");
  newLi.innerHTML = `
    <p id="pTag">${item.name}: ${item.price}zł
    <button class="delete-button">
    <span>remove</span></button></p>
    `
    findListOfItems.append(newLi)
}
