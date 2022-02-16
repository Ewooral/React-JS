import React, { useState } from 'react';

function UseState(){
    const [emotion, setEmotion] = useState("Happy"); // destructuring of the array
    console.log(emotion);
    return(
        <>
        <h1> Current emotion is {emotion} </h1>
        <button onClick = {() => setEmotion("frustrated")}> Frustate </button>
        </>
    );
}

export default  UseState;