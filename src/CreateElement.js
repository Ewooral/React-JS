import React from 'react'; 

const CreateElement = () => {
    return React.createElement(
        'div',
        {},
        [React.createElement('p',{ style: { color:"yellow" }}, "who is happy that I am here?"),
         React.createElement("h2", { style: { color:"#b55959"}}, "I have an interview with bloomberg")
         ]
     );


}

export default CreateElement;