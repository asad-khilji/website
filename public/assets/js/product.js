// Parse the URL parameter for style
const urlParams = new URLSearchParams(window.location.search);
const selectedStyle = urlParams.get('style');

async function displayProductDetails(style) {
    const productContainer = document.getElementById('product-details');
    productContainer.innerHTML = '';

    try {
        const response = await fetch('assets/json/product.json');
        const products = await response.json();

        // Find the product that matches the selected style
        const product = products.find(product => product.style === style);

        if (product) {
            productContainer.innerHTML = `
                 <div class="col-2">
                    <img src="${product.image}" alt="${product.description}">
                </div>
                <div class="col-2">
                    <h2>Style: ${product.style}</h2>
                    <h2>Price: ${product.price}</h2>
                    <p>Description: ${product.description}</p>
                </div>
            `;
        } else {
            productContainer.innerHTML = `<p>Product not found.</p>`;
        }
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}

// Call the function with the selected style
if (selectedStyle) {
    displayProductDetails(selectedStyle);
}

