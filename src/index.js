import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';

homePage();

const content = document.querySelector('#content');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const clearContent = () => {
  console.log(content.firstChild);
  while (content.firstChild.nextSibling) {
    content.removeChild(content.firstChild.nextSibling); 
  }
};

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

home.addEventListener('click', () => {
  clearContent();
  homePage();
  content.removeChild(content.firstChild.nextSibling);
  console.log('home clicked');
});

menu.addEventListener('click', () => {
  clearContent();
  menuPage();
  content.appendChild(footer);
  console.log('menu clicked');
});

contact.addEventListener('click', () => {
  clearContent();
  contactPage();
  content.appendChild(footer);
  console.log('contact clicked');
});