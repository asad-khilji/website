// Function to load cart details
function loadCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const style = urlParams.get('style');
    const price = urlParams.get('price');
    const size = urlParams.get('size');

    const cartTableBody = document.querySelector("#cart-table tbody");
    const cartTotal = document.getElementById("cart-total");

    if (style && price && size) {
        // Add the product to the cart table
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><img src="path-to-product-image" alt="${products.image}" width="50"></td>
            <td>${products.style}</td>
            <td>${size}</td>
            <td>${products.price}</td>
            <td><button class="remove-btn">Remove</button></td>
        `;

        cartTableBody.appendChild(row);

        // Calculate and display the total
        cartTotal.textContent = `$${products.price}`;
    } else {
        // Display a message if the cart is empty
        cartTableBody.innerHTML = `
            <tr>
                <td colspan="5">Your cart is empty.</td>
            </tr>
        `;
    }

    // Add event listener to remove buttons
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            event.target.closest("tr").remove();
            cartTotal.textContent = "$0"; // Reset total for this example
        });
    });

    // Add event listener to checkout button
    document.getElementById("checkout-btn").addEventListener("click", () => {
        alert("Redirecting to checkout...");
        // Redirect to the checkout page
        window.location.href = "checkout.html";
    });
}

// Load cart on page load
document.addEventListener("DOMContentLoaded", loadCart);