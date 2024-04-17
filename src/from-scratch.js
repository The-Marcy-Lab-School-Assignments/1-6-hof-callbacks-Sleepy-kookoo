const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
};
// const nums = [1, 2, 3];
// const doubledNums = [];
// const addToDoubledNums = (num) => doubledNums.push(num * 2);

// console.log(myForEach(nums, addToDoubledNums))

const myMap = (arr, callback) => {
  const double = []
  for (let i = 0; i < arr.length; i++) {
    double.push(callback(arr[i]))
  }
  return double

};


const myFind = (arr, callback) => {
  let result = [...arr]
  for (let i = 0; i < result.length; i++) {
    if (callback(result[i])) {
      return result[i]
    }
  }
};

// const nums = [1, 2, 3];
// const firstEvenNum = myFind(nums, (num) => num % 2 === 0);
// console.log(firstEvenNum)

// const names = ['Alice', 'Bob', 'Charlie'];
// const firstLongName = myFind(names, (name) => name.length > 5);
// console.log(firstLongName)

const myFilter = (arr, callback) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
};

// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
// const namesWithB = myFilter(myNames, (name) => name.includes('B'));
// console.log(namesWithB); // ['Bob', 'Barry']

// const namesWithZ = myFilter(myNames, (name) => name.includes('Z'));
// console.log(nameHasZ); // []

const sortWords = (arr) => {
  const sorted = [...arr]
  sorted.sort();
  return sorted
};
// const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
// const sortedNames = sortWords(unsortedNames);
// console.log(sortedNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']
// console.log(unsortedNames);

const sortNumbers = (arrOfNums) => {
  const sortedNums = [...arrOfNums];
  sortedNums.sort((a, b) => a - b);
  return sortedNums
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
