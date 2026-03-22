let products = [

{name:"Laptop", price:60000, category:"laptop", image:"s1.jpeg.png"},
{name:"Gaming Laptop", price:80000, category:"laptop", image:"s2.jpeg.png"},
{name:"Smartphone", price:20000, category:"phone", image:"s3.jpeg.png"},
{name:"Premium Phone", price:50000, category:"phone", image:"s4.jpeg.png"}

];
let cart = 0;

function displayProducts(list){

let container = document.getElementById("products");
container.innerHTML="";

list.forEach(product=>{

let div = document.createElement("div");
div.className="product";

div.innerHTML = `
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>Price: ₹${product.price}</p>
<button onclick="addToCart()">Add to Cart</button>
`;

container.appendChild(div);

});

}

displayProducts(products);

function addToCart(){

cart++;
document.getElementById("cart-count").innerText = cart;

}

document.getElementById("filter").addEventListener("change",function(){

let value=this.value;

if(value==="all"){
displayProducts(products);
}
else{

let filtered=products.filter(p=>p.category===value);
displayProducts(filtered);

}

});

document.getElementById("sort").addEventListener("change",function(){

let value=this.value;

let sorted=[...products];

if(value==="low"){
sorted.sort((a,b)=>a.price-b.price);
}

if(value==="high"){
sorted.sort((a,b)=>b.price-a.price);
}

displayProducts(sorted);

});