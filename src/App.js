       import React from 'react';  // In the latest React version its not necessary to import React 
       import ReactDOM from 'react-dom';
       import Pet from "./Pet";
       import SearchParams from './SearchParams.'
       
        // const App = () => {
        // return React.createElement("div", {}, [
        //     React.createElement("h1", {}, "My first React app"),
        //     // ...[1,2,3,4,5].map(x => React.createElement("h2", null, x)),
        //     React.createElement(Pet, { name: " Luna", age: 4, gender: "female" }),
        //     React.createElement(Pet, { name: " Luna", age: 3, gender: "female" }),
        //     React.createElement(Pet, { name: " Luna", age: 3, gender: "female" }),
        // ]);
        // };
        
        const App = () => {
            return(
                <div>
                    <h1>My first React App </h1>
                    <Pet name="Luna" age="4" gender="male"/>
                    <Pet name="Aboagye" age="16" gender="male" />
                    <Pet name="Akua Dompoh" age="54" gender="female" />

                    <SearchParams />
  
                </div>
            )
        }
        ReactDOM.render(<App/>, document.getElementById("root"));
