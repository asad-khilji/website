async function loadCategories() {
    try {
        const response = await fetch('assets/json/categories.json');
        const categories = await response.json();

        const categoryContainer = document.getElementById('categoryContainer');

        categories.forEach((item, index) => {
            // Create a new row every 3 items
            if (index % 3 === 0) {
                const rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
                categoryContainer.appendChild(rowDiv);
            }

            // Create the category card
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-3');
            colDiv.innerHTML = `
                <a href="collection.html?category=${encodeURIComponent(item.category)}">
                    <img src="${item.image}" alt="${item.description}">
                    <h3>${item.category}</h3>
                </a>
            `;
            // Append to the last row
            categoryContainer.lastChild.appendChild(colDiv);
        });
    } catch (error) {
        console.error('Error loading categories:', error);
    }
}

// Call the function to load categories on page load
loadCategories();