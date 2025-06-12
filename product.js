const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, rating: 4.5 },
  { id: 2, name: 'Headphones', category: 'Electronics', price: 150, rating: 4.2 },
  { id: 3, name: 'Coffee Mug', category: 'Home', price: 12, rating: 4.9 },
  { id: 4, name: 'Desk Chair', category: 'Furniture', price: 220, rating: 4.1 },
  { id: 5, name: 'Sneakers', category: 'Fashion', price: 80, rating: 4.3 },
];

const categoryFilter = document.getElementById('category');
const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const sortSelect = document.getElementById('sort');
const grid = document.getElementById('productGrid');

function renderProducts() {
  let filtered = [...products];


  if (categoryFilter.value) {
    filtered = filtered.filter((p) => p.category === categoryFilter.value);
  }

  if (priceMin.value) {
    filtered = filtered.filter((p) => p.price >= Number(priceMin.value));
  }
  if (priceMax.value) {
    filtered = filtered.filter((p) => p.price <= Number(priceMax.value));
  }

  switch (sortSelect.value) {
    case 'priceAsc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'priceDesc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'ratingDesc':
      filtered.sort((a, b) => b.rating - a.rating);
 break;
    case 'ratingAsc':
      filtered.sort((a, b) => a.rating - b.rating);
      break;
    default:
      break;
  }

  grid.innerHTML = '';
  if (!filtered.length) {
    grid.innerHTML = '<p>No products match your criteria.</p>';
    return;
  }

  filtered.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>$${p.price.toFixed(2)}</p>
      <p>Rating: ${p.rating}</p>
    `;
    grid.append(card);
  });
}

categoryFilter.onchange = priceMin.oninput = priceMax.oninput = sortSelect.onchange = renderProducts;

renderProducts();