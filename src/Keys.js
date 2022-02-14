import React from 'react';

const dishes = [
    "Ugali",
    "Fried Rice",
    "Eba",
    "Fufu",
    "Rice",
    "Beans",
    "Waakye "
];

const dishObj = dishes.map((value, key) => ({id: key, title: value}))
console.log(dishObj)

const Keys = () => {
       return (
           <h1>{dishes}</h1>
       )
}

 











export default Keys