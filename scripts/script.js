// Script.js
let myStorage = window.localStorage;
const productList = document.getElementById('product-list');
let products = [];

window.addEventListener('DOMContentLoaded', () => {
  if (myStorage.getItem('products') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => myStorage.setItem('products',JSON.stringify(data)));
  }
  let data = JSON.parse(myStorage.getItem('products'));
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    productList.appendChild(new ProductItem(data[i]));
  }  
});