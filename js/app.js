import { getData } from "./request.js";
const API = "https://dummyjson.com/products";
console.log("vdf d");
const productList = document.querySelector("#product-list");
const mostPopular = document.querySelector("#most-popular");

const upDateUi = (data) => {
  productList.innerHTML = "";

  data.forEach((product) => {
    const mostPopularTemplate = mostPopular.content.cloneNode(true);
    const productTitle = mostPopularTemplate.querySelector(".product-title");
    const productImg = mostPopularTemplate.querySelector(".product-img");
    const myLink = mostPopularTemplate.querySelector(".my-link");
    const sale = mostPopularTemplate.querySelector(".skidka");
    const reyting = mostPopularTemplate.querySelector(".reyting");
    const oldPrice = mostPopularTemplate.querySelector(".old-price");
    const link = mostPopularTemplate.querySelector("#link");
    const price = mostPopularTemplate.querySelector(".price");
    const productDescription = mostPopularTemplate.querySelector(
      ".product-description"
    );

    oldPrice.textContent = `${product.price}$`;

    sale.textContent = `${Math.floor(product.discountPercentage)}%`;

    price.textContent = `${(
      product.price -
      (product.price * product.discountPercentage) / 100
    ).toFixed(2)}$`;
    productTitle.textContent = product.title;
    productDescription.textContent = product.category;

    productImg.src = product.thumbnail;
    productList.appendChild(mostPopularTemplate);
    link.href = `/pages/infoProduct.html?productID=${product.id}`;
  });

  console.log(data);
};
getData(API).then((data) => {
  upDateUi(data.products);
});
