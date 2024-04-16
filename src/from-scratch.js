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


const myFind = () => {
};

const myFilter = () => {
};

const sortWords = () => {
};

const sortNumbers = () => {
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
