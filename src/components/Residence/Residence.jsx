import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Residence(){
    const [residence, setResidence] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getResidence = (evt) => {
        evt.preventDefault();
        console.log('inside Residence', residence)
        dispatch({
            type: 'GET_RESIDENCE',
            payload: residence
        })
        history.push('/vehicle');
    }


    return(
        <section>
        <header>
            <h1>How well are you understanding the content?</h1>
            <p>Understanding?</p>

                <form onSubmit={getResidence}>

                    <input type='text'
                        required placeholder='residence'
                        
                        value={rating}
                        onChange={(evt)=> setResidence(evt.target.value)}>
                        </input>
                        <button type='submitBtn'>Add To Profile</button>
                </form>
            </header>

        </section>
    )
};

export default Residence;