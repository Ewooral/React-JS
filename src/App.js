import React from 'react';  // In the latest React version its not necessary to import React 
import ReactDOM from 'react-dom';
import Pet from "./Pet";
import SearchParams from './SearchParams.'
import Props from './Props';
import PassingPropsIntoComponents from './PassingPropsIntoComponents';



const App = () => {  // Here is where components are rendered. 
    return (
        <div>
            <PassingPropsIntoComponents />
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
