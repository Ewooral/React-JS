import React from 'react';  // In the latest React version its not necessary to import React 
import PassingPropsIntoComponents from './PassingPropsIntoComponents';
import RenderComponentConditionally from './RenderComponentConditionally';
import ArrayDestructuring from './arrayDestructuring';
import RefactorElements from './RefactorElements';
import CreateElement from './CreateElement';
import country from './Keys'



const App = () => {  // Here is where components are rendered. 
    {
        return (
        <>
            <RenderComponentConditionally authorized={false} />
            <PassingPropsIntoComponents />
            <h2>{ArrayDestructuring.firstItem}</h2>
            <h2>{ArrayDestructuring.third}</h2>

            <RefactorElements name= "WORLD" />
            <CreateElement />
            <KeyComponent country = {country} />
           
        </>

    )
}
}

const KeyComponent = (props) => {
    return (
        <>
         <ul>
             <li>{props.country}</li>
         </ul>
        </>
    )
}





export default App