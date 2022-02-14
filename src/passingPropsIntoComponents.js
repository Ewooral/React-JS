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
const dishes = [
    "Ugali",
    "Fried Rice",
    "Eba",
    "Fufu",
    "Rice",
    "Beans",
];
 

function Main() {
    return (
        <main>
            <React.StrictMode>
                <h1><Header head="the Header" /></h1>
                <h4><Footer dishes={dishes}/></h4>
                <h3>Dishes: {}</h3>
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
               { props.dishes.map(dish => <li>{dish}</li>)}
                </ul>
                </h2>
            </React.StrictMode>
        </footer>
    )
}

export default Main
