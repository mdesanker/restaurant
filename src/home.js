function generateHome() {
  const section = document.createElement("section");
  section.id = "home";

  const paragraph = document.createElement("p");
  paragraph.classList.add("description");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cumque molestiae fuga placeat iusto unde reiciendis velit, repellendus sequi ipsam vitae quia necessitatibus deleniti quod veritatis, officiis, inventore eaque perspiciatis?";

  section.appendChild(paragraph);

  return section;
}

export { generateHome };
