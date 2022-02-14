import React from 'react'

function Header(props) {
   
    return (
        <header>
            <h1>This is the Header</h1>
        </header>
    )
}

function Main(props) {
     console.log(props)
    return (
        <main>
            <h2>{props.hwoa} is Body</h2>
            <h3>{props.eye} is Eye</h3>
        </main>
    )
}

export default { Header, Main }