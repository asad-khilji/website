async function loadCategories() {
    try {
        // Fetch the Excel file
        const response = await fetch('assets/excel/categories.xlsx');
        const arrayBuffer = await response.arrayBuffer();

        // Read the Excel file
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Convert the sheet data to JSON
        const categories = XLSX.utils.sheet_to_json(worksheet);

        // Get the container for categories
        const categoryContainer = document.getElementById('categoryContainer');

        categories.forEach((item, index) => {
            // Create a new row every 3 items
            if (index % 3 === 0) {
                const rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
                categoryContainer.appendChild(rowDiv);
            }

            // Create the category card
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-3');
            colDiv.innerHTML = `
                <a href="collection.html?category=${encodeURIComponent(item.category)}">
                    <img src="${item.image}" alt="${item.description}">
                    <h3>${item.category}</h3>
                </a>
            `;
            // Append to the last row
            categoryContainer.lastChild.appendChild(colDiv);
        });
    } catch (error) {
        console.error('Error loading categories:', error);
    }
}

// Call the function to load categories on page load
loadCategories();
