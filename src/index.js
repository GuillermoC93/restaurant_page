import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';

homePage();

const content = document.querySelector('#content');
const footer = document.querySelector('.footer');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

const clearContent = () => {
  while (content.firstChild.nextSibling) {
    content.removeChild(content.firstChild.nextSibling); 
  }
};

// click event listeners
home.addEventListener('click', () => {
  clearContent();
  homePage();
  content.removeChild(content.firstChild.nextSibling);
});

menu.addEventListener('click', () => {
  clearContent();
  menuPage();
  content.appendChild(footer);
});

contact.addEventListener('click', () => {
  clearContent();
  contactPage();
  content.appendChild(footer);
});

// hover event listeners
const orangeColor = () => {
  event.target.style.color = "#f1ba55";
};

const yellowColor = () => {
  event.target.style.color = "#eb882c";
};

home.addEventListener('mouseover', orangeColor);
menu.addEventListener('mouseover', orangeColor);
contact.addEventListener('mouseover', orangeColor);

home.addEventListener('mouseout', yellowColor);
menu.addEventListener('mouseout', yellowColor);
contact.addEventListener('mouseout', yellowColor);
