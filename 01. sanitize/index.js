// Método que santiza uma string html
function sanitizaHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


/**
 * Returns an array of input elements as strings from an HTML string.
 * @param {string} html - The HTML string to search for input elements.
 * @returns {string[]} An array of input elements as strings.
 */
function getInputs(html) {
  return html.match(/<input[^>]*>/g);
}
