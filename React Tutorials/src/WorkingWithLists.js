import React from 'react';

// include a list of items in the main component

function Key(){
    
const items = [
    "Laptops",
    "Desktops",
    "Tablets",
    "Phones",
    "Cameras",
    "Fruitelly"
]

const itemObject = items.map((dish, i) => ({id:i, title:dish}))
return itemObject

}
export default Key()
