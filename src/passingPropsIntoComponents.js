import React from 'react'

// HEADER COMPONENT
function Header(){
    return(
        <div>
            <h1>this is the Header page </h1>
        </div>
    )
}

// MAIN COMPONENT
function Main(){
    return(
        <div>This is the Main page</div>
    )
}

// FOOTER COMPONENT
function Footer(){
    return(
        <div>This is the Footer page</div>
    )
}

function PassingPropsIntoComponents(){
    return(
        <Header />, 
        <Main />,
        <Footer />
    )
}



export default PassingPropsIntoComponents


