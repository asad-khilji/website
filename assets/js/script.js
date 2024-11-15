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
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
            <a href="collection.html?category=Category">Category</a>
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


