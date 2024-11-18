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

// Function to update the UI with cart details
function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.style} - $${item.price}`;
        
        // Add a Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index); // Attach event handler

        itemDiv.appendChild(removeButton);
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
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
