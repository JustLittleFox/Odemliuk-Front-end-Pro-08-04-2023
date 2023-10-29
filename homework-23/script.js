let basket = [];

let categories = [
    { id: 1, name: 'Cars' },
    { id: 2, name: 'Games' },
    { id: 3, name: 'Clothes' }
];

let products = [
    { id: 1, name: 'Nissan', category: 1, price: 200, currency: 'UAH' },
    { id: 2, name: 'Honda', category: 1, price: 200, currency: 'UAH' },
    { id: 3, name: 'Suzuki', category: 1, price: 200, currency: 'UAH' },
    { id: 4, name: 'Apex', category: 2, price: 300, currency: 'UAH' },
    { id: 5, name: 'Dota', category: 2, price: 300, currency: 'UAH' },
    { id: 6, name: 'DarkSouls', category: 2, price: 300, currency: 'UAH' },
    { id: 7, name: 'Boots', category: 3, price: 500, currency: 'UAH' },
    { id: 8, name: 'Shirt', category: 3, price: 500, currency: 'UAH' },
    { id: 9, name: 'Gloves', category: 3, price: 500, currency: 'UAH' }
];

function showCategories() {
    let productsDiv = document.getElementById('products');
    let productInfoDiv = document.getElementById('product-info');
    let basketInfo = document.getElementById('show-basket');
    productsDiv.innerHTML = '';
    productInfoDiv.innerHTML = '';
    basketInfo.innerHTML = '';
    window.location.hash = '/' + 'Shop';
    event.preventDefault()
}

document.getElementById('shop-name').addEventListener('click', showCategories);

function loadCategories() {
    let categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = 'Категорiя: ';
    categories.forEach(category => {
        let button = document.createElement('button');
        button.textContent = category.name;
        button.onclick = () => loadProducts(category.id);
        categoriesDiv.appendChild(button);
        event.preventDefault()
    });
}

function loadProducts(categoryId) {
    let productsDiv = document.getElementById('products');
    productsDiv.innerHTML = 'Товар: ';
    let category = categories.find(category => category.id === categoryId);
    window.location.hash = '/' + 'Shop' + '/' + category.name;
    products.filter(product => product.category === categoryId).forEach(product => {
        let button = document.createElement('button');
        button.textContent = product.name;
        button.onclick = () => loadProductInfo(product.id);
        productsDiv.appendChild(button);
        event.preventDefault()
    });
}

function loadProductInfo(productId) {
    let productInfoDiv = document.getElementById('product-info');
    productInfoDiv.innerHTML = '';
    let product = products.find(product => product.id === productId);
    window.location.hash = '/' + 'Shop' + '/' + product.name + product.id;
    let info = document.createElement('p');
    info.textContent = `Назва товару: ${product.name}, Ціна товару: ${product.price} ${product.currency}`;
    productInfoDiv.appendChild(info);

    let buyButton = document.createElement('button');
    buyButton.textContent = 'Купити';
    buyButton.onclick = () => addToBasket(product.id);
    productInfoDiv.appendChild(buyButton);
    event.preventDefault()
}

function addToBasket(productId) {
    basket.push(productId);
    localStorage.setItem('basket', JSON.stringify(basket));
    document.getElementById('basket').textContent = `Кошик (${basket.length})`;
    showCategories();
    alert(`Товар додано до кошика`);
}

function showBasket() {
    basket = JSON.parse(localStorage.getItem('basket')) || [];
    let productsDiv = document.getElementById('show-basket');
    productsDiv.innerHTML = 'Кошик:';

    basket.forEach((productId, index) => {
        let product = products.find(product => product.id === productId);
        let info = document.createElement('p');
        info.textContent = `Назва товару: ${product.name}, Ціна товару: ${product.price}`;
        productsDiv.appendChild(info);
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Видалити';
        removeButton.onclick = () => removeFromBasket(index);
        productsDiv.appendChild(removeButton);
    });

    window.location.hash = '/' + 'Shop' + '/' + 'Basket';
    event.preventDefault();
}
document.getElementById('basket').addEventListener('click', showBasket);

function removeFromBasket(index) {
    basket.splice(index, 1);
    localStorage.setItem('basket', JSON.stringify(basket));
    document.getElementById('basket').textContent = `Кошик (${basket.length})`;
    showBasket();
}

window.onload = function () {
    loadCategories();
    basket = JSON.parse(localStorage.getItem('basket')) || [];
    document.getElementById('basket').textContent = `Кошик (${basket.length})`;
};

