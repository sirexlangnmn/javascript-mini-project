const isDelimiter = char => char === '-' || char === '_' || char === ' ';


const convertToCamelCase = str => {
    let result = '';
    let capitalizeNext = false;

    const arr = str.split('');
    arr.map((char) => {
        if (isDelimiter(char)) {
            capitalizeNext = true;
        } else {
            result += capitalizeNext ? toUpperCase(char) : char;
            capitalizeNext = false;
        }
    });

    return result;
};

const displayCamelCase = () => {
    const inputString = getValue('inputString')
    const lowerCaseString = inputString.toLowerCase();
    const camelCaseString = convertToCamelCase(lowerCaseString);
    document.getElementById('output').textContent = camelCaseString;
};
