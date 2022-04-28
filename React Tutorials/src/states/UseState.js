import React, {useState, useEffect, useReducer} from 'react'

import { useSpring, animated } from 'react-spring'

import styled from 'styled-components'

 // Create a Title component that'll render an <h1> tag with some styles 
            const Title = styled.h1`
              font-size: 1.5em;
              text-align: center;
              color: palevioletred;
            `;

// Create a Wrapper component that'll render a <section> tag with some styles
            const Wrapper = styled.section`
              padding: 4em;
              background: papayawhip;
            `;

            const Button = styled.button`
              /* Adapt the colors based on primary prop */
              background: ${props => props.primary ? "palevioletred" : "white"};
              color: ${props => props.primary ? "white" : "palevioletred"};

              font-size: 1em;
              margin: 1em;
              padding: 0.25em 1em;
              border: 2px solid palevioletred;
              border-radius: 3px;
              cursor: pointer;
              border-radius: 10px;
            `;

          

// Use Title and Wrapper like any other React component – except they're styled! 


/* 
1. USE STATE 
take a pair. the first one is a state variable 
 the second one is a function that updates the state
 We pass what we want the state to be in the useState("") function

2. USE EFFECT 
 it is used to manage side effects that are unrelated to the 
 component's render. E.g. console messages, loading data and animations
 can benefit from useEffect
   - useEffect takes in a callback function
   - it takes in a second arg called dependency array

3. USE REDUCER
The useReducer Hook is similar to the useState Hook.
It allows for custom state logic.
If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

Syntax =======
The useReducer Hook accepts two arguments.
useReducer(<reducer>, <initialState>)
The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
The useReducer Hook returns the current state and a dispatch method.
Here is an example of useReducer in a counter app:

 */
   

// React Spring

  const ReactSpring = () => {
      const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: {delay: 2} })
  return <animated.div style={props}>I will fade in</animated.div>
  }
  

  const Checked = () => {
    return (
      <>
        <h2 style={{backgroundColor: "#afff00", padding:".5rem"}}> Subscribed! </h2>
      </>
    )
  }

  const NotChecked = () => {
    return (
      <>
        <h2 style={{backgroundColor: "transparent"}}> Unsubscribed! </h2>
      </>
    )
  }

 
   const UseState = () => {

     

     const [bulb, setBulb] = useState("undefined")
     const [emotions, setEmotions] = useState("SAD")
    //  const [checked, setChecked] = useState(false)
     const [checked, toggle] = useReducer(
        (checked) => !checked, 
          false
    )


     useEffect(()=>{
        console.log(bulb)
     }, [bulb] )

     useEffect(()=>{
        console.log(emotions)
     }, [emotions] )

    //  function toggle(){
    //    setChecked((checked) => !checked)
    //  }

     
    /** IF ternary operator
     * 
     * function example(…) {
        return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}
      */
 


     return ( 
       <div className='setbackground'>

                   <Wrapper>
                      <Title>
                        Hello World!
                      </Title>
                      <Button>
                        Danger
                      </Button>
                     
                  </Wrapper>
          
          <h1>React Hooks Tutorials</h1>
          <h3>Currently, our light is <span id='_ui' className="white"> {bulb} </span> and I am {emotions} at the same time </h3>

          <span>Click the buttons to turn the light on or off</span>

          <div>

            <button onClick={() => {
              setBulb("ON")             
              
              _ui.className == "white" ? _ui.classList.replace("white", "yellow") : 
              _ui.className == "off" ?   _ui.classList.replace("off", "yellow") : _ui.className == "white"

            }}> On </button>


            <button onClick={() => {
              setBulb("OFF")
              
              _ui.className == "white" ?  _ui.classList.replace("white", "off") : 
              _ui.className == "yellow" ?   _ui.classList.replace("yellow", "off") : _ui.className == "white"




            }}> Off </button>


            <button onClick={() => {
              setEmotions("HAPPY")
            }}> Happy </button>


            <button onClick={() => {
              setEmotions("SAD")
            }}> Sad </button> 

              <br />
              <br />

            <label htmlFor="">Subscribe</label> 
                      <input 
                      type="checkbox" 
                      value={checked} 
                      name="checkbox" 
                      id="checkbox" 
                      onChange={toggle} 
                      />
            <div className='wrap'> { checked ? <Checked /> : <NotChecked /> } </div>

            <h4>React Spring</h4>
            <h5><ReactSpring /></h5>
             

          </div>
       </div>
     )
   }
   
   export default UseState
































// const UseState = props => {
//  const [bulb, setBulb] = useState("Off")

//     useEffect(() => {
//         console.log(` It's ${bulb} around here` )
//     }, [bulb]
//     )


//   return (
//       <>
//         <div className='setbackground'>
//           <h1> USE STATE TUTORIAL </h1>  
//             <h3> click the botton to turn the bulb on or off </h3>
//             <h3> Currently bulb is 
//                 <span id='_ui' className="white"> { bulb }</span> 
//             </h3>

//             <button onClick = { () => {
//                 setBulb("ON")

//                     if(_ui.className == "white")
//                         {
//                             _ui.classList.replace("white", "yellow")
//                         }
//                     if (_ui.className == "off"){
//                             _ui.classList.replace("off", "yellow")
//                         }
//                 } 
//                 }>
//                 on
//             </button>

//             <button onClick = { () => {
//                 setBulb("OFF");

//                     if(_ui.className == "white"){
//                         _ui.classList.replace("white", "off")
//                     }
//                     else if (_ui.className == "yellow"){
//                         _ui.classList.replace("yellow", "off")
//                     }

//                 }
//             }>
//                 off
//             </button>

//         </div>
//       </>
   

//   )
// }



// export default UseState