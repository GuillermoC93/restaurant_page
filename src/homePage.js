import './reset.css';
import './styles.css';
import Maria from './images/india_maria.jpg'

const createHeader = () => {
  const header = document.createElement('div');
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const contact = document.createElement('div');

  header.classList.toggle('header');

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  home.setAttribute('id', 'home');
  menu.setAttribute('id', 'menu');
  contact.setAttribute('id', 'contact');

  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);

  return header;
};

const createInfo = () => {
  const info = document.createElement('div');
  const infoHeader = document.createElement('div');
  const infoSubHead = document.createElement('div');
  const infoPara = document.createElement('p');
  const imgDiv = document.createElement('div');

  info.classList.toggle('info');
  infoHeader.classList.toggle('info-header');
  infoSubHead.classList.toggle('info-subhead');
  imgDiv.classList.toggle('img-div');

  infoHeader.textContent = "Abuelita's";
  infoSubHead.textContent = "Mexican Restaurant";
  infoPara.textContent = "An authentic Mexican taste.";

  const indiaMaria = new Image();
  indiaMaria.src = Maria;
  imgDiv.appendChild(indiaMaria);

  info.appendChild(infoHeader);
  info.appendChild(infoSubHead);
  info.appendChild(infoPara);
  info.appendChild(imgDiv);

  return info;
};

const createFooter = () => {
  const footer = document.createElement('div');

  footer.classList.toggle('footer');
  footer.textContent = "Developed by Guillermo";

  return footer;
};

const homePage = () => {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createInfo());
  content.appendChild(createFooter());
};

export default homePage
