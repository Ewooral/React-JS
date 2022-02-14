import React from 'react'
import Keys from './Keys'

    // const dishes = [
    //     "Ugali",
    //     "Fried Rice",
    //     "Eba",
    //     "Fufu",
    //     "Rice",
    //     "Beans",
    //     "Waakye "
    // ];
    // const dishObj = dishes.map((value, key) => ({id: key, title: value}))
    // console.log(dishObj)
 
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
                <h4><Footer dishwasher={Keys.dishObj}/></h4>
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
               { props.dishwasher.map(dish => (
                   <li key={dish.id}>{dish.title}</li>))}
                </ul>
                </h2>
            </React.StrictMode>
        </footer>
    )
}

export default Main
