import React from 'react';  // In the latest React version its not necessary to import React 
import ReactDOM from 'react-dom';
import Pet from "./Pet";
import SearchParams from './SearchParams.'
import Props from './Props';


function Header(props) {
    return (
        <header>
            <h1>This is the Header</h1>
        </header>
    )
}

const App = () => {
    return (
        <div>
            <Header />
            <h1>My first React App </h1>
            <Pet name="Luna" age="4" gender="male" />
            <Pet name="Aboagye" age="16" gender="male" />
            <Pet name="Akua Dompoh" age="54" gender="female" />
            <SearchParams />
            <Props color="Red" name="Elijah" age="29" weight="50KG" />

        </div>

    )
}
ReactDOM.render(<App />, document.getElementById("root"));
