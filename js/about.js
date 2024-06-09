import { getData } from "./request.js";
const API = "https://dummyjson.com/products";
const aboutTemp = document.querySelector("#aboutTemp");
const infoList = document.querySelector("#info-list");

const queryString = window.location.search;
const query = new URLSearchParams(queryString);
const id = query.get("productID");

const upDateUi = (product) => {
  console.log(product);
  const infoClon = aboutTemp.content.cloneNode(true);
  const inofProductImg = infoClon.querySelector("#ifo-product-img");
  const carouselItems = infoClon.querySelectorAll(".ifo-product-img");
  //   console.log(carousel);
  const images = product.images;

  carouselItems.forEach((item, index) => {
    if (images[index]) {
      item.src = images[index];
    } else {
      item.src = product.thumbnail; // Fallback image
    }
  });

  inofProductImg.src = product.thumbnail;

  infoList.appendChild(infoClon);
};

getData(API + `/${id}`).then((data) => {
  upDateUi(data);
});
