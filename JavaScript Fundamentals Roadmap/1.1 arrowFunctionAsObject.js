// Multiple Discount Calculation Strategies

// const discountStrategies = {
//     standard: (price, percentage) => price * (1 - percentage/100),
//     holiday: (price, percentage) => {
//         const discount = price * (percentage/100);
//         return price - discount * 1.5; // Extra holiday bonus
//     },
//     clearance: (price, percentage) => {
//         const baseDiscount = price * (percentage/100);
//         return price - (baseDiscount * (percentage/100)); // Compound discount
//     }
// };



// compact
const discountStrategies = {
    standard: (price, percentage) => price * (1 - percentage/100),
    holiday: (price, percentage) => price - (price * (percentage/100)) * 1.5, // Extra holiday bonus
    clearance: (price, percentage) => price - ((price * (percentage/100)) * (percentage/100)) // Compound discount
};



// Verify that
function displayOutput() {
    const outputDiv = document.getElementById('output');

    // Test Cases
    const originalPrice = 100;
    const discountPercentage = 20;

    
    const standardDiscount = discountStrategies.standard(originalPrice, discountPercentage);
    const holidayDiscount = discountStrategies.holiday(originalPrice, discountPercentage);
    const clearanceDiscount = discountStrategies.clearance(originalPrice, discountPercentage);

    // display results
    console.log('Discount Comparison:');
    console.log(`Original Price: ${originalPrice}`);
    console.log(`Standard Discount: ${standardDiscount.toFixed(2)}`);
    console.log(`Holiday Discount: ${holidayDiscount.toFixed(2)}`);
    console.log(`Clearance Discount: ${clearanceDiscount.toFixed(2)}`);

    // display results
    outputDiv.innerHTML = `
        <p>Discount Comparison:</p>
        <p>Original Price: ${originalPrice}</p>
        <p>Standard Discount: ${standardDiscount.toFixed(2)}</p>
        <p>Holiday Discount: ${holidayDiscount.toFixed(2)}</p>
        <p>Clearance Discount: ${clearanceDiscount.toFixed(2)}</p>
    `;
}

// run verification when page loads
displayOutput();