import React from 'react';


const Props = (props) => {
    return (
        <div>
            <h1>This is my color: {props.color}</h1>
            <h2>He's got a weird name which is: {props.name}</h2>
            <h3>That guy is very old. He is: {props.age}</h3>
            <h4>Cumbersome as He is, He still eats a lot. He weighs: {props.weight}</h4>
        </div>

    )
}


export default Props;