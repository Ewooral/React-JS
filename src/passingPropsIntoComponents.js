import React from 'react'

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
        <main>
            <React.StrictMode>
                <h1><Header head="the Header" /></h1>
                <h4><Footer year={()=>{
                    let date = new Date();
                    return date.getFullYear();
                }} /></h4>
            </React.StrictMode>

        </main>
    )
}

function Footer(props) {
    return(
        <footer>
            <React.StrictMode>
                <h1>This is the Footer</h1>
                <h1>Today's date is: {props.year}</h1>
            </React.StrictMode>
        </footer>
    )
}

export default Main
