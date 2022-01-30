import "@/styles/index.scss";
import faker from "@faker-js/faker";

import styles from "@/index.module.scss";

function genHtml(): string {
  return `<section class="${styles.section}">
  <h2>Cart App</h2>
  <h4>You have ${faker.random.number()} items in your cart</h4>
  </section>`;
}

document.querySelector("#dev-cart")!.insertAdjacentHTML("afterbegin", genHtml());
