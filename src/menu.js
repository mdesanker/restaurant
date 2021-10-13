const appData = [
  {
    category: "Appetizers",
    name: "Fried Calamari",
    price: "$12.95",
    desc: "Served with homemade cocktail sauce",
  },
  {
    category: "Appetizers",
    name: "Chips & Dip",
    price: "$8.00",
    desc: "Tortilla chips with homemade guacamole and salsa",
  },
];

const saladData = [
  {
    category: "Salad",
    name: "House",
    price: "$6.00",
    desc: "Mixed greens, tomatoes, cucumber, croutons, and choice of dressing",
  },
  {
    category: "Salad",
    name: "The Feast",
    price: "$9.50",
    desc: "Spinach, bacon, apples, bleu cheese, toasted almonds, and topped with crispy fried onions",
  },
];

const mainData = [
  {
    category: "Mains",
    name: "Carne Asada",
    price: "$20.95",
    desc: "Marinated skirt steak grilled to perfection",
  },
  {
    category: "Mains",
    name: "Fried Chicken Dinner",
    price: "$16.95",
    desc: "Pan fried chicken thighs served over smashed red potatoes",
  },
];

function generateMenu() {
  const section = document.createElement("section");
  section.id = "menu";

  section.appendChild(generateMenuSection(appData));
  section.appendChild(generateMenuSection(saladData));
  section.appendChild(generateMenuSection(mainData));

  return section;
}

function generateMenuSection(arr) {
  // Where arr is an array of objects
  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");

  const menuHeader = document.createElement("h2");
  menuHeader.classList.add("menu-header");
  menuHeader.textContent = arr[0].category;
  menuSection.appendChild(menuHeader);

  arr.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemHeader = document.createElement("div");
    itemHeader.classList.add("item-header");

    const itemName = document.createElement("h3");
    itemName.classList.add("item-name");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = item.price;

    itemHeader.appendChild(itemName);
    itemHeader.appendChild(itemPrice);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("item-desc");
    itemDesc.textContent = item.desc;

    menuItem.appendChild(itemHeader);
    menuItem.appendChild(itemDesc);

    menuSection.appendChild(menuItem);
  });
  return menuSection;
}

export { generateMenu };
