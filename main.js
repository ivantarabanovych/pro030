//цикл for
const array = [10, 20, 30, 40];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//Цикл for..in
const obj = { name: 'Somename', age: 30, city: 'Somecity' };
for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}
//Цикл for..of
const array = [10, 20, 30, 40];
for (let value of array) {
    console.log(value);
}