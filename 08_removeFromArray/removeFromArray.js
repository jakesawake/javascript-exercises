// TODO: removes a single specified element from the array
// NOTE: creating a function that takes an array and an indefinite number of arguments as a single array
// in short anything passed in as an arguement to rmNums will be passed into a single array
const removeFromArray = function (arr, ...rmNums) {
  const filteredArr = arr.filter((rmNum) => !rmNums.includes(rmNum)); // NOTE: using the filter method to say if the current rmNum DOES NOT include the rmNum specified in the arguement, since this returns true, it is passed into the filteredArr
  return filteredArr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
