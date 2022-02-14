import React from 'react'
import Keys from './Keys'







 
function Header(props) {
   
    return (
        <header>
       <React.StrictMode>
        <h1>This is {props.head} </h1>
       </React.StrictMode>
        </header>
    )
}

 
function Main() {
    return (
        <main style = {style.main}>
            <React.StrictMode>
                <h1><Header head="the Header" /></h1>
                <h4><Footer dishes={dishObj}/></h4>
            </React.StrictMode>

        </main>
    )
}

function Footer(props) {
    return(
        <footer>
            <React.StrictMode>
                <h1>This is the Footer Lists:</h1>
                <h2> 
                <ul>
               { props.dishes.map(dish => (
                   <li key={dish.id}>{dish.title}</li>))}
                </ul>
                </h2>
            </React.StrictMode>
        </footer>
    )
}

export default Main
