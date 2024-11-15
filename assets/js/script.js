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


