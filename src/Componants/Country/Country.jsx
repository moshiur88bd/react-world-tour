import { useState } from 'react';
import './County.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
const {name, flags, population, area, cca3} = country;

const [visited, setVisited] = useState(false);

const handleVisited = () =>{
    setVisited(!visited);  
}


    return (
        <div className={`country ${visited ?'visited' : 'non-visited'}`}>
            <h3 >Name : {name.common}</h3>
             <img src={flags.png} alt="" />
             <p>Country Code: {cca3}</p>
             <p>Population: {population}</p>
             <p>Area: {area}m<sup><b>2</b></sup></p>
             <button className='visited-btn' onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
             <br />
             <button className='visited-btn' onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button>
              <br />
             <button className='visited-btn' onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
             
             {visited ? 'I have visited this country.':'I want to Visit' }
        </div>
    ); 
};
 
export default Country;