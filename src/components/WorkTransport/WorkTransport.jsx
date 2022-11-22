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

function WorkTransport(){
    const [worktrip, setWorkTransport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
        setWorkTransport(event.target.value);
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

    const getWorkTransport = (evt) => {
        evt.preventDefault();
        console.log('inside worktrips', worktrip)
        dispatch({
            type: 'GET_WORKTRIP',
            payload: worktrip
        })
        history.push('/distance');
    }


    return(
        //  <section>
        // <header>
        //     <h2>Residence</h2>
        //     <p>I live in a(n)</p> 
            <Box sx={{ minWidth: 120 }}>
                 <h2>What is your main mode of transportation to work?</h2>

                 <form onSubmit={getWorkTransport}>
                          <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={worktrip}
          label="worktrip"
          onChange={(evt)=> setWorkTransport(evt.target.value)}
        >
<MenuItem value={1}>Conventional Car</MenuItem>
            <MenuItem value={2}>Hybrid Car</MenuItem>
            <MenuItem value={3}>Plug-In Hybrid Car</MenuItem>
            <MenuItem value={4}>Electric Car</MenuItem>
           <MenuItem value={5}>Motorbike</MenuItem>
           <MenuItem value={7}>Public Transport</MenuItem>
        <MenuItem value={6}>Bike</MenuItem>
        <MenuItem value={7}>Walking</MenuItem>

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

export default WorkTransport;