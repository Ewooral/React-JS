import React from 'react'
import item from './keys';

// HEADER COMPONENT
function Header(props){
    return(
        <div>
            <h1>this is the {props.name} </h1>
        </div>
    )
}

// MAIN COMPONENT
function Main(props){
    return(
        <div><h1>This is the </h1></div>
    )
}

// FOOTER COMPONENT
function Footer(props){
    return(
        <div><h1>This is the {props.name}</h1></div>
    )
}

function PassingPropsIntoComponents(){
    return(
        <React.StrictMode>
            <Header name="Header Page" />,
            <Main list = {item} />,
            <Footer name = "Footer Page" />
        </React.StrictMode>
    )
}



export default PassingPropsIntoComponents


