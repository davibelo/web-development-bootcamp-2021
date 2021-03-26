// Spread Operator 
// ...

const citrus = ["Lime", "Lemon", "Orange"];

// spreading citrus array inside fruits array
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond"
};

// spreading fullName object inside user object
const user1 = {
  ...fullName,
  id: 1,
  username: "jamesbond007"
};

// spread operator doesn't insert fullName object
// its spread FullName properties inside user2 object
console.log(user1);

// inserting fullName object inside user object
const user2 = {
  fullName,
  id: 1,
  username: "jamesbond007"
};


console.log(user2);
