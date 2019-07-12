import { loadHeader, createTabs, createTabsContentDiv } from './loader.js';
import { renderHomeContent } from './home-tab.js';
import { renderMenuContent } from './menu-tab.js';
import { renderContactContent } from './contact-tab.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Render initial webpage state
loadHeader(); 
createTabs();
createTabsContentDiv();
const tabContent = document.getElementById('tab-content');
tabContent.appendChild(renderHomeContent());

const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const contactTab = document.getElementById('contact-tab');

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
function selectTab(tabName) {
  const selectedTab = document.getElementById(tabName);
  selectedTab.childNodes[0].className += ' active';
}

// Clears the contents of the tab-content div
function clearContents() {
  const contentTab = document.getElementById('tab-content');
  contentTab.removeChild(contentTab.childNodes[0]);
}

// Renders the current select tab's contents
function renderTabContents(tabName) {
  const contentTab = document.getElementById('tab-content');
  switch(tabName) {
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
  clearContents();
  renderTabContents('home-tab');
  deselectTab();
  selectTab('home-tab');
});

menuTab.addEventListener('click', function() {
  clearContents();
  renderTabContents('menu-tab');
  deselectTab();
  selectTab('menu-tab');
});

contactTab.addEventListener('click', function() {
  clearContents();
  renderTabContents('contact-tab');
  deselectTab();
  selectTab('contact-tab');
});






 