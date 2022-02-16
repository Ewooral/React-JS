import React from 'react';  // In the latest React version its not necessary to import React 
import PassingPropsIntoComponents from './PassingPropsIntoComponents';
import RenderComponentConditionally from './RenderComponentConditionally';
import ArrayDestructuring from './arrayDestructuring'


const App = () => {  // Here is where components are rendered. 
    {
        return (
        <>
            <RenderComponentConditionally authorized={false} />
            <PassingPropsIntoComponents />
            <h2>{ArrayDestructuring.firstItem}</h2>
            <h2>{ArrayDestructuring.third}</h2>
           
        </>

    )
}
}





export default App