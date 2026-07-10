let items = [];

let container = document.querySelector(".container");
let products = document.querySelector(".products");
let product = document.querySelector(".product");
let pname = document.querySelector(".pname");
let pprice = document.querySelector(".pprice");
let Add = document.querySelector(".addproducts");
let dproduct = document.querySelector(".dproduct");
console.log(dproduct);

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
            <button class="dproduct">Delete a product</button>
          </div>`;
    });
  }, 1000);
}

display(items);

Add.addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {
    title: "",
    price: 0,
  };

  obj.title = pname.value;
  obj.price = pprice.value;

  const product = obj;
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
});

dproduct.addEventListener("click", (e) => {
  console.log(e.target.value);
});
