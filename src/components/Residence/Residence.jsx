import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Residence(){
    const [residence, setResidence] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
        setResidence(event.target.value);
      };


    // const onHandler = (event) => {
    //     event.preventDefault();
    //     dispatch({
    //         type: "FETCH_DATA", 
    //         payload: residence

    //     })
    //     console.log('getting vehicle ' + residence);
    //     setResidence('');
 
    // };

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
        //  <section>
        // <header>
        //     <h2>Residence</h2>
        //     <p>I live in a(n)</p> 
            <Box sx={{ minWidth: 120 }}>
                 <h2>I live in a(n):</h2>

                 <form onSubmit={getResidence}>
                          <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={residence}
          label="Residence"
          onChange={(evt)=> setResidence(evt.target.value)}
        >
          <MenuItem value={10}>Apartment</MenuItem>
          <MenuItem value={20}>House</MenuItem>
          <MenuItem value={30}>Townhouse</MenuItem>
        </Select>
        </FormControl>
        <button type='submit'>Next</button>
        </form>
      
    </Box>

             /* <form onSubmit={getResidence}>

                    <input type='text'
                        required placeholder='residence'
                        
                        value={residence}
                        onChange={(evt)=> setResidence(evt.target.value)}>
                        </input>
                        <button type='submitBtn'>Next</button>
                </form>  */
 
        //      </header>

        // </section> 
    ) 
};

export default Residence;