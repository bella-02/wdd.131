import recipes from './recipes.js';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
            <img class="recipe-img" src="${recipe.image}" alt="image of ${recipe.name}">
            <div class="recipe-details">
                <ul class="tag">
                    ${tagsTemplate(recipe.tags)}
                </ul>
                <h2 class="recipe-title">${recipe.name}</h2>

                <p class="rating">
                    ${ratingTemplate(recipe.rating)}
                </p>

                <p class="description">${recipe.description}</p>
            </div>
        </figure>`
}

const recipe = getRandomListEntry(recipes);

function renderRecipes(recipeList) {
    const outputElement = document.getElementById('recipe');
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    outputElement.innerHTML = recipeHTML;
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

document.addEventListener('DOMContentLoaded', () => {
    init();

    document.getElementById('search-button').addEventListener('click', searchHandler);
});

function filter(query) {
    const filtered = recipes.filter(recipe =>
        (recipe.name && recipe.name.toLowerCase().includes(query)) || 
        (recipe.description && recipe.description.toLowerCase().includes(query)) ||
        (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(query))) ||
        (recipe.ingredients && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)))
    );

    
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}




function searchHandler(e) {
    e.preventDefault();

    // Get the search input
    const searchInput = document.getElementById('search-input');


    // Convert the value in the input to lowercase
    const query = searchInput.value.toLowerCase();

    // Use the filter function to filter our recipes
    const filteredRecipes = filter(query);

    // Render the filtered list
    renderRecipes(filteredRecipes);
}
