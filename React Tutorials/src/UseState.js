import React, { useState } from 'react';

function UseState(){

    // unpack the array value "Happy" into a distinct variable "emotion"(destructure the array)
    const [emotion, setEmotion] = useState("Happy"); 
    console.log(emotion);
    return(
        <article style = {{textAlign:"center"}}>
            <h1> Current emotion is <strong  style = {{color:"#a012a0"}}> {emotion}</strong> </h1>
            <button onClick = {() => setEmotion("frustrated")}> Frustate </button>
            <button onClick = {() => setEmotion("enthused")}> enthuse </button>
            <button onClick = {() => setEmotion("Happy")}> Happy </button>
        </article>
    );
}

export default  UseState;