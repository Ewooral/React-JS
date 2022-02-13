import React from 'react';  // In the latest React version its not necessary to import React 
import ReactDOM from 'react-dom';
import Pet from "./Pet";
import SearchParams from './SearchParams.'
import Props from './Props';


function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>This is the Header</h1>
        </header>
    )
}

function Main(props) {
    return (
        <main>
            <h2>This is Body</h2>
        </main>
    )
}

const App = () => {  // Here is where components are rendered. 
    return (
        <div>
            <Header />
            <Main />
            <h1>My first React App </h1>
            <Pet name="Luna" age="4" gender="male" />   // You can pass in props values here
            <Pet name="Aboagye" age="16" gender="male" />
            <Pet name="Akua Dompoh" age="54" gender="female" />
            <SearchParams />
            <Props color="Red" name="Elijah" age="29" weight="50KG" />

        </div>

    )
}
ReactDOM.render(<App />, document.getElementById("root"));
