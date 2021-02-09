// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length == 0) {
    let products = fetch('https://fakestoreapi.com/products');
    localStorage.setItem("products", JSON.stringify(products));
  }
});