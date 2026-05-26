<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TasteHub</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      background: #0f0f0f;
      color: white;
    }

    .container {
      width: 90%;
      max-width: 1300px;
      margin: auto;
    }

    header {
      position: sticky;
      top: 0;
      background: rgba(15, 15, 15, 0.95);
      border-bottom: 1px solid #222;
      z-index: 1000;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
    }

    .logo {
      font-size: 30px;
      font-weight: bold;
    }

    .logo span {
      color: orange;
    }

    nav {
      display: flex;
      gap: 30px;
    }

    nav a {
      text-decoration: none;
      color: #ccc;
      transition: 0.3s;
    }

    nav a:hover {
      color: orange;
    }

    .btn {
      background: orange;
      border: none;
      padding: 12px 25px;
      color: white;
      border-radius: 12px;
      cursor: pointer;
      transition: 0.3s;
      font-weight: bold;
    }

    .btn:hover {
      background: #ff8800;
    }

    .hero {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 50px;
      align-items: center;
      padding: 80px 0;
    }

    .hero-text h1 {
      font-size: 60px;
      margin-bottom: 20px;
    }

    .hero-text p {
      color: #aaa;
      margin-bottom: 30px;
      line-height: 1.7;
    }

    .hero img {
      width: 100%;
      border-radius: 30px;
      height: 500px;
      object-fit: cover;
    }

    .search-box {
      background: #181818;
      border: 1px solid #222;
      border-radius: 25px;
      padding: 25px;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      margin-bottom: 80px;
    }

    .search-box input,
    .search-box select {
      flex: 1;
      min-width: 200px;
      padding: 15px;
      border-radius: 15px;
      border: 1px solid #333;
      background: #111;
      color: white;
    }

    .section-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    .section-title h2 {
      font-size: 40px;
    }

    .recipes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 100px;
    }

    .card {
      background: #181818;
      border: 1px solid #222;
      border-radius: 25px;
      overflow: hidden;
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-10px);
    }

    .card img {
      width: 100%;
      height: 230px;
      object-fit: cover;
    }

    .card-content {
      padding: 20px;
    }

    .category {
      background: rgba(255, 165, 0, 0.15);
      color: orange;
      display: inline-block;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 13px;
      margin-bottom: 15px;
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 24px;
    }

    .card p {
      color: #aaa;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .newsletter {
      background: linear-gradient(to right, orange, #ff5500);
      padding: 60px;
      border-radius: 40px;
      text-align: center;
      margin-bottom: 100px;
    }

    .newsletter h2 {
      font-size: 45px;
      margin-bottom: 20px;
    }

    .newsletter p {
      margin-bottom: 30px;
      color: #fff3e0;
    }

    .newsletter-form {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .newsletter-form input {
      padding: 15px;
      border-radius: 15px;
      border: none;
      width: 350px;
      max-width: 100%;
    }

    footer {
      border-top: 1px solid #222;
      padding: 40px 0;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .socials {
      display: flex;
      gap: 20px;
    }

    .socials a {
      color: #aaa;
      text-decoration: none;
      transition: 0.3s;
    }

    .socials a:hover {
      color: orange;
    }

    @media (max-width: 768px) {
      nav {
        display: none;
      }

      .hero-text h1 {
        font-size: 42px;
      }

      .newsletter {
        padding: 40px 20px;
      }

      .newsletter h2 {
        font-size: 32px;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container navbar">
      <div class="logo">Taste<span>Hub</span></div>

      <nav>
        <a href="#">Home</a>
        <a href="#recipes">Recipes</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <button class="btn">Sign In</button>
    </div>
  </header>

  <section class="hero container">
    <div class="hero-text">
      <h1>Delicious Recipes For Every Day</h1>

      <p>
        Discover amazing dishes, save your favorite meals, and cook like a professional chef from your own kitchen.
      </p>

      <button class="btn">Explore Recipes</button>
    </div>

    <img
      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1400&auto=format&fit=crop"
      alt="Food"
    />
  </section>

  <section class="container">
    <div class="search-box">
      <input type="text" id="searchInput" placeholder="Search recipes..." />

      <select id="categorySelect">
        <option value="all">All Categories</option>
        <option value="Italian">Italian</option>
        <option value="Fast Food">Fast Food</option>
        <option value="Healthy">Healthy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button class="btn" onclick="searchRecipes()">Search</button>
    </div>
  </section>

  <section class="container" id="recipes">
    <div class="section-title">
      <h2>Popular Recipes</h2>
    </div>

    <div class="recipes" id="recipeContainer"></div>
  </section>

  <section class="container newsletter">
    <h2>Get Weekly Recipe Updates</h2>

    <p>
      Subscribe and receive fresh recipes and cooking inspiration every week.
    </p>

    <div class="newsletter-form">
      <input type="email" placeholder="Enter your email" />
      <button class="btn">Subscribe</button>
    </div>
  </section>

  <footer id="contact">
    <div class="container footer-content">
      <div>
        <div class="logo">Taste<span>Hub</span></div>
        <p style="color:#777; margin-top:10px;">
          © 2026 TasteHub. All rights reserved.
        </p>
      </div>

      <div class="socials">
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">YouTube</a>
      </div>
    </div>
  </footer>

  <script>
    const recipes = [
      {
        title: 'Creamy Pasta',
        category: 'Italian',
        image:
          'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Fresh Burger',
        category: 'Fast Food',
        image:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Healthy Salad',
        category: 'Healthy',
        image:
          'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop',
      },
      {
        title: 'Chocolate Cake',
        category: 'Dessert',
        image:
          'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
      },
    ];

    const recipeContainer = document.getElementById('recipeContainer');

    function displayRecipes(data) {
      recipeContainer.innerHTML = '';

      data.forEach((recipe) => {
        recipeContainer.innerHTML += `
          <div class="card">
            <img src="${recipe.image}" alt="${recipe.title}">

            <div class="card-content">
              <span class="category">${recipe.category}</span>

              <h3>${recipe.title}</h3>

              <p>
                Easy and delicious recipe perfect for lunch or dinner.
              </p>

              <button class="btn">View Recipe</button>
            </div>
          </div>
        `;
      });
    }

    function searchRecipes() {
      const searchValue = document
        .getElementById('searchInput')
        .value.toLowerCase();

      const categoryValue = document.getElementById('categorySelect').value;

      const filtered = recipes.filter((recipe) => {
        const matchesSearch = recipe.title
          .toLowerCase()
          .includes(searchValue);

        const matchesCategory =
          categoryValue === 'all' || recipe.category === categoryValue;

        return matchesSearch && matchesCategory;
      });

      displayRecipes(filtered);
    }

    displayRecipes(recipes);
  </script>
</body>
</html>
