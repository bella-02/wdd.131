import products from './products.js';

document.getElementById('search-button').addEventListener('click',function() {
    var query = document.getElementById('search-input').value;
    if (query) {
        var searchURL = 'search.html?q=' + encodeURIComponent(query);
        window.location.href = searchURL;
    }
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var query = document.getElementById('search-input').value;
        if (query) {
            var searchURL = 'search.html?q=' + encodeURIComponent(query);
            window.location.href = searchURL;
        }
    }
});

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function productTemplate(product) {
    return `<div class="search-result">
            <img class="search-result-image" src="${product.image}" alt="Image of ${product.name}">
            <div class="search-result-details">
                <h2 class="search-result-name">${product.name}</h2>
                <h3 class="search-result-price">${product.price}</h3>
                <p class="search-result-description">${product.description}</p>
                <p>Tags:</p>
                <ul class="tags">
                    ${tagsTemplate(product.tags)}
                </ul>
                <button id="add-to-cart" type="button">Add to Cart</button>
            </div>
        </div>`
}

document.addEventListener('DOMContentLoaded', function() {
    const query = new URLSearchParams(window.location.search).get('q');
    if (query) {
        const lowerCaseQuery = query.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(lowerCaseQuery) ||
            product.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
        );
        const resultsContainer = document.querySelector('main');
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                resultsContainer.innerHTML += productTemplate(product);
            });
        } else {
            resultsContainer.innerHTML = '<p>No products found.</p>';
        }

    }
});

document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('img').forEach(image => {
        image.addEventListener('click', viewHandler);
    });
});

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    const src = clickedElement.src;
    const alt = clickedElement.alt;

    const viewerHTML = viewerTemplate(src, alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}