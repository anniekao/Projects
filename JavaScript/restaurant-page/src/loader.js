import './style.css';
import Logo from './restaurant-logo.png';

const page = document.getElementById('content');

function loadHeader() {
  const header = document.createElement('header');

  const title = document.createElement('h1');
  const text = document.createTextNode('Welcome to Pasta Palace!');

  const headerLogo = new Image();
  headerLogo.src = Logo;
  headerLogo.width = '300';
  
  header.appendChild(headerLogo);
  title.append(text);
  header.appendChild(title);
  
  page.appendChild(header);
}

function addCopyText() {
  const section = document.createElement('section');
  const article = document.createElement('article');
  const copy = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  const text = document.createTextNode(copy);

  article.append(text);
  section.appendChild(article)
  page.appendChild(section);
}

function createTabs() {

}

export { loadHeader, addCopyText };