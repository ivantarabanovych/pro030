//розгортання масивів
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined);
//розгортання рядків
const str = "hello";
const chars = [...str];

console.log(chars);
//розгортання обєктів
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };

console.log(merged);
//використання у функціїї
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const nums = [1, 2, 3, 4];
console.log(sum(...nums));