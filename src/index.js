import "./style.css";
import { initializeWebsite, generateHeader } from "./page";
import { generateHome } from "./home";
import { generateMenu } from "./menu";
import { generateContact } from "./contact";
import generateFooter from "./footer";

initializeWebsite();

const nav = document.querySelector("nav");
nav.addEventListener("click", function (e) {
  const clicked = e.target.closest("button");

  if (!clicked) return;

  const content = document.querySelector("#content");
  content.innerHTML = "";

  content.appendChild(generateHeader());
  switch (clicked.dataset.id) {
    case "Home":
      content.appendChild(generateHome());
      break;
    case "Menu":
      content.appendChild(generateMenu());
      break;
    case "Contact":
      content.appendChild(generateContact());
      break;
  }
  content.appendChild(generateFooter());
});
