/**
 * Camelize a string by converting it to camel case.
 *
 * @param {string} text Text to camelize
 * @return {string} Camelized text
 */
function camelize(text) {
  // Split the text by spaces, hyphens, and underscores
  const words = text.split(/[\s-_]+/);
  console.log('split words: ', words)

  // Capitalize the first letter of each word (except the first word)
  const camelizedWords = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase(); // Keep the first word as-is
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  // Join the camelized words back together
  return camelizedWords.join('');
}

// Example usage:
const inputText = "some-mixed_string with spaces_underscores-and-hyphens";
const camelizedResult = camelize(inputText);
console.log('camelizedResult: ', camelizedResult); // Output: "someMixedStringWithSpacesUnderscoresAndHyphens"