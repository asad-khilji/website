// Display the cart data on the checkout page
const cartItemsDiv = document.getElementById('cart-items');
const grandTotalSpan = document.getElementById('grand-total');
const hiddenFieldsDiv = document.getElementById('hidden-fields');

function displayCartOnCheckout() {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    let grandTotal = 0;

    storedCart.forEach((item, index) => {
        const row = document.createElement('tr');
        const totalPrice = item.price * item.quantity;

        row.innerHTML = `
            <td>${item.style}</td>
            <td>${item.size}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${totalPrice.toFixed(2)}</td>
        `;

        cartItemsDiv.appendChild(row);
        grandTotal += totalPrice;

        // Add hidden fields for each cart item
        hiddenFieldsDiv.innerHTML += `
            <input type="hidden" name="item_${index}_style" value="${item.style}">
            <input type="hidden" name="item_${index}_size" value="${item.size}">
            <input type="hidden" name="item_${index}_price" value="${item.price}">
            <input type="hidden" name="item_${index}_quantity" value="${item.quantity}">
            <input type="hidden" name="item_${index}_total" value="${totalPrice}">
        `;
    });

    grandTotalSpan.textContent = grandTotal.toFixed(2);
}

// Call the function on page load
window.onload = displayCartOnCheckout;