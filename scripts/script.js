// Script.js
let myStorage = window.localStorage;
const productList = document.getElementById('product-list');

window.addEventListener('DOMContentLoaded', () => {
  if (myStorage.getItem('products') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        myStorage.setItem('products',JSON.stringify(data));
        let products = JSON.parse(myStorage.getItem('products'));
        for (let i = 0; i < products.length; i++) {
          productList.appendChild(new ProductItem(products[i]));
        }
      });
  }
  else {
    let products = JSON.parse(myStorage.getItem('products'));
    for (let i = 0; i < products.length; i++) {
      productList.appendChild(new ProductItem(products[i]));
    }
  }
});