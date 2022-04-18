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
     const [bulb, setBulb] = useState("OFF")
     const [emotions, setEmotions] = useState("SAD")

     useEffect(()=>{
        console.log(bulb)
     }, [bulb] )

     useEffect(()=>{
        console.log(emotions)
     }, [emotions] )
     

     return (
       <div>
          <h1>React Hooks Tutorials</h1>
          <h3>Currently, our light is {bulb} and I am {emotions} at the same time </h3>

          <span>Click the buttons to turn the light on or off</span>

          <div>

            <button onClick={() => {
              setBulb("ON")

            }}> On </button>


            <button onClick={() => {
              setBulb("OFF")
            }}> Off </button>


            <button onClick={() => {
              setEmotions("HAPPY")
            }}> Happy </button>


            <button onClick={() => {
              setEmotions("SAD")
            }}> Sad </button>

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