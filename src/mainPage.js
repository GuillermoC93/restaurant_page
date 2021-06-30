import './reset.css';
import './styles.css';
import Maria from './images/india_maria.jpg'

const mainPage = () => {
  const header = document.createElement('div');
  const info = document.createElement('div');
  const infoHeader = document.createElement('div');
  const infoSubHead = document.createElement('div');
  const infoPara = document.createElement('p');
  const imgDiv = document.createElement('div');
  const footer = document.createElement('div');
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const contact = document.createElement('div');

  const content = document.getElementById('content');

  header.classList.toggle('header');
  info.classList.toggle('info');
  infoHeader.classList.toggle('info-header');
  infoSubHead.classList.toggle('info-subhead');
  imgDiv.classList.toggle('img-div');
  footer.classList.toggle('footer');

  infoHeader.textContent = "Abuelita's"
  infoSubHead.textContent = "Mexican Restaurant"
  infoPara.textContent = "An authentic Mexican taste."
  footer.textContent = "Developed by Guillermo"
  home.textContent = "Home"
  menu.textContent = "Menu"
  contact.textContent = "Contact"

  const indiaMaria = new Image();
  indiaMaria.src = Maria;
  imgDiv.appendChild(indiaMaria);

  content.appendChild(header);
  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);
  content.appendChild(info);
  info.appendChild(infoHeader);
  info.appendChild(infoSubHead);
  info.appendChild(infoPara);
  info.appendChild(imgDiv);
  content.appendChild(footer);
}

export default mainPage
