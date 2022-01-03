import React from 'react';

const Props = (props) => {
    return(
        <div>
            <h1>{props.color}</h1>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h4>{props.weight}</h4>
        </div>

    )
}

export default Props;