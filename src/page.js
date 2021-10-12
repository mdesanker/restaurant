// Generate header
function generateHeader() {
  console.log('Generate header runnning')
  const header = document.createElement('header');
  
  const name = document.createElement('h1');
  name.textContent = 'Feast';
  name.classList.add('name');

  header.appendChild(name);
  console.log(header)
  header.appendChild(generateNav());

  return header;
};

// Generate navbar
function generateNav () {
  const nav = document.createElement('nav');
  const list = document.createElement('ul');

  const menuItems = ['home', 'menu', 'contact'];

  menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const listLink = document.createElement('a');
    listLink.textContent = item;
    listLink.setAttribute('href', `#${item}`);
    listItem.appendChild(listLink);
    list.appendChild(listItem);
  })
  console.log(list)

  nav.appendChild(list);

  return nav;
}

export function initializeWebsite() {
  const content = document.querySelector('#content');

  content.appendChild(generateHeader());
}