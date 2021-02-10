// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('products')) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => localStorage.setItem('products',data));
  }
});

// const ul = document.getElementsByTagName('ul')[0];
// let products = localStorage['products'];
// for (let i = 0; i < products.length; i++) {
//   const product = document.createElement('product-item')
// }