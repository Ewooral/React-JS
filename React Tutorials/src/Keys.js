import React from 'react';

// include a list of items in the main component

function Key(){
    
const countries = [
    "Nigeria",
    "Ghana",
    "Congo",
    "Mali",
    "Mauricious"
]

const country = countries.map((country) => (<li>{country}</li>))
return country

}
export default Key()
