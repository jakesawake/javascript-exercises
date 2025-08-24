const palindromes = function (str) {
  let formatStr = str
    .toLowerCase() // converting to lowercase for the sake of robustness
    .split("") // takes the string and split it into an array of its individual characters
    // the slashes '/.../g' define a regular expressions,
    // the g flag means global - ie. replace all matches in the string.
    // [\s,]+ the square brackets [...] define a character class: match any one of the characters inside.
    // \s matches any whitespace character (spaces, tabs, newlines, etc)
    // ',' matches a comma '!' matches an exclamation mark and '.' matches a period
    // . so [\s,] matches any whitespace or comma.
    // the '+' means one or more of the preceding character class
    .map((char) => char.replace(/[\s,!.]+/g, "")) // here we are replacing instances mentioned above with empty strings
    .filter((char) => char.length > 0); // here we remove the empty strings that we replaced to only get the character values
  let formatStrToString = formatStr.join(""); // joining the cleaned array of characters back into a string with no spaces
  let reversedStr = formatStr.reverse(); // reversing the string for the purpose of palindrome check
  let reversedStrToString = reversedStr.join(""); // joining the reversed array into a string
  let verdict = formatStrToString === reversedStrToString; // comparing both strings if they match and storing the result in verdict (boolean)
  return verdict; // returning the result
};

palindromes("a car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
