let items = [];

let products = document.querySelector(".products");
let product = document.querySelector(".product");

async function getData() {
  await fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => items.push(...data));
  console.log(items);
}
getData();

async function display(pro) {
  products.innerHTML = "";
  setTimeout(() => {
    pro.forEach((element) => {
      products.innerHTML += `<div class="product">
            <p>id : ${element.id}</p>
            <p>title : ${element.title}</p>
            <p>price : ${element.price}</p>
            <p>description : ${element.description}</p>
            <p>category : ${element.category}</p>
                <div class="image">
              <img src="${element.image}" alt="" width="300px" height="300px"/>
            </div>
          </div>`;
    });
  }, 1000);
}

display(items);
