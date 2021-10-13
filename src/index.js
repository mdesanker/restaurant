import "./style.css";
import { initializeWebsite, generateHeader } from "./page";
import { generateHome } from "./home";
import { generateMenu } from "./menu";
import { generateContact } from "./contact";
import generateFooter from "./footer";

initializeWebsite();

const nav = document.querySelector("nav");
// Use event delegation to add event listeners to buttons
nav.addEventListener("click", function (e) {
  const clicked = e.target.closest("button");

  // Guard function
  if (!clicked) return;

  // Clear content div HTML
  const content = document.querySelector("#content");
  const bodySection = document.querySelector("section");
  const footer = document.querySelector("footer");

  content.removeChild(bodySection);
  content.removeChild(footer);

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
