import { generateHome } from "./home";
import { generateMenu } from "./menu";
import { generateContact } from "./contact";
import generateFooter from "./footer";

// Generate header
function generateHeader() {
  const header = document.createElement("header");

  const name = document.createElement("h1");
  name.textContent = "Feast";
  name.classList.add("name");

  header.appendChild(name);
  header.appendChild(generateNav());

  return header;
}

// Generate navbar
function generateNav() {
  const nav = document.createElement("nav");

  const navList = ["Home", "Menu", "Contact"];

  navList.forEach((item) => {
    const button = document.createElement("button");
    button.classList.add("nav-btn");
    button.textContent = item;
    button.dataset.id = item;
    button.setAttribute("type", "button");

    nav.append(button);
  });

  return nav;
}

function initializeWebsite() {
  const content = document.querySelector("#content");
  content.prepend(generateHeader());
  content.appendChild(generateHome());
  content.appendChild(generateFooter());

  // Set home button as active on default
  const activeBtn = document.querySelector('button[data-id="Home"]');
  activeBtn.classList.add("nav-btn_active");
}

export { initializeWebsite, generateHeader };
