import React from 'react'; 

const CreateElement = () => {
    return React.createElement(
        'div',
        {},
        [
         React.createElement('strong',{ style: { color:"#969608" }},
                React.createElement('p',{ style: { color:"#969608" }}, "Hello, World")),
         React.createElement("h2", { style: { color:"#b55959"}}, "Creating React Element using React.createElement()")
         ]
     );


}

export default CreateElement;

/** 
 * Here, we created a React element( strong, p, and h2 ) and added some attributes. 
 * 
 * */ 