// TODO: removes a single specified element from the array
// NOTE: creating a function that takes an array and
const removeFromArray = function (arr, ...rmNums) {
  const filteredArr = arr.filter((rmNum) => !rmNums.includes(rmNum));
  return filteredArr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
