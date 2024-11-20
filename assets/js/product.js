// Parse the URL parameter for style
const urlParams = new URLSearchParams(window.location.search);
const selectedStyle = urlParams.get('style');

async function displayProductDetails(style) {
    const productContainer = document.getElementById('product-details');
    productContainer.innerHTML = '';

    try {
        // Fetch the Excel file
        const response = await fetch('assets/excel/products.xlsx');
        if (!response.ok) throw new Error('Failed to fetch Excel file.');
        const arrayBuffer = await response.arrayBuffer();

        // Read the Excel file
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Convert the sheet data to JSON
        const products = XLSX.utils.sheet_to_json(worksheet);

        // Find the product that matches the selected style
        const product = products.find(product => product.style === style);

        if (product) {
            // Generate the size options dynamically
            const sizes = product.sizes.split(',').map(size => `<option>${size.trim()}</option>`).join('');

            productContainer.innerHTML = `
                <div class="col-2">
                    <img src="${product.image}" alt="${product.description}">
                </div>
                <div class="col-2">
                    <h2>${product.style}</h2>
                    <h2>$${product.price}</h2>
                    <p>${product.description}</p>
                    <div class="quantity-selector">
                        <label for="quantity-input">Quantity:</label>
                        <input type="number" id="quantity-input" value="1" min="1" />
                    </div>
                    <button type="submit" class="cart-btn" id="cart-btn">Add to Cart</button>
                    <select class="size-variant" id="size-select">
                        ${sizes}
                    </select>
                </div>
            `;

            // Add event listener for adding to cart and redirection
            document.getElementById('cart-btn').addEventListener('click', () => {
                const selectedSize = document.getElementById('size-select').value;
                const quantity = parseInt(document.getElementById('quantity-input').value, 10);
                const cartItem = {
                    style: product.style,
                    price: product.price,
                    size: selectedSize,
                    quantity,
                    image: product.image,
                    description: product.description
                };

                // Save to localStorage
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(cartItem);
                localStorage.setItem('cart', JSON.stringify(cart));

                // Redirect to cart page
                window.location.href = 'cart.html';
            });
        } else {
            productContainer.innerHTML = `<p>Product not found. <a href="/">Return to product list</a></p>`;
        }
    } catch (error) {
        console.error("Error fetching product details:", error);
        productContainer.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
}

// Call the function with the selected style
if (selectedStyle) {
    displayProductDetails(selectedStyle);
} else {
    document.getElementById('product-details').innerHTML = `<p>No product selected. <a href="/">Return to product list</a></p>`;
}
