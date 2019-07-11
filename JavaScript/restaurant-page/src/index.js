import { loadHeader, createTabs, createTabsContentDiv } from './loader.js';
import { renderHomeContent } from './home-tab.js';
import { renderMenuContent } from './menu-tab.js';
import { renderContactContent } from './contact-tab.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Render initial webpage state
loadHeader(); 
createTabs();
createTabsContentDiv();
let tabContent = document.getElementById('tab-content');
tabContent.appendChild(renderHomeContent());

let homeTab = document.getElementById('home-tab');
let menuTab = document.getElementById('menu-tab');
let contactTab = document.getElementById('contact-tab');

// Removes 'active' from the previously select tab's class
function deselectTab() {
  let tabs = document.getElementsByClassName('nav')[0].childNodes;
  for (let tab of tabs) {
    if (tab.childNodes[0].className.includes('active')) {
      tab.childNodes[0].className = 'nav-link';
    }
  }
}

// Adds the 'active' class to the currently selected tab
function selectTab(tabName) {
  deselectTab();

  let selectedTab = document.getElementById(tabName);
  selectedTab.childNodes[0].className += ' active';
}

// Event listeners for each tab
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






 