       import React from 'react';
       import ReactDOM from 'react-dom';
       import Pet from "./Pet";
       
        const App = () => {
        return React.createElement("div", {}, [
            React.createElement("h1", {}, "My first React app"),
            // ...[1,2,3,4,5].map(x => React.createElement("h2", null, x)),
            React.createElement(Pet, { name: " Luna", age: 4, gender: "female" }),
            React.createElement(Pet, { name: " Luna", age: 3, gender: "female" }),
            React.createElement(Pet, { name: " Luna", age: 3, gender: "female" }),
        ]);
        };
        ReactDOM.render(React.createElement(App), document.getElementById("root"));
