import { generateHome } from "./home";
import { generateMenu } from "./menu";

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

  const navList = ["home", "menu", "contact"];

  navList.forEach((item) => {
    const button = document.createElement("button");
    button.classList.add("nav-btn");
    button.textContent = item;
    button.id = `${item}Btn`;
    button.setAttribute("type", "button");

    // Add eventListener to each button
    button.addEventListener("click", function (e) {
      // Doesn't do anything yet
      console.log(e.target.id);
    });

    nav.append(button);
  });

  return nav;
}

function initializeWebsite() {
  const content = document.querySelector("#content");
  content.prepend(generateHeader());
  // content.appendChild(generateHome());
  content.appendChild(generateMenu());
}

export { initializeWebsite };
