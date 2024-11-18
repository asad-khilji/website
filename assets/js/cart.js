
const cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.style} - $${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    cartTotalSpan.textContent = `$${total.toFixed(2)}`;
}

document.getElementById('checkout-button')?.addEventListener('click', () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
});

window.onload = function() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart.push(...JSON.parse(storedCart));
        updateCartUI();
    }
};
