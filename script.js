//change fonts
document.body.style.fontFamily = "Open Sans";

const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

headings.forEach(heading => {
    heading.style.fontFamily = "Oswald";
});

// search
const posts = [
  "Fashion Trends 2026",
  "Hats for Summer",
  "Denim Jackets Ideas",
  "Streetwear Inspiration",
  "New York Runway Highlights",
  "Top 10 Accessories",
  "Winter Sweaters Collection",
  "London Fashion Week"
];

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('hidden');
  searchResults.classList.add('hidden'); // Hide results initially
  searchInput.focus();
});

// Search logic
searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase().trim();

  // Clear previous results
  searchResults.innerHTML = '';

  if (query === '') {
    searchResults.classList.add('hidden');
    return;
  }

  // Filter posts
  const matched = posts.filter(post => post.toLowerCase().includes(query));

  if (matched.length === 0) {
    searchResults.innerHTML = '<p class="p-2 text-gray-600">No results found</p>';
  } else {
    matched.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('p-2', 'hover:bg-gray-200', 'cursor-pointer');
      div.textContent = item;

      // Optional: click on result fills input
      div.addEventListener('click', () => {
        searchInput.value = item;
        searchResults.classList.add('hidden');
      });

      searchResults.appendChild(div);
    });
  }

  searchResults.classList.remove('hidden');
});
