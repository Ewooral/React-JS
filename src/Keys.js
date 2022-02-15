import React from 'react';

// include a list of items in the main component

function Key(){
    
const items = [
    "Laptops",
    "Desktops",
    "Tablets",
    "Phones",
    "Cameras"
]

const itemObject = items.map((dish, i) => ({id:i, title:dish}))
console.log(itemObject)
return itemObject

}
console.log(Key())
export default Key()
