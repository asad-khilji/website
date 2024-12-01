const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>
      <a href="dashboard.html"><h1>Serenity</h1></a>
      <div class="search-bar">
  <input type="text" id="searchInput" placeholder="Search for products..." />
</div>
    </header>
    `;
}

createHeader();

const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
        <nav>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="./cart.html">Cart</a>
        </nav>
    `;
}

createNav();

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer>
        
    </footer>
    `;
}

createFooter();



document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  // Fetch the product data
  fetch("assets/js/products.json")
    .then((response) => response.json())
    .then((products) => {
      searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter((product) =>
          product.style.toLowerCase().includes(query)
        );

        // Clear previous results
        searchResults.innerHTML = "";

        // Display filtered products
        if (filteredProducts.length > 0) {
          filteredProducts.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
            <a href="product.html?style=${product.style}">  
            <img src="${product.image}" alt="${product.style}" />
              <h3>${product.style}</h3>
              <p>${product.description}</p>
              <p><strong>Price:</strong> $${product.price}</p>
              </a>
            `;
            searchResults.appendChild(productDiv);
          });
        } else {
          searchResults.innerHTML = "<p>No products found.</p>";
        }
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});
