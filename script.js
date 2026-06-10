let cart=[];

fetch("products.json")
.then(r=>r.json())
.then(data=>{

const products=document.getElementById("products");

data.forEach(item=>{

products.innerHTML+=`
<div class="card">
<h3>${item.name}</h3>
<p>${item.price} грн</p>
<button onclick="addToCart('${item.name}',${item.price})">
Додати
</button>
</div>
`;

});

});

function addToCart(name,price){

cart.push({name,price});

renderCart();

}

function renderCart(){

const ul=document.getElementById("cartItems");

ul.innerHTML="";

cart.forEach(i=>{

ul.innerHTML+=`<li>${i.name} - ${i.price} грн</li>`;

});

}

function checkout(){

let text="Замовлення PC BEAST UA%0A%0A";

cart.forEach(i=>{
text+=`${i.name} - ${i.price} грн%0A`;
});

window.open(
`https://t.me/bybo4lka`
);

}
