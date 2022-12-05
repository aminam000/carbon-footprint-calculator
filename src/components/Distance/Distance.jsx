import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';


function Distance(){
    const [distance, setDistance] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    // const handleChange = (event) => {
    //     setResidence(event.target.value);
    //   };


    const onHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "FETCH_DATA", 
            payload: distance

        })
        console.log('getting vehicle ' + distance);
        setDistance('');
 
    };

    const getDistance = (evt) => {
        evt.preventDefault();
        console.log('inside Distance', distance)
        dispatch({
            type: 'GET_DISTANCE',
            payload: distance
        })
        history.push('/transport');
    }
    const saveDistance = () => {
        
        console.log('inside saveDistance', distance)
        dispatch({
            type: 'GET_DISTANCE',
            payload: distance
        })
        history.push('/profile');
    }


    return(
         <section>
        <header>
         <h2>Distance</h2>
        <p>How far away do you live from your job?</p> 


             <form onSubmit={getDistance}>

                    <input type='num'
                        placeholder='miles'
                        
                        value={distance}
                        onChange={(evt)=> setDistance(evt.target.value)}>
                        </input>
                        <button type='submitBtn'>Next</button>
                </form> 
                <button onClick={saveDistance}>Save To Profile</button>
 
          </header>

     </section> 
    ) 
};

export default Distance;