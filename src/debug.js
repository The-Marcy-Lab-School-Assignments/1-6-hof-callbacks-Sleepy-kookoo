const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

const oddNums = [1, 3, 5, 7, 9];
const areAllNumsOdd1 = myEvery(oddNums, (num) => num % 2);
console.log(areAllNumsOdd1)

const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction());
};

const logEachName = (names) => {
  return names.forEach(console.log());
};

const logEachUserBio = (users) => {
  return users.forEach(console.log(users.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
