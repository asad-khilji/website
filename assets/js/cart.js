const cart = [];

// Function to add a product to the cart
function addToCart(item) {
    cart.push(item);
    updateCartUI();
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item at the specified index
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        // Display product details
        itemDiv.innerHTML = `
            <span>${item.style} (${item.size}) - $${item.price}</span>
        `;

        // Quantity selector
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.classList.add('quantity-input');

        // Update button
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.classList.add('update-button');

        updateButton.onclick = () => {
            const newQuantity = parseInt(quantityInput.value, 10);
            if (newQuantity > 0) {
                item.quantity = newQuantity;
                updateCartUI();
            }
        };

        // Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.onclick = () => removeFromCart(index);

        itemDiv.appendChild(quantityInput);
        itemDiv.appendChild(updateButton);
        itemDiv.appendChild(removeButton);
        cartItemsDiv.appendChild(itemDiv);

        // Update total price
        total += item.price * item.quantity;
    });

    cartTotalSpan.textContent = `$${total.toFixed(2)}`;
}

// Save cart to localStorage and navigate to checkout page
document.getElementById('checkout-button')?.addEventListener('click', () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
});

// Load cart from localStorage on page load
window.onload = function() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart.push(...JSON.parse(storedCart));
        updateCartUI();
    }
};
