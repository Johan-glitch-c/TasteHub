function searchRecipes() {

    const searchValue = document
        .getElementById('searchInput')
        .value
        .toLowerCase();

    const categoryValue = document
        .getElementById('categorySelect')
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll('.card');

    cards.forEach((card) => {

        const title = card
            .querySelector('h3')
            .textContent
            .toLowerCase();

        const category = card
            .querySelector('.category')
            .textContent
            .toLowerCase();

        const matchesSearch =
            title.includes(searchValue);

        const matchesCategory =
            categoryValue === '' ||
            category === categoryValue;

        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = 'block';

        } else {

            card.style.display = 'none';
        }
    });
}

document
    .getElementById('searchInput')
    .addEventListener(
        'keyup',
        searchRecipes
    );

document
    .getElementById('categorySelect')
    .addEventListener(
        'change',
        searchRecipes
    );