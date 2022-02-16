import React from 'react'

const [firstItem, secondItem, thirdItem] = ["boots", "tent", "headlamp"]  // destructuring 
const [, , third] = ["Kamboo", "Socks", "hairbrush"]  // destructuring 

console.log(firstItem, third)


export default {firstItem, third}