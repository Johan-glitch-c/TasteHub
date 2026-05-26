function searchRecipes() {

  const searchValue = document
    .getElementById('searchInput')
    .value
    .toLowerCase();

  const categoryValue =
    document.getElementById('categorySelect').value;

  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {

    const title = card
      .querySelector('h3')
      .textContent
      .toLowerCase();

    const category = card
      .querySelector('.category')
      .textContent;

    const matchesSearch =
      title.includes(searchValue);

    const matchesCategory =
      categoryValue === 'all' ||
      category === categoryValue;

    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}