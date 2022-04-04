import React from 'react';
import UseState from './UseState'



function SecretComponent(){  
    return(
        <>  
            <h1 style = {{color:"red", textAlign:"center"}}> Classified information for authorized users only </h1>
        </>
    )
}

function RegularComponent(){

   return(
        <>
            <h1 style = {{color:"blue", textAlign:"center"}}> Information available for everyone </h1>
            <UseState />
        </>
   )
}

function All({authorized}){
    // instead of props, we can destructure the props object
    // inline tenary if statement 
   return(                  
       <>
           {authorized ? <SecretComponent />  :<RegularComponent />}
       </>
   )

   /** OR 
 *  if(props.authorized){
        return(
        <>
            < SecretComponent /> 
        </>
          
           
        )
    } else{
        < RegularComponent />
    }
 */
    
    
}


export default All