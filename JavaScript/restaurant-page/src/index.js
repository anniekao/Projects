import { loadHeader } from './loader.js';
import { renderHomeContent } from './home-tab.js';
import { renderMenuContent } from './menu-tab.js';
import { renderContactContent } from './contact-tab.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

// Render initial webpage state
loadHeader(); 
const tabContent = document.getElementById('tab-content');
tabContent.appendChild(renderHomeContent());

const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const contactTab = document.getElementById('contact-tab');

// Renders the correct tab to the page
function renderTab(tab) {
  clearContents();
  renderTabContents(tab);
  deselectTab();
  selectTab(tab);
}

// Removes 'active' from the previously selected tab's class
function deselectTab() {
  const tabs = document.getElementsByClassName('nav')[0].childNodes;
  for (let tab of tabs) {
    if (tab.childNodes[0].className.includes('active')) {
      tab.childNodes[0].className = 'nav-link';
    }
  }
}

// Adds the 'active' class to the currently selected tab
function selectTab(tab) {
  const selectedTab = document.getElementById(tab);
  selectedTab.childNodes[0].className += ' active';
}

// Clears the contents of the tab-content div
function clearContents() {
  const contentTab = document.getElementById('tab-content');
  contentTab.removeChild(contentTab.childNodes[0]);
}

// Renders the current select tab's contents
function renderTabContents(tab) {
  const contentTab = document.getElementById('tab-content');
  switch(tab) {
    case 'home-tab': {
      contentTab.appendChild(renderHomeContent());
      break;
    }
    case 'menu-tab': {
      contentTab.appendChild(renderMenuContent());
      break;
    }
    case 'contact-tab': {
      contentTab.appendChild(renderContactContent());
      break;
    }
  }
}

// Event listeners for each tab -- clears tab content, highlights correct tab, display correct tab content
homeTab.addEventListener('click', function() {
  renderTab('home-tab'); 
});

menuTab.addEventListener('click', function() {
  renderTab('menu-tab');
});

contactTab.addEventListener('click', function() {
  renderTab('contact-tab');
});






 