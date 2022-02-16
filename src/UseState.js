import React, { useState } from 'react';

function UseState(){
    const [emotions] = useState("Happy"); // destructuring of the array
    console.log(emotions);
    return(
        <>
        <h1>Current emotion is {emotions}</h1>
        </>
    );
}

export default  UseState;