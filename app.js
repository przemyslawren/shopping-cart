fetch("products.json")
  .then((response) => response.json())
  .then((products) => {
    let container = document.getElementsByClassName("container")[0];
    products.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <img src="${item.image}" alt="Image of a bike"</img>
        <h2>${item.name}</h2>
        <h3>${item.manufacturer}</h3>
        <p>${item.shortDescription}</p>
        <span>${item.price}</span>
        <span>${item.quantity}</span>
      `;
      container.appendChild(div);
    });
  })
  .catch((error) => console.log("Error:", error));
