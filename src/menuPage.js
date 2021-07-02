import './reset.css'
import './styles.css'

const menuPage = () => {
  const content = document.querySelector('#content');
  const menu = document.createElement('div');
  const menuHeader = document.createElement('div');
  const enchiladas = document.createElement('div');
  const enchiladasPrice = document.createElement('div');
  const linebreak = document.createElement('div');
  const posole = document.createElement('div');
  const posolePrice = document.createElement('div');
  const linebreak2 = document.createElement('div');
  const menudo = document.createElement('div');
  const menudoPrice = document.createElement('div');
  const linebreak3 = document.createElement('div');
  const gorditas = document.createElement('div');
  const gorditasPrice = document.createElement('div');

  menu.classList.toggle('menu');
  menuHeader.classList.toggle('menu-header');
  enchiladas.classList.toggle('menu-items');
  enchiladasPrice.classList.toggle('menu-items');
  linebreak.classList.toggle('menu-items');
  posole.classList.toggle('menu-items');
  posolePrice.classList.toggle('menu-items');
  linebreak2.classList.toggle('menu-items');
  gorditas.classList.toggle('menu-items');
  gorditasPrice.classList.toggle('menu-items');
  linebreak3.classList.toggle('menu-items');
  menudo.classList.toggle('menu-items');
  menudoPrice.classList.toggle('menu-items');

  menuHeader.textContent = "Menu";
  enchiladas.textContent = "Enchiladas Potosinas";
  enchiladasPrice.textContent = "8.99";
  linebreak.textContent = "-";
  posole.textContent = "Posole";
  posolePrice.textContent = "7.99";
  linebreak2.textContent = "-";
  menudo.textContent = "Menudo";
  menudoPrice.textContent = "9.99";
  linebreak3.textContent = "-";
  gorditas.textContent = "Gorditas";
  gorditasPrice.textContent = "6.99";  

  content.appendChild(menu);
  menu.appendChild(menuHeader);
  menu.appendChild(enchiladas);
  menu.appendChild(enchiladasPrice);
  menu.appendChild(linebreak);
  menu.appendChild(posole);
  menu.appendChild(posolePrice);
  menu.appendChild(linebreak2);
  menu.appendChild(menudo);
  menu.appendChild(menudoPrice);
  menu.appendChild(linebreak3);
  menu.appendChild(gorditas);
  menu.appendChild(gorditasPrice);
}

export default menuPage
