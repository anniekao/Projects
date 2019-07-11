function renderMenuContent() {
  const div = document.createElement('div');
  div.id = 'menu-content';
  const section = document.createElement('section');
  const article = document.createElement('article');
  const title = document.createElement('h1');
  const titleText = document.createTextNode('Our Menu');
  title.append(titleText);
  
  article.append(title);
  section.appendChild(article);

  div.appendChild(section);

  return div;
}

export { renderMenuContent };