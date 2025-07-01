const repeatString = function (string, num) {
  // NOTE: returning an ERROR message if the number specified is less than 0
  if (num < 0) return "ERROR";
  // NOTE: defining an empty string str to start
  // as an 'accumulator' so we can add to the result each time
  let str = "";
  // NOTE: creating a for loop to increment the amount of times
  // we need to print the string
  for (let i = 0; i < num; i++) {
    // NOTE: add string to str each time
    str += string;
  }
  return str; // NOTE: explicitly returning result
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
