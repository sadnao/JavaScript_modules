document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const value = document.getElementById('query').value;
  const response = await fetch('https://api.tvmaze.com/search/shows?q=' + value);
  const data = await response.json();

  document.getElementById('results').innerHTML = '';

  for (const item of data) {
    const show = item.show;

    const article = document.createElement('article');
    article.innerHTML = `
      <h2>${show.name}</h2>
      <a href="${show.url}" target="_blank">${show.url}</a>
      <img src="${show.image?.medium}" alt="${show.name}">
      <div>${show.summary}</div>
    `;

    document.getElementById('results').appendChild(article);
  }
});