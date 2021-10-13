import "./style.css";
import { initializeWebsite } from "./page";
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

  // Style active nav button
  const navBtns = document.querySelectorAll("button");
  navBtns.forEach((btn) => btn.classList.remove("nav-btn_active"));
  clicked.classList.add("nav-btn_active");

  // Clear content div HTML
  const content = document.querySelector("#content");
  const bodySection = document.querySelector("section");
  const footer = document.querySelector("footer");

  content.removeChild(bodySection);
  content.removeChild(footer);

  // Determine which tab to generate
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
