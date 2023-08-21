import { cart ,addToCart} from "../data/cart.js";
import { products } from "../data/products.js";

let displayProducts = "";

products.forEach((product) => {
  displayProducts += `
    <div class="product p-4 pt-5 d-flex flex-column">
        <div class="product-image-container mb-4 d-flex justify-content-center">
            <img class="product-image col-9" src="${product.image}" alt="">
        </div>
        <div class="product-name mb-2">${product.name}
        </div>
        <div class="product-rating mb-2 d-flex col-7">
            <img class="product-rating-star col-10 me-1" src="images/ratings/rating-${
              product.rating.stars * 10
            }.png" alt="">
            <div class="product-rating-count col-2 text-primary">${
              product.rating.count
            }</div>
        </div>
        <div class="product-price mb-2">$${(product.priceCents / 100).toFixed(
          2
        )}</div>
        <div class="product-quantity mb-2">
            <select name="quantity-selector" id="quantity-selector" class="select-quantity rounded shadow">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div class="product-spacer d-flex"></div>
        <button class="add-to-cart-button border rounded-5 mt-2 text-center p-1 shadow js-add-to-cart" data-product-id="${
          product.id
        }">Add to Cart</button>
    </div>
    `;
});

document.querySelector(".wrapper-products").innerHTML = displayProducts;




const updateCartQuantity = () => {
    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
};

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();
    
  });
});
