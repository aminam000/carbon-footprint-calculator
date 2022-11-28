import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Takeout () {
    const [takeout, setTakeout] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getTakeout = (evt) => {
        event.preventDefault();
        console.log('In takeout calc', takeout)
        dispatch({
            type: 'GET_TAKEOUT',
            payload: takeout
        })
        history.push('/shopping')
    }

    const handleChange = (event) => {
        setTakeout(event.target.value);
      };

    return (
        


          
            <Box sx={{ minWidth: 120 }}>
          <h2>How many times did you have takeout or eat out this week?</h2>
          <form onSubmit={getTakeout}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={takeout}
          label="takeout"
          onChange={(evt)=> setTakeout(evt.target.value)}
        >
            <MenuItem value={60}>12-15 times</MenuItem>
        <MenuItem value={50}>9-12 times</MenuItem>
          <MenuItem value={40}>6-9 times</MenuItem>
          <MenuItem value={30}>3-6 times</MenuItem>
          <MenuItem value={20}>1-3 times</MenuItem>
          <MenuItem value={10}>0 times</MenuItem>
  
        </Select>
      </FormControl>
      <button type='submit'>Next</button>
        </form>
    </Box>


    ) 
}
export default Takeout;

