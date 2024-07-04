let selectedCategory = '';

function selectCategory(category) {
    selectedCategory = category;
}

function generateJoke() {
    if (!selectedCategory) {
        alert('Molimo odaberite kategoriju.');
        return;
    }

    const catUrl = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;

    fetch(catUrl)
        .then((response) => response.json())
        .then((data) => {
            const joke = data.value;
            document.getElementById('joke-display').innerText = joke;
            console.log(joke);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}