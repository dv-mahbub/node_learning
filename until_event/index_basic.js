const _ = require("lodash");
const data = require("../data").default;

console.log("hello world!");
console.log(1 + 3);

let a = 5;
var b = 10;

console.log(a + b);

// console.log(global.fetch);

console.log(data.name);
console.log(data.hobbies[1]);
console.log(data.hobbies[1][2]);

const array = [1, 2, 3, 4, 5];
const doubledArray = _.map(array, (num) => num * 2);
const tripledArray = _.map(array, (a) => a * 3);

console.log(doubledArray);
console.log(tripledArray);

const stringArray = ["a", "b", "c", "d"];
const upperCaseArray = _.map(stringArray, (str) => str.toUpperCase());
const repeatedArray = _.map(stringArray, (str) => str.repeat(3));

console.log(upperCaseArray);
console.log(repeatedArray);

console.log(_.random(1, 100));
console.log(_.last(repeatedArray));
console.log(_.lastIndexOf(repeatedArray));

console.log(data.hobbies[_.lastIndexOf(data.hobbies) - 1]);

setTimeout(() => {
  a = 555;
  console.log(a);
}, 1000);
