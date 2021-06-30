import './reset.css'
import './styles.css'

const contactPage = () => {
  const content = document.querySelector('#content');
  const container = document.createElement('div');

  container.classList.toggle('contact');
  content.appendChild(container);
}

export default contactPage
