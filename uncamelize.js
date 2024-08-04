/**
 * Converts a camelCase string to a specified format without using regex.
 * @param {string} str - The camelCase string to uncamelize.
 * @param {string} [separator=' '] - The separator used to separate words.
 * @returns {string} The uncamelize string.
 */

function uncamelize(str) {
	const separator = ' ';

	// Split the string at uppercase letters
	const words = str.split(/(?=[A-Z])/);
	console.log('split words: ', words)

	const capitalizeCase = words.map((word, index) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});

	const lowerCase = words.map((word, index) => {
		return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
	});

	// Join the words with the specified separator and make the word capitalize case
	const capitalizeCaseWord = capitalizeCase.join(separator);
	console.log('capitalizeCaseWord : ', capitalizeCaseWord);

	// Join the words with the specified separator and make the word lower case
	const lowerCaseWord = lowerCase.join(separator);
	console.log('lowerCaseWord : ', lowerCaseWord);

	// Join the words with the specified separator
	const uncamelized = words.join(separator);
	console.log('uncamelized : ', uncamelized);

	// Remove leading separator (if present)
	if (uncamelized.startsWith(separator)) {
		return uncamelized.slice(separator.length);
	}

	return uncamelized;
}

// Example usage:
const camelCaseString = "someMixedStringWithSpacesUnderscoresAndHyphens";
const uncamelizedString = uncamelize(camelCaseString);
console.log('uncamelizedString : ', uncamelizedString); // Output: "hello world"
