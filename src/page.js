// Generate header
function generateHeader() {
  console.log('Generate header runnning')
  const header = document.createElement('header');
  
  const name = document.createElement('h1');
  name.textContent = 'Feast';
  name.classList.add('name');

  header.appendChild(name);
  console.log(header)
  // header.appendChild(generateNav());

  return header;
};

// Generate navbar

export function initializeWebsite() {
  const content = document.querySelector('#content');

  content.appendChild(generateHeader());
}