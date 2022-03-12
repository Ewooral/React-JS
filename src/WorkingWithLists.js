import React from 'react';

const Lists = [
    "Ga Beans",
    "Milk and Tea",
    "Rice with Stew",
    "Banku with Tilapia"
] 

// Lists.map((x) => {
//     console.log(x);
// });



const List = () =>{
    return (
        Lists,
        <Show />
    )
}

const Show = (props) =>{
    return (
        <>
            <ul>
                {props.Lists.map((x) => console.log(x))}
            </ul>
        </>
    )
}



export default List