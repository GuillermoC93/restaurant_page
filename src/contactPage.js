import './reset.css'
import './styles.css'

const contactPage = () => {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  const header = document.createElement('div');
  const phone = document.createElement('div');
  const email = document.createElement('div');

  header.textContent = "Contact Us";
  phone.textContent = "Phone: 123 456 7890";
  email.textContent = "Email: fakeemail@fakeemail.com"

  header.classList.toggle('contact-header');
  phone.classList.toggle('phone');
  email.classList.toggle('email');

  container.appendChild(header);
  container.appendChild(phone);
  container.appendChild(email)
  container.classList.toggle('contact');
  content.appendChild(container);
}

export default contactPage
