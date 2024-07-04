document.addEventListener('DOMContentLoaded', () => {
    const jokeButton = document.getElementById('joke-button');
    const jokeDisplay = document.getElementById('joke-display');
    const categorySelect = document.getElementById('category-select');

    const apiURL = 'https://api.chucknorris.io/jokes';

    // Fetch categories on load
    fetch(`${apiURL}/categories`)
        .then(response => response.json())
        .then(categories => {
            categories
                .filter(category => category !== 'explicit')  // Exclude 'explicit' category
                .forEach(category => {
                    const option = document.createElement('option');
                    option.value = category;
                    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
                    categorySelect.appendChild(option);
                });
        });

    // Fetch and display joke
    jokeButton.addEventListener('click', () => {
        const category = categorySelect.value;
        let url = `${apiURL}/random`;
        if (category) {
            url += `?category=${category}`;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const joke = data.value;
                jokeDisplay.textContent = joke;
            })
            .catch(error => {
                jokeDisplay.textContent = 'Failed to fetch joke!';
                console.error('Error fetching joke:', error);
            });
    });
});