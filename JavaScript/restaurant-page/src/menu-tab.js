function renderMenuContent() {
  const div = document.createElement('div');
  div.id = 'menu-content';

  const article = document.createElement('article');
  const section = document.createElement('section');
  const header = document.createElement('h1');
  header.style.textDecoration = 'underline';
  const headerText = document.createTextNode('Our Menu');
  header.append(headerText);
  section.appendChild(header);

  section.appendChild(renderAppetizers());
  section.appendChild(renderSalads());
  section.appendChild(renderPastas());
  section.appendChild(renderDessertsAndDrinks());
  div.appendChild(section);

  return div;
}

function toggleArrow(event) {
  const spanClassNames = event.target.childNodes[1].classList;
  
  if (spanClassNames.contains('down')) {
    spanClassNames.remove('down');
  } else {
    spanClassNames.add('down');
  }
}

function toggleSubmenu(event) {
  const div = event.target.parentNode;
  for (let i = 0; i < div.childNodes.length; i++) {
    if (div.childNodes[i].className === 'menu-items') {
      if (div.childNodes[i].style.display === 'block') {
        div.childNodes[i].style.display = 'none';
      } else {
        div.childNodes[i].style.display = 'block';
      }
    }
  }
}

function renderAppetizers() {
  const article = document.createElement('article');
  article.id = 'appetizers-content';
  const appetizerHeader = document.createElement('h2');
  const appetizerHeaderText = document.createTextNode('Appetizers');
  const headerArrow = document.createElement('span');
  headerArrow.id = 'appetizerArrow';
  headerArrow.className = 'fa fa-chevron-right rotate';
  appetizerHeader.append(appetizerHeaderText);
  appetizerHeader.append(headerArrow);
  article.appendChild(appetizerHeader);

  appetizerHeader.addEventListener('click', function(event) {
    toggleSubmenu(event);
    toggleArrow(event);
  });

  const items = [
    'Parmesan Eggplant… 9',
    'Minestrone Soup… 5',
    'Garlic Bread… 4 | grated… 7',
    'Fried Zucchini… 8',
    'Shrimp Cocktail… 11',
    'Smoked Salmon… 11',
    'Fried Calmar… 13',
    'Prosciutto & Melon… 10',
    'Bruschetta… 6 | grated… 8',
    'Snails with Roquefort… 10',
    'Snails with garlic… 8 | grated… 10',
    'Italian grilled sausages… 9'
  ];

  const itemDiv = document.createElement('div');
  itemDiv.className = 'menu-items';
  itemDiv.style.display = 'none';

  for (let item of items) {
    const text = document.createTextNode(item);
    itemDiv.appendChild(text);
    itemDiv.appendChild(document.createElement("br"));
  }

  article.appendChild(itemDiv);
  return article;
}

function renderSalads() {
  const article = document.createElement('article');
  article.id = 'salads-content';
  const saladsHeader = document.createElement('h2');
  const saladsHeaderText = document.createTextNode('Salads');
  const headerArrow = document.createElement('span');
  headerArrow.className = 'fa fa-chevron-right rotate';
  saladsHeader.append(saladsHeaderText);
  saladsHeader.append(headerArrow);
  article.appendChild(saladsHeader);

   saladsHeader.addEventListener('click', function (event) {
     toggleSubmenu(event);
     toggleArrow(event);
   });

  const items = [
    'Green salad, italian dressing | large… 9 | small… 7',
    'Caesar salad | large… 13 | small… 9',
    'Panachée salad mixed lettuce, sundried tomatoes, onion, pine nuts, olives, tomatoes and cucumbers | large… 11 | small… 8',
    'Goat cheese salad panachée lettuce and goat cheese | large… 14 | small… 9',
    'Rocket salad raspberry vinaigrette, walnuts and parmesan shavings | large… 12 | small… 9'

  ];

  const itemDiv = document.createElement('div');
  itemDiv.className = 'menu-items';
  itemDiv.style.display = 'none';

  for (let item of items) {
    const text = document.createTextNode(item);
    itemDiv.appendChild(text);
    itemDiv.appendChild(document.createElement("br"));
  }

  article.appendChild(itemDiv);
  return article;
}

