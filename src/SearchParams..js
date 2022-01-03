import React from 'react';
import { useState } from 'react';

const Animals = ["bird", "cat", "dog", "rabbit", "reptile"]
 
const SearchParams = () => {
    // const location = " Accra, GH"
    const [location, setLocation] = useState("Accra, GH")
    const [animal, setAnimal] = useState("Select")

    return(
        <div className="search-params">
            <form action="">
               <label htmlFor="location">Location 
                 <input id="location" onChange={e => setLocation(e.target.value)} value={location.toLowerCase()}  placeholder="Location"/>
               </label>

               <label htmlFor="animal">Animal 
                 <select 
                 id="animal" 
                 value={animal} 
                 onChange={e => setAnimal(e.target.value)} 
                 onBlur={e => setAnimal(e.target.value)}
                 >
                 <option  value="">Select an Animal </option>
                 {
                     Animals.map(animal => (
                       <option value={animal} key={animal}>
                           {animal}
                       </option>
                     ))
                 }

                 </select>
               </label>
               <button> Submit </button>
            </form>
        </div>
    )
}

export default SearchParams;