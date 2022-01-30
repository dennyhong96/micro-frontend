import "@/styles/index.scss";
import faker from "@faker-js/faker";

function genProductsHtml(): string {
  let productsHtml = "";
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    productsHtml += `<li>${name}</li>`;
  }
  return `<ul>${productsHtml}</ul>`;
}

document.querySelector("#dev-products")!.insertAdjacentHTML("afterbegin", genProductsHtml());
