const form = document.getElementById('search-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const value = document.getElementById('query').value.trim();
  if (!value) return;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`);
  const data = await response.json();

  console.log(data); // print result to console
});