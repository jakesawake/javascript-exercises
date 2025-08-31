const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    // 28 years old
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    // 49 years old
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    // 29 years old
  },
];

// creating a helper function to calculate the age of a given person
const getAge = (person) => {
  let age;
  // if the property does not exist and they are still alive
  if (person.yearOfDeath == null) {
    let thisYear = new Date().getFullYear(); // getting the current year
    let calcAge = thisYear - person.yearOfBirth; // calculating their current age
    return calcAge;
  } else {
    age = person.yearOfDeath - person.yearOfBirth; // if they died then calculate how long they lived aka their age when alive
    return age;
  }
};

const findTheOldest = function (arrOfObj) {
  // using reduce to narrow down to a single value
  return arrOfObj.reduce((acc, curr) => {
    let currAge = getAge(curr); // passing the current object in the array through our helper function
    let accAge = getAge(acc); // passing the accumulator (which is technically comparing the first element against itself in the first iteration because we already defined the inital value) through helper function
    // returning the greater age in each iteration
    if (currAge > accAge) {
      return curr;
    } else {
      return acc;
    }
  }, arrOfObj[0]);
};

findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
