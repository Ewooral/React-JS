
/**
 * Here we refactor elements using JSX.
 * React.createElement('p',{ style: { color:"yellow" }},
 *  "who is happy that I am here?") 
 * Babel, which is a JavaScript tool converts JSX elements
 * into React.create elements
 */
import React from 'react'; 

const RefactorElements = (props) => {
    return (
        <>
          <div>
              <h2>Hello, {props.name} </h2>
              <p><strong>Refactoring elements using JSX</strong></p>
          </div>

        </>
    )


}

export default RefactorElements; 