document.addEventListener('DOMContentLoaded', function() {
    const numberOfRows = 15;
    let grandTotal = 0;

    const tableBody = document.getElementById('tableBody');
    const totalDisplay = document.getElementById('total');

    // Function to generate a random number between min and max
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to create and append table rows with random numbers
    function generateTable() {
        for (let i = 1; i <= numberOfRows; i++) {
            const randomNumber = getRandomNumber(1000, 99999);
            grandTotal += randomNumber;

            const row = document.createElement('tr');

            const cellNumber = document.createElement('td');
            cellNumber.textContent = i;
            row.appendChild(cellNumber);

            const cellValue = document.createElement('td');
            cellValue.textContent = randomNumber;
            row.appendChild(cellValue);

            tableBody.appendChild(row);
        }
        totalDisplay.textContent = `Total: ${grandTotal.toLocaleString()}`;
    }

    // Generate the table when the page loads
    generateTable();
});
