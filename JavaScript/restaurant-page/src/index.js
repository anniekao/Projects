import { loadHeader, createTabs } from './loader.js';
import { renderHomeContent } from './home-tab.js';
import { renderMenuContent } from './menu-tab.js';
import { renderContactContent } from './contact-tab.js';
import 'bootstrap/dist/css/bootstrap.min.css';

loadHeader(); 
createTabs();
let divTabContent = document.createElement('div');
divTabContent.id = 'tab-content';
divTabContent.appendChild(renderHomeContent());
document.body.appendChild(divTabContent);

let homeTab = document.getElementById('home-tab');
let menuTab = document.getElementById('menu-tab');
let contactTab = document.getElementById('contact-tab');

function selectTab(tabName) {
  let tabs = document.getElementsByClassName('nav')[0].childNodes;

  // Deselects previous tab
  for (let tab of tabs) {
    if (tab.childNodes[0].className.includes('active')) {
      tab.childNodes[0].className = 'nav-link';
    }
  }
  
  // Selects currently active tab and adds 'active' class
  let selectedTab = document.getElementById(tabName);
  selectedTab.childNodes[0].className += ' active';
}

function clearTabContent() {
  let content = document.getElementById('tab-content');
  content.removeChild(content.childNodes[0]);
}

homeTab.addEventListener('click', function() {
  let content = document.getElementById('tab-content');
  content.removeChild(content.childNodes[0]);
  content.appendChild(renderHomeContent());
  selectTab('home-tab');
});

menuTab.addEventListener('click', function() {
  let content = document.getElementById('tab-content');
  content.removeChild(content.childNodes[0]);
  content.appendChild(renderMenuContent());
  selectTab('menu-tab');
});

contactTab.addEventListener('click', function() {
  let content = document.getElementById('tab-content');
  content.removeChild(content.childNodes[0]);
  content.appendChild(renderContactContent());
  selectTab('contact-tab');
});






 