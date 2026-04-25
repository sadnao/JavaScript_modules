document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const value = document.getElementById('query').value;
  const response = await fetch('https://api.chucknorris.io/jokes/search?query=' + value);
  const data = await response.json();

  document.getElementById('results').innerHTML = '';

  for (const item of data.result) {
    const article = document.createElement('article');
    article.innerHTML = `<p>${item.value}</p>`;
    document.getElementById('results').appendChild(article);
  }
});