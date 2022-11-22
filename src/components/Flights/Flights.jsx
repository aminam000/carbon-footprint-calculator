import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';


function Flights(){
    const [flights, setFlights] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    // const handleChange = (event) => {
    //     setResidence(event.target.value);
    //   };


    const onHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "FETCH_DATA", 
            payload: flights

        })
        console.log('getting flights ' + flights);
        setFlights('');
 
    };

    const getFlights = (evt) => {
        evt.preventDefault();
        console.log('inside FLIGHTS', flights)
        dispatch({
            type: 'GET_FLIGHTS',
            payload: flights
        })
        history.push('/Review');
    }


    return(
         <section>
        <header>
        
        <p>If you took any flights this week, please input the total miles below:</p> 


             <form onSubmit={getFlights}>

                    <input type='number'
                         placeholder='miles'
                        
                        value={flights}
                        onChange={(evt)=> setFlights(evt.target.value)}>
                        </input>
                        <button type='submitBtn'>Next</button>
                </form> 
 
          </header>

     </section> 
    ) 
};

export default Flights;