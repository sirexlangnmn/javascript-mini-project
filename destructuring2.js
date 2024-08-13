// Sample product data: Array of product objects
const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 1500,
        stock: 30,
        category: { main: 'Electronics', sub: 'Computers' }
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 800,
        stock: 50,
        category: { main: 'Electronics', sub: 'Mobile Phones' }
    },
    {
        id: 3,
        name: 'Desk Chair',
        price: 200,
        stock: 20,
        category: { main: 'Furniture', sub: 'Office' }
    },
    {
        id: 4,
        name: 'Headphones',
        price: 150,
        stock: 100,
        category: { main: 'Electronics', sub: 'Audio' }
    },
    {
        id: 5,
        name: 'Tablet',
        price: 600,
        stock: 40,
        category: { main: 'Electronics', sub: 'Mobile Devices' }
    },
    {
        id: 6,
        name: 'Office Desk',
        price: 350,
        stock: 10,
        category: { main: 'Furniture', sub: 'Office' }
    },
    {
        id: 7,
        name: 'Monitor',
        price: 250,
        stock: 25,
        category: { main: 'Electronics', sub: 'Computers' }
    },
    {
        id: 8,
        name: 'Wireless Mouse',
        price: 50,
        stock: 200,
        category: { main: 'Electronics', sub: 'Computer Accessories' }
    }
];

const formatProductDetails = ({ id, name, price, stock, category: { main, sub } }) => `
    Product ID: ${id}
    Name: ${name}
    Price: $${price}
    Stock: ${stock} units
    Category: ${main} > ${sub}
`;


const processProducts = (products) => {
    return products.map((product) => {
        const productDetail = formatProductDetails(product)
        console.log(`productDetail ::: `, productDetail)
        return productDetail;
    });
}


const findProductByName = (products, productName) => {
    const product = (products).find(({ name }) => name === productName );
    if (product) {
        const productDetail = formatProductDetails(product)
        console.log(`productDetail ::: `, productDetail)
        return productDetail;
    }
    return `Product ${productName} not found.`;
}

function findProductByKey(products, criteria) {
    // Destructure the criteria to get the key and value
    const [key, value] = Object.entries(criteria)[0];
    console.log(`key ::: `, key)
    console.log(`value ::: `, value)

    return products.filter(product => {
        // Check if the key is 'category'
        if (key === 'category') {
            // Convert to lowercase for case-insensitive comparison
            return product.category.main.toLowerCase() === value.toLowerCase() ||
                   product.category.sub.toLowerCase() === value.toLowerCase();
        } else {
            console.log(`product[key] ::: `, product[key])
            // Convert to lowercase if it's a string comparison
            return typeof product[key] === 'string' 
                ? product[key].toLowerCase() === value.toLowerCase() 
                : product[key] === value;
        }
    });
}


function findProductGeneral(products, keyword) {
    // Convert the keyword to lowercase for case-insensitive comparison
    const lowerCaseKeyword = String(keyword).toLowerCase();

    return products.filter(product => {
        // Check each property of the product
        return Object.values(product).some(value => {
            if (typeof value === 'object') {
                // If the value is an object (e.g., category), check its properties
                return Object.values(value).some(innerValue =>
                    String(innerValue).toLowerCase().includes(lowerCaseKeyword)
                );
            } else {
                // If the value is a primitive (e.g., string, number), compare it directly
                return String(value).toLowerCase().includes(lowerCaseKeyword);
            }
        });
    });
}

const processProductsData = processProducts(products)
const findProductByNameData = findProductByName(products, 'Wireless Mouse')

const findProduct1 = findProductByKey(products, { name: 'Tablet' });
const findProduct2 = findProductByKey(products, { price: 150 });
const findProduct3 = findProductByKey(products, { category: 'office' });


console.log(`findProduct1 ::: `, findProduct1)
console.log(`findProduct2 ::: `, findProduct2)
console.log(`findProduct3 ::: `, findProduct3)


const findProduct7 = findProductGeneral(products, 'Tablet');
const findProduct8 = findProductGeneral(products, 150);
const findProduct9 = findProductGeneral(products, 'office');


console.log(`findProduct7 ::: `, findProduct7)
console.log(`findProduct8 ::: `, findProduct8)
console.log(`findProduct9 ::: `, findProduct9)