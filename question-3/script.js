/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node script.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {
  // TODO: Implement validation logic
  const validBrackets = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const openBrackets = [];
  let clearString= str.join('').split("").filter(e =>e == '(' || e== ')' || e=='{' || e=='}' || e== '[' || e== ']')
  for (let i = 0; i < clearString.length; i += 1) {
    if (validBrackets[clearString[i]]) {
      openBrackets.push(clearString[i]);
    } else if (validBrackets[openBrackets.pop()] !== clearString[i]) {
      return false;
    }
  }
  return !openBrackets.length;
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);

