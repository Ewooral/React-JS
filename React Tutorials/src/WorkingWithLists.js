import React from 'react';

const Lists = [
    "Ga Beans",
    "Milk and Tea",
    "Rice with Stew",
    "Banku with Tilapia"
] 

Lists.map((x) => {
    console.log(x);
});





const Show = (props) =>{
    return (
       
        <>
            <ul>
                {props.Lists.map((x) => (<li>{x}</li>))}
            </ul>
        </>
    )
}




export default Show