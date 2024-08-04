const isUpperCase = (char) => char === char.toUpperCase();


const camelCaseToSpacedString = (str) => {
    const splitStr = str.split('');

    const mappedStr = splitStr.map((char, index) => {
        const isUpper = isUpperCase(char);
        return isUpper && index !== 0 ? ' ' + char : char;
    });

    const joinedStr = mappedStr.join('');

    return joinedStr.toLowerCase();
};

//* one liner version
// const camelCaseToSpacedString = (str) => {
//     return str
//         .split('')
//         .map((char, index) => (isUpperCase(char) && index !== 0 ? ' ' + char : char))
//         .join('')
//         .toLowerCase();
// };


const handleConversion = () => {
    const input = getValue('camelCaseInput')
    const output = getId('output')

    output.textContent = camelCaseToSpacedString(input);
};

onClickEvent('convertButton', handleConversion)


