const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Headphones', price: 100 },
];

const copyOfOriginalProducts = [...products];
console.log('Copy of Original Products:', copyOfOriginalProducts);

// Add a new product to the products array
const newProduct = { id: 4, name: 'Tablet', price: 500 };
const updatedProducts = [...products, newProduct];
console.log('Updated Products when you Add a new product:', updatedProducts);


let cart = [];


function addToCart(products, productId) {
    // Check if the Tablet product exists in the updatedProducts array
    const tabletProduct = products.find(product => product.id === productId);

    if (tabletProduct) {
        cart = [...cart, tabletProduct];
        // console.log('Cart:', cart);
    } else {
        console.log('The product does not exist in the updated products array.');
    }
}


function calculateTotal(...items) {
    // return items.reduce((total, item) => total + item.price, 0);
    if (items.length === 0) {
        console.log('No item to calculate total!');
    } else {
        return items.reduce((total, item) => total + item.price, 0);
    }
}

// const total = calculateTotal(...cart);
// console.log('Total Price:', total);
const total = (...cart) => {
    if (cart.length === 0) {
        console.log('Your cart is empty!');
    } else {
        const updatedTotal = calculateTotal(...cart);
        console.log('Updated Total Price:', updatedTotal);
    }
}


function checkout(customer, ...items) {
    // const total = calculateTotal(...items);
    // console.log(`${customer}, your total is $${total}.`);
    if (items.length === 0) {
        console.log('Your cart is empty!');
    } else {
        const total = calculateTotal(...cart);
        console.log(`${customer}, your total is $${total}.`);
    }
}

// addToCart(products[0]); // Add Laptop to the cart
// addToCart(products[1]); // Add Smartphone to the cart
// addToCart(products[2]); // Add Headphones to the cart


// pag naka comment ito, dapat ma trigger yun Guard Clause for Empty Cart
// addToCart(updatedProducts[0]); // Add Laptop to the cart
// addToCart(updatedProducts[1]); // Add Smartphone to the cart
// addToCart(updatedProducts[3]); // Add Tablet to the cart

addToCart(updatedProducts, 1); // Add Laptop to the cart
addToCart(updatedProducts, 2); // Add Smartphone to the cart
addToCart(updatedProducts, 4); // Add Tablet to the cart


// Check the total price after adding the new items
const updatedTotal = calculateTotal(...cart);
console.log('Updated Total Price:', updatedTotal ? updatedTotal : 0);

// Checkout with the updated cart
checkout('John Doe', ...cart);