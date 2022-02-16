import React from 'react'
import item from './Keys';
import image from './add_image';

// HEADER COMPONENT
function Header(props){
    return(
        <header>
            <h1>this is the {props.name} </h1>
        </header>
    )
}

// MAIN COMPONENT
function Main(props){
    return(
        <main style = {{textAlign:"center"}}>
          <h1>List of items in our workshop:</h1>
         
             <ul>
                {props.list.map( dish =>
                    (<li key={dish.id}>{dish.title}</li>)
                )} 
             </ul>

          <img src={image} height={290} alt="add image" />
        </main>
    )
}

// FOOTER COMPONENT
function Footer(props){
    return(
        <footer><h1>This is the {props.name}</h1></footer>
    )
}
// you can either use React.Fragment or <>
function PassingPropsIntoComponents(){
    return(
        <>
            <Header name="Header Page" />
            <Main list = { item }/>
            <Footer name = "Footer Page" />
        </>
    )
}



export default PassingPropsIntoComponents


