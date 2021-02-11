// product-item.js

class ProductItem extends HTMLElement {
  constructor(product) {
    super();
    let myStorage = window.localStorage;
    if (myStorage.getItem('cart') == null) {
      myStorage.setItem('cart','[]');
    }
    let cart = JSON.parse(myStorage.getItem('cart'));
    const cartCount = document.getElementById('cart-count');
    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('li');
    wrapper.setAttribute('class','product');
    const img = document.createElement('img');
    img.setAttribute('src',product['image']);
    img.setAttribute('alt',product['title']);
    wrapper.appendChild(img);
    const title = document.createElement('p');
    title.setAttribute('class','title');
    title.textContent = product['title'];
    wrapper.appendChild(title);
    const price = document.createElement('p');
    price.setAttribute('class','price');
    price.textContent = product['price'];
    wrapper.appendChild(price);
    const button = document.createElement('button');

    if (cart.indexOf(product['id']) == -1) {
      button.textContent = 'Add to Cart';
      button.setAttribute('onclick', "alert('Added to Cart!')");
    } else {
      this.textContent = 'Remove from Cart';
        button.setAttribute('onclick', "alert('Removed from Cart!')");
    }
    button.addEventListener('click',function() {
      if (this.textContent == 'Add to Cart') {
        this.textContent = 'Remove from Cart';
        button.setAttribute('onclick', "alert('Removed from Cart!')");
        cartCount.textContent++; 
        let cart = JSON.parse(myStorage.getItem('cart'));
        cart.push(product['id']);
        myStorage.setItem('cart',JSON.stringify(cart));
      } else {
        this.textContent = 'Add to Cart';
        button.setAttribute('onclick', "alert('Added to Cart!')");
        cartCount.textContent--;
        let cart = JSON.parse(myStorage.getItem('cart'));
        cart.splice(cart.indexOf(product['id']),1);
        myStorage.setItem('cart',JSON.stringify(cart));
      }
    });
    wrapper.appendChild(button);

    const style = document.createElement('style');
    style.textContent = `.price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

  }
}

customElements.define('product-item', ProductItem);