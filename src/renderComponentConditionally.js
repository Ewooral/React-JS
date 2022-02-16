import React from 'react';

function SecretComponent(){
    return(
        <> 
            <h1 style = {{color:"red"}}> Classified information for authorized users only </h1>
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
   return(
       <>
           {props.authorized ? <SecretComponent />  :<RegularComponent />}
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