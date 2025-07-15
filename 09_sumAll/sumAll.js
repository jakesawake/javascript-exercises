// NOTE: creating a function that takes the min and max integer
const sumAll = function (sumStart, sumEnd) {
  // NOTE: if else statements to be sure that an integer is being passed
  // as an arguement and that no integer is less than 0
  if (
    !Number.isInteger(sumStart) ||
    !Number.isInteger(sumEnd) ||
    sumStart < 0
  ) {
    return "ERROR";
  }
  // NOTE: creating a local variable that will hold our sum
  let sum = 0;
  // NOTE: if statement handling the case that the min is greater than the max
  if (sumStart > sumEnd) {
    // NOTE: swapping numbers by using a temporary variable, so that the min number will always be on the left
    let temp = sumStart;
    sumStart = sumEnd;
    sumEnd = temp;
  }
  // NOTE: for loop with local variable i starting at our min integer
  for (let i = sumStart; i <= sumEnd; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
