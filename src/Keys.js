import React from 'react';





const Keys = () => {
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
    // console.log(dishObj)

       return {dishObj, dishes};
        
}

 




console.log(Keys())






export default Keys()