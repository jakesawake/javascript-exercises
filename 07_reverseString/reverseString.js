// NOTE: creating a function that takes an array as an arguement
const reverseString = function (str) {
  // NOTE: spreading our string into an array so we can reverse the order of the letters
  const reversedString = [...str].reverse().join("");
  return reversedString;
};

console.log(reverseString("hello there"));
// Do not edit below this line
module.exports = reverseString;
