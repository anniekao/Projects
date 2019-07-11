function renderContactContent() {
  const div = document.createElement('div');
  div.id = 'contact-content';
  const section = document.createElement('section');
  const article = document.createElement('article');
  const title = document.createElement('h1');
  const titleText = document.createTextNode('Contact Us');
  title.append(titleText);

  article.append(title);
  section.appendChild(article);

  div.appendChild(section);

  return div;
  }

  export {
    renderContactContent
  };