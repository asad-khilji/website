const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get('category');

// Pagination variables
let itemsPerPage = 16; // Number of products per page
let currentPage = 1;
let totalPages = 4;

// Function to fetch and display products by category and page
async function fetchAndDisplayProducts(category) {
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    try {
        // Fetch the JSON data from the file
        const response = await fetch('product.json');
        const products = await response.json();

        // Filter products by category
        const filteredProducts = products.filter(product => product.category === category);

        // Calculate total pages
        totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

        // Get products for the current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

        // Display paginated products
        paginatedProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.innerHTML = `
                <div class="col-4">
                <a href="product.html?style=${product.style}">
                    <img src="${product.image}" alt="">
                    <h3>${product.style}</h3>
                </a>
                </div>
            `;
            container.appendChild(productElement);
        });

        // Display pagination controls
        displayPaginationControls();
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Function to display pagination controls
function displayPaginationControls() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.classList.add('page-btn');
        if (i === currentPage) pageButton.classList.add('active');
        
        pageButton.addEventListener('click', () => {
            currentPage = i;
            fetchAndDisplayProducts(selectedCategory);
        });
        
        paginationContainer.appendChild(pageButton);
    }
}

// Call the function with the selected category
if (selectedCategory) {
    fetchAndDisplayProducts(selectedCategory);
}
