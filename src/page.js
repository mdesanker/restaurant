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

  const navList = ['home', 'menu', 'contact'];

  navList.forEach(item => {
    const button = document.createElement('button');
    button.classList.add('nav-btn');
    button.textContent = button.id = item;
    button.setAttribute('type', 'button');
    nav.append(button);
  })

  return nav;
}

export function initializeWebsite() {
  const content = document.querySelector('#content');

  content.appendChild(generateHeader());
}