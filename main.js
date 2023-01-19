let http = new XMLHttpRequest();

http.open("get", "products.json", true);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);

    let output = "";

    for (let product of products) {
      output += `
        <div class="product">
            <div>
            <img src='${product.image}'>
            <h2>${product.name}</h2>
            <h3>${product.manufacturer}</h3>
            </div>
            <p>${product.shortDescription}</p>
            <span>${product.price}zł</span>
            <div>${product.quantity}</div>

        </div>
        `;
    }
    document.querySelector(".products").innerHTML = output;
  }
};
