import './style.css';
import Logo from './restaurant-logo.png';

const page = document.getElementById('content');

function loadHeader() {
  const header = document.createElement('header');

  const title = document.createElement('h1');
  const text = document.createTextNode('Welcome to Pasta Palace!');

  const headerLogo = new Image();
  headerLogo.src = Logo;
  
  header.appendChild(headerLogo);
  title.append(text);
  header.appendChild(title);
  
  page.appendChild(header);
}

function createTabs() {

}

function createFooter() {

}

export { loadHeader };