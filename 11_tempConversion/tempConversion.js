const convertToCelsius = function (temp) {
  // NOTE: formula for converting fahrenheit to celsius
  let convertedTempCelsius = (5 / 9) * (temp - 32);
  // NOTE: using Math.round() to return a number, also rounding halfway values up
  Math.round((convertedTempCelsius * 10) / 10);
  // NOTE: using toFixed() to return 1 decimal place,
  // since toFixed() returns a string, we wrap our result
  // in a Number() constructor so that we convert our string
  // value to a primitive type
  return Number(convertedTempCelsius.toFixed(1));
};

// NOTE: same thing as above but different formula to
// convert celsius to fahrenheit
const convertToFahrenheit = function (temp) {
  let convertedTempFahrenheit = (9 / 5) * temp + 32;
  Math.round((convertedTempFahrenheit * 10) / 10);
  return Number(convertedTempFahrenheit.toFixed(1));
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
