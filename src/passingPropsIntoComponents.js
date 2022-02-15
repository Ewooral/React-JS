import React from 'react'


function Header(){
    return(
        <div>
            <h1>this is the Header page </h1>
        </div>
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


