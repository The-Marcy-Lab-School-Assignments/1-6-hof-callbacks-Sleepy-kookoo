const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

// const oddNums = [1, 3, 5, 7, 9];
// const areAllNumsOdd1 = myEvery(oddNums, (num) => num % 2);
// console.log(areAllNumsOdd1)

const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

const logEachName = (names) => {
  names.forEach(console.log);
};

// const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
// console.log(logEachName(names))

const logEachUserBio = (users) => {
  return users.forEach((users) => console.log(users.bio));
};
// const users = [
//   { name: 'Alice', bio: 'Alice is a software engineer' },
//   { name: 'Bob', bio: 'Bob is a teacher' },
//   { name: 'Charlie', bio: 'Charlie is a student' },
//   { name: 'Diana', bio: 'Diana is a doctor' },
// ];
// console.log(logEachUserBio(users))

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
