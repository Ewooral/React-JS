import React from 'react'

const [firstItem, secondItem, thirdItem] = ["boots", "tent", "headlamp"]  // destructuring 
const [, , third] = ["Kamboo", "Socks", "hairbrush"]  // destructuring 

let a = [1, 4, {1:"one", 2:"two"}, true, false, -1]
a.map((x) => console.log(x) )
console.log(a)
console.log(b)
console.log(firstItem, third)


export default {firstItem, third}