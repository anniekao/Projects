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
  
  document.body.appendChild(header);
}

function createTabs() {
  let tabsWrapper = document.createElement('div');
  tabsWrapper.className = 'container-fluid';
  tabsWrapper.id = 'tabs-wrapper';

  let tabs = document.createElement('ul');
  tabs.className = 'nav nav-pills nav-fill';

  let homeTab = document.createElement('li');
  homeTab.className = 'nav-item';
  homeTab.id = 'home-tab';
  let homeLink = document.createElement('a');
  homeLink.className = 'nav-link active';
  homeLink.href = '#';
  homeLink.appendChild(document.createTextNode('Home'));
  homeTab.appendChild(homeLink);

  let menuTab = document.createElement('li');
  menuTab.className = 'nav-item';
  menuTab.id = 'menu-tab';
  let menuLink = document.createElement('a');
  menuLink.className = 'nav-link';
  menuLink.href = '#';
  menuLink.appendChild(document.createTextNode('Menu'));
  menuTab.appendChild(menuLink);

  let contactTab = document.createElement('li');
  contactTab.className = 'nav-item';
  contactTab.id = 'contact-tab';
  let contactLink = document.createElement('a');
  contactLink.className = 'nav-link';
  contactLink.href = '#';
  contactLink.appendChild(document.createTextNode('Contact'));
  contactTab.appendChild(contactLink);
  
  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(contactTab);

  tabsWrapper.appendChild(tabs);
  page.appendChild(tabsWrapper);
}

export { loadHeader, createTabs };