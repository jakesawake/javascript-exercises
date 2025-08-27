const fibonacci = function (num) {
  // handling edge cases below
  if (num === 0 || num === "0") {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  } else if (typeof num === "string") {
    num = Number(num);
  }
  // prev and curr representing two consecutive fibonacci numbers at any moment
  let prev = 0; // holds F(0)
  let curr = 1; // holds F(1)
  // loop starts at 2 because prev and curr are already known
  for (let i = 2; i <= num; i++) {
    let result = prev + curr; // computing the next fibonacci number
    prev = curr; // move prev forward so it becomes what curr was
    curr = result; // move curr forward so it becomes the newly computed number
    // after the loop, curr is the nth Fibonacci number (F(num))
  }
  return curr;
};

console.log(fibonacci(-25));
// Do not edit below this line
module.exports = fibonacci;
