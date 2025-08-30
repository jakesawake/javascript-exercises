const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

// passing an array of objects as an arguement
const getTheTitles = function (arrOfObj) {
  // using map to return a new arr, returning callback
  return arrOfObj.map((obj) => {
    let newArr;
    newArr = obj.title; // taking the title of each obj and putting it in newArr
    return newArr; // returning inner function
  });
};

console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
