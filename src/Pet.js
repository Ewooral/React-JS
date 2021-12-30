import React from 'react';

       const Pet = (props) => {
        return React.createElement("div", {}, [
            React.createElement("h2", {}, props.name),
            React.createElement("h3", {}, props.age),
            React.createElement("h3", {}, props.gender),
        ]);
        };
export default Pet;