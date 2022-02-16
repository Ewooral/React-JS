import React from 'react';  // In the latest React version its not necessary to import React 
import PassingPropsIntoComponents from './PassingPropsIntoComponents';
import All from './RenderComponentConditionally';


const App = () => {  // Here is where components are rendered. 
    {
        return (
        <>
            <All authorized={false} />
            <PassingPropsIntoComponents />
            <AppTwo />
        </>

    )
}
}

function AppTwo(){
    return(
        <article>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Similique delectus hic non.
            Earum quam, placeat aspernatur similique corporis 
            molestias voluptates necessitatibus veniam facilis 
            quia distinctio illo optio. Aut, ab deserunt?
        </article>
    )
}

export default App