const products = [
  {
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
  },
  {
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4.0,
      count: 127,
    },
    priceCents: 2096,
  },
  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
  },
  {
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5.0,
      count: 2197,
    },
    priceCents: 1899,
  },
  {
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4.0,
      count: 37,
    },
    priceCents: 2067,
  },
  {
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
  },
  {
    image:
      "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
  },
];

let displayProducts = '';

products.forEach((product) => {
  displayProducts += `
    <div class="product p-4 pt-5 d-flex flex-column">
        <div class="product-image-container mb-4 d-flex justify-content-center">
            <img class="product-image col-9" src="${product.image}" alt="">
        </div>
        <div class="product-name mb-2">${product.name}
        </div>
        <div class="product-rating mb-2 d-flex col-7">
            <img class="product-rating-star col-10 me-1" src="images/ratings/rating-${product.rating.stars *10}.png" alt="">
            <div class="product-rating-count col-2 text-primary">${product.rating.count}</div>
        </div>
        <div class="product-price mb-2">$${(product.priceCents / 100).toFixed(2)}</div>
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
        <div class="add-to-cart-button border rounded-5 mt-2 text-center p-1 shadow">Add to Cart</div>
    </div>
    `;

});

document.querySelector('.wrapper-products').innerHTML = displayProducts;

