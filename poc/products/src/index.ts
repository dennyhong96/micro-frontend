import "@/styles/index.scss";
import faker from "@faker-js/faker";
import styles from "@/index.module.scss";

function genHtml(): string {
  let productsHtml = "";
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    const desc = faker.commerce.productDescription();
    productsHtml += `<li>
    <h4>${name}</h4>
    <div>${desc}</div>
    </li>`;
  }
  return `<section class="${styles.section}">
  <h2>Products App</h2>
  <ul>${productsHtml}</ul>
  </section>`;
}

document.querySelector("#dev-products")!.insertAdjacentHTML("afterbegin", genHtml());
