import './reset.css'
import './styles.css'

const menuPage = () => {
  const content = document.querySelector('#content');
  const container = document.createElement('div');

  container.classList.toggle('menu');
  content.appendChild(container);

}

export default menuPage
