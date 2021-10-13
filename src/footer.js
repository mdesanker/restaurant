function generateFooter() {
  const footer = document.createElement("footer");

  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © mdesanker 2021";
  copyright.id = "copyright";

  footer.appendChild(copyright);

  return footer;
}

export default generateFooter;
