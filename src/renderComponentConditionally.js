import React from 'react';

function SecretComponent(){
    return(
        <>
            <h1> Classified information for authorized users only </h1>
        </>
    )
}

function RegularComponent(){
   return(
        <>
            <h1> Information available for everyone </h1>
        </>
   )
}

function All(props){
    if(props.authorized){
        return(
            <RegularComponent />
        )
    } else{
return (
        <>
            <SecretComponent />
        </>
    )
    }
    
    
}

/**
 *  if(props.authorized){
        return(
        <>
            <h1>Hello</h1>
            <All />
        </>
          
           
        )
    } else
 */
export default All