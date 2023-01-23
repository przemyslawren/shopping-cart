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
        <div class="buttons">
        <i onclick="decrement(${item.id})" class="bi bi-dash-square"></i>
        <span>${item.quantity}</span>
        <i onclick="increment(${item.id})" class="bi bi-plus-square"></i>
        </div>
        <button class="btn btn-success btn-sm add-item"><i class="bi bi-cart-plus"></i>
        </button>
        
      `;
      container.appendChild(div);
    });
  })
  .catch((error) => console.log("App error:", error));

  let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

if(search === undefined) {

  basket.push({
    id: selectedItem.id,
    item: 1,
  })
}
else {
  search.item +=1;

}

  console.log(basket);
}

    
  let decrement = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id);
  };
  let update = () => {};

  let basket = [{

  }]