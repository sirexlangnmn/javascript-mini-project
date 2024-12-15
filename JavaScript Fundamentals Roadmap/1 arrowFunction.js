//  ===============================================
//  traditional function
//  ===============================================

function calculateDiscountTraditional(price, discountPercentage) {
    return price - (price * (discountPercentage / 100));
}



//  ===============================================
//  Arrow Function (Modern ES6+ Syntax)
//  ===============================================

const calculateDiscountArrow = (price, discountPercentage) => {
    return price - (price * (discountPercentage / 100));
}



//  ===============================================
//  Compact Arrow Function
//  ===============================================
const calculateDiscountCompact = (price, discountPercentage) =>
    price - (price * (discountPercentage / 100));



// Verify that
function verifyDiscountCalculation() {
    const outputDiv = document.getElementById('output');

    // Test Cases
    const originalPrice = 100;
    const discountPercentage = 20;

    // using different discount function styles
    const traditionalResult = calculateDiscountTraditional(originalPrice, discountPercentage);
    const arrowResult = calculateDiscountArrow(originalPrice, discountPercentage);
    const compactResult = calculateDiscountCompact(originalPrice, discountPercentage);

    // display results
    console.log(`Traditional Function Result: ${traditionalResult}`)
    console.log(`Arrow Function Result: ${arrowResult}`)
    console.log(`Compact Arrow Function Result: ${compactResult}`)

    // display results
    outputDiv.innerHTML = `
        <p>Traditional Function Result: ${traditionalResult}</p>
        <p>Arrow Function Result: ${arrowResult}</p>
        <p>Compact Arrow Function Result: ${compactResult}</p>
    `;
}

// run verification when page loads
verifyDiscountCalculation();