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
    const [key, value] = Object.entries(criteria)[0];

    return products.filter(product => filterProduct(product, key, value));
}


function filterProduct(product, key, value) {
    return key === 'category'
        ? checkCategory(product.category, value)
        : checkValue(product[key], value);
}

function checkCategory(category, value) {
    return isEqualIgnoreCase(category.main, value) ||
           isEqualIgnoreCase(category.sub, value);
}

function checkValue(productValue, value) {
    return (typeof productValue === 'string')
        ? isEqualIgnoreCase(productValue, value)
        : productValue === value;
}

function isEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}





function findProductGeneral(products, keyword) {
    const lowerCaseKeyword = String(keyword).toLowerCase();
    return products.filter(product => containsKeyword(product, lowerCaseKeyword));
}

function containsKeyword(object, keyword) {
    return Object.values(object).some(value => matchValue(value, keyword));
}

function matchValue(value, keyword) {
    return (typeof value === 'object' && value !== null)
        ? containsKeyword(value, keyword)
        : String(value).toLowerCase().includes(keyword);
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