function renderPastas() {
  const article = document.createElement('article');
  article.id = 'pasta-content';
  const pastaHeader = document.createElement('h2');
  const pastaHeaderText = document.createTextNode('Pasta');
  const headerArrow = document.createElement('span');
  headerArrow.className = 'fa fa-chevron-right rotate';
  pastaHeader.append(pastaHeaderText);
  pastaHeader.append(headerArrow);
  article.appendChild(pastaHeader);

  pastaHeader.addEventListener('click', function (event) {
    toggleSubmenu(event);
    toggleArrow(event);
  });

  const items = [
    'Napoletana, tomato sauce & cheese… 13',
    'Canitello, tomato sauce, mushrooms, cheese, green peppers… 14',
    'Québécoise, tomato sauce, pepperoni, mushrooms, cheese, green peppers… 15',
    'Deliziosa, tomato sauce, cheese, bacon… 15',
    'Bagnara, tomato sauce, garlic, snails, cheese… 15',
    'Bianca, garlic, cheese, oregano… 12',
    'Marinella, tomato sauce, garlic, onions, bacon, cheese… 15',
    'Hawaïenne, tomato sauce, ham, cheese, pineapples… 15',
    'Lavalloise, tomato sauce, mushrooms, cheese, olives, peppers, shrimps… 17',
    'Tornada, tomato sauce, prosciutto, aritichoke heart, cheese, olives… 16',
    'Fruiti di Mare, tomato sauce, clam, shrimps, cheese… 18',
    'Gondola, tomato sauce, chicken, mushrooms, cheese, sun - dried tomatoes, asparagus… 16'
  ];

  const itemDiv = document.createElement('div');
  itemDiv.className = 'menu-items';
  itemDiv.style.display = 'none';

  for (let item of items) {
    const text = document.createTextNode(item);
    itemDiv.appendChild(text);
    itemDiv.appendChild(document.createElement("br"));
  }

  article.appendChild(itemDiv);
  return article;
}

function renderDessertsAndDrinks() {
  const article = document.createElement('article');
  article.id = 'desserts-and-drinks-content';
  const dndHeader = document.createElement('h2');
  const dndHeaderText = document.createTextNode('Desserts and Drinks');
  const headerArrow = document.createElement('span');
  headerArrow.className = 'fa fa-chevron-right rotate';
  dndHeader.append(dndHeaderText);
  dndHeader.append(headerArrow);
  article.appendChild(dndHeader);

  dndHeader.addEventListener('click', function (event) {
    toggleSubmenu(event);
    toggleArrow(event);
  });

  const desserts = [
    'Mint Parfait… 7',
    'Chocolate Parfait… 6',
    'Crème Caramel… 5',
    'Vanilla Ice Cream… 4',
    'Chocolate Cake… 6',
    'Profiteroles… 7',
    'Carrot Cake… 6',
    'Tiramisu… 7',
    'Fresh Fruits Salad… 5',
    'Crème Brûlée… 7',
    'Sugar Pie… 6',
    'House Cheese Cake… 7'
  ];

  const dessertDiv = document.createElement('div');
  dessertDiv.className = 'menu-items';
  dessertDiv.style.display = 'none';
  
  const dessertHeader = document.createElement('h3');
  const dessertHeaderText = document.createTextNode('Desserts');
  dessertHeader.append(dessertHeaderText);
  dessertDiv.appendChild(dessertHeader);

  for (let item of desserts) {
    const text = document.createTextNode(item);
    dessertDiv.appendChild(text);
    dessertDiv.appendChild(document.createElement("br"));
  }

  const drinks = [
  'Espresso… 3',
  'Cappuccino… 4',
  'Regular Coffee, Tea… 3',
  'Soft drink… 3',
  'Perrier… 4'
  ];

  const drinksDiv = document.createElement('div');
  drinksDiv.className = 'menu-items';
  drinksDiv.style.display = 'none';
  
  const drinksHeader = document.createElement('h3');
  const drinksHeaderText = document.createTextNode('Drinks');
  drinksHeader.append(drinksHeaderText);
  drinksDiv.appendChild(drinksHeader);

  for (let item of drinks) {
    const text = document.createTextNode(item);
    drinksDiv.appendChild(text);
    drinksDiv.appendChild(document.createElement("br"));
  }

  article.appendChild(dessertDiv);
  article.appendChild(drinksDiv);
  return article;
}

export { renderMenuContent };