import React from 'react';

//    const Pet = (props) => {
//     return React.createElement("div", {}, 
//     [
//         React.createElement("h2", {}, props.name),
//         React.createElement("h3", {}, props.age),
//         React.createElement("h3", {}, props.gender),
//     ]);
//     };

// REWRITTEN IN JSX
const Pet = (props) => {
    return (
        <div id="pet">
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h3>{props.gender}</h3>
        </div>
    )
}
export default Pet;