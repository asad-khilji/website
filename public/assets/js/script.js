const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>
      <a href="index.html"><h1>Title</h1></a>
    </header>
    `;
}

createHeader();

const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
        <nav>
            <a href="collection.html?category=Mens%20Leather%20Jacket">Jackets</a>
            <a href="collection.html?category=Mens%20Leather%20Vest">Vests</a>
            <a href="collection.html?category=Mens%20Leather%20Chaps">Chaps</a>
            <a href="collection.html?category=Mens%20Flannel%20Shirt">Flannels</a>
            <a href="collection.html?category=Mens%20Hoodie">Hoodies</a>
            <a href="collection.html?category=Ladies%20Clip%20on%20Bag">Ladies Bags</a>
            <a href="collection.html?category=Mens%20Full%20Finger%20Gloves">Gloves</a>
            <a href="collection.html?category=Biker%20Chain%20Wallets">Wallets</a>
            <a href="collection.html?category=Accessories">Accessories</a>
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

// let product = [];

// // Fetch items from the JSON file
// async function loadProduct() {
//     try {
//         const response = await fetch('product.json');
//         product = await response.json();
//     } catch (error) {
//         console.error("Error loading items:", error);
//     }
// }

// // Search function
// function searchItems() {
//     const query = document.getElementById('search').value.toLowerCase();
//     const results = product.filter(item =>
//         item.description.toLowerCase().includes(query) ||
//         item.category.toLowerCase().includes(query)
//     );

//     displayResults(results);
// }

// // Display results function
// function displayResults(results) {
//     const resultsContainer = document.getElementById('results');
//     resultsContainer.innerHTML = '';

//     if (results.length === 0) {
//         resultsContainer.innerHTML = '<p>No items found.</p>';
//         return;
//     }

//     results.forEach(item => {
//         const productDiv = document.createElement('div');
//         productDiv.innerHTML = `
//             <img src="${item.image}" alt="${item.description}" width="100">
//             <p><strong>${item.description}</strong></p>
//             <p>${item.price}</p>
//             <p>${item.category}</p>
//         `;
//         resultsContainer.appendChild(productDiv);
//     });
// }

// // Load items when the page loads
// window.onload = loadProduct;
