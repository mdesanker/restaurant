export function generateContact() {
  const section = document.createElement("section");
  section.id = "contact";

  const phone = document.createElement("p");
  phone.id = "phone";
  phone.textContent = "847-123-5555";

  const address = document.createElement("p");
  address.id = "address";
  address.textContent = "777 Nondescript Way";

  const map = document.createElement("div");
  map.id = "map";

  section.appendChild(phone);
  section.appendChild(address);
  section.appendChild(map);

  return section;
}
