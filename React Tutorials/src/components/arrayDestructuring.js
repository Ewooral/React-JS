// import React from 'react'

const [firstItem, secondItem, thirdItem] = ["boots", "tent", "headlamp"]  // destructuring 
const [, , third] = ["Kamboo", "Socks", "hairbrush"]  // destructuring 
const [a, b, ...rest] = [1, 2, 3, 5, 6, 7, 9]
// let [,,,,a, b] = [1, 4, {1:"one", 2:"two"}, true, false, -1]
// a.map((x) => console.log(x) )
// console.log(a)

// OBJECT DESTRUCTURING
const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true


// Assignment separate from declaration

// A variable can be assigned its value with destructuring 
// separate from its declaration.


console.log(firstItem, third, rest)


// export default {firstItem, third}