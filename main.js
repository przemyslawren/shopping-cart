let http = new XMLHttpRequest();

http.open("get", "products.json", true);

http.send();

http.onload = function () {
  let products = JSON.parse(this.responseText);
  let output = "";

  for (let product of products) {
    output += `
        <div class="product flex-container">
            <img src='${product.image}'>
            <h2>${product.name}</h2>
            <h3>${product.manufacturer}</h3>
            <p>${product.shortDescription}</p>
            <div class="product-footer">
            <span>${product.price}zł</span>
            <span>${product.quantity}</span>
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
        `;
    document.querySelector(".products").innerHTML = output;
  }
};
