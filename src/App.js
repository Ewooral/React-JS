import React from 'react';  // In the latest React version its not necessary to import React 
import ReactDOM from 'react-dom';
import PassingPropsIntoComponents from './PassingPropsIntoComponents';



const App = () => {  // Here is where components are rendered. 
    return (
        <>
            <PassingPropsIntoComponents />
        </>

    )
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
ReactDOM.render(
    <>
     <App /> 
     <AppTwo />
    </>
     
,document.getElementById("root"));
