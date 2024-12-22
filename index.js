console.log("hello world!");
console.log(1 + 3);

let a = 5;
var b = 10;

console.log(a + b);

// console.log(global.fetch);

const data = require("./data").default;
console.log(data.name);
console.log(data.hobbies[1]);
console.log(data.hobbies[1][2]);

const _ = require("lodash");

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
