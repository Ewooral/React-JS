import React, { useState } from 'react';

function UseState(){

    // unpack the array value "Happy" into a distinct variable "emotion"(destructure the array)
    const [emotion, setEmotion] = useState("Happy"); 
    console.log(emotion);
    return(
        <>
        <h1> Current emotion is {emotion} </h1>
        <button onClick = {() => setEmotion("frustrated")}> Frustate </button>
        <button onClick = {() => setEmotion("enthused")}> enthuse </button>
        <button onClick = {() => setEmotion("Happy")}> Happy </button>
        </>
    );
}

export default  UseState;