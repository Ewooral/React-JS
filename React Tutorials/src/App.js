import React from 'react';  // In the latest React version its not necessary to import React 
import PassingPropsIntoComponents from './components/PassingPropsIntoComponents';
import RenderComponentConditionally from './components/renderComponentConditionally';
import ArrayDestructuring from './components/arrayDestructuring';
import RefactorElements from './components/RefactorElements';
import CreateElement from './components/CreateElement';
import country from './components/Keys'
import Unconditional from './controller/conditionalRend'
import States from './states/UseState'

import "./App.css"



const App = () => {  //  Here is where components are rendered. 
    {
        return (
        <>
          <figure>

             <section>
                 {/* <RenderComponentConditionally authorized={false} />
                 <PassingPropsIntoComponents /> 
                 <h2>{ArrayDestructuring.firstItem}</h2>
                 <h2>{ArrayDestructuring.third}</h2> */}
             </section>
                
             <section>
                 {/* <RefactorElements name= "WORLD" /> */}
                 {/* <CreateElement /> */}
             </section>

             <section>
                 {/* <KeyComponent country = {country} /> */}
                 {/* <Unconditional allowed = {false}/> */}
                 <States  />
             </section>
            
            

            
            
          </figure> 
        </>

    )
}
}

// const KeyComponent = (props) => {
//     return (
//         <>
//          <ul>
//              <li>{props.country}</li>
//          </ul>
//         </>
//     )
// }





export default App