import React from 'react'; 

const CreateElement = () => {
    return React.createElement(
        'div',
        {},
        React.createElement(
            'p',
            { style: { color:"yellow" }}, 
            "who is happy that I am here?"
        )
     );


}

export default CreateElement;