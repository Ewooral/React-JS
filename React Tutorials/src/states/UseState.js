import React, {useState, useEffect} from 'react'

/* 
1. USESTATE 
take a pair. the first one is a state variable 
 the second one is a function that updates the state
 We pass what we want the state to be in the useState("") function
 2. USEEFFECT 
 it is used to manage side effects that are unrelated to the 
 component's render. E.g. console messages, loading data and animations
 can benefit from useEffect
   - useEffect takes in a callback function
   - it takes in a second arg called dependency array

 */
   
   const UseState = () => {
    //  return (
       <div>
          <h1>React Hooks Tutorials</h1>
       </div>
     )
   }
   
   export default UseState