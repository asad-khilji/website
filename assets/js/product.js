// Parse the URL parameter for style
const urlParams = new URLSearchParams(window.location.search);
const selectedStyle = urlParams.get('style');

async function displayProductDetails(style) {
    const productContainer = document.getElementById('product-details');
    productContainer.innerHTML = '';

    try {
        // Fetch the Excel file
        const response = await fetch('assets/excel/products.xlsx');
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
            productContainer.innerHTML = `
                <div class="col-2">
                    <img src="${product.image}" alt="${product.description}">
                </div>
                <div class="col-2">
                    <h2>${product.style}</h2>
                    <h2>${product.price}</h2>
                    <p>${product.description}</p>
                    <button type="submit" class="cart-btn" id="cart-btn">Add to Cart</button>
                    <select class="size-variant" id="size-select">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                    </select>
                </div>
            `;

            // Add event listener for adding to cart and redirection
            document.getElementById('cart-btn').addEventListener('click', () => {
                const selectedSize = document.getElementById('size-select').value;
                const cartItem = {
                    style: product.style,
                    price: product.price,
                    size: selectedSize,
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
