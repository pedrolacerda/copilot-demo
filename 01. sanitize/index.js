/* Função que sanitiza uma string para evitar cross-site scripting */
function sanitize(string) {
  return string.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;');
}