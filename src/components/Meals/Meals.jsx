import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Meals () {
    const [meat, setMeat] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getMeat = (evt) => {
        event.preventDefault();
        console.log('In meat calc', meat)
        dispatch({
            type: 'GET_MEAT',
            payload: meat
        })
        history.push('/takeout')
    }

    const handleChange = (event) => {
        setMeat(event.target.value);
      };

    return (
        


          
            <Box sx={{ minWidth: 120 }}>
          <h2>Which of these choices best describe your meal habits?</h2>
          <form onSubmit={getMeat}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={meat}
          label="meat"
          onChange={(evt)=> setMeat(evt.target.value)}
        >
          <MenuItem value={40}>Omnivorous</MenuItem>
          <MenuItem value={30}>Vegetarian</MenuItem>
          <MenuItem value={20}>Plantbased</MenuItem>
          <MenuItem value={10}>Vegan</MenuItem>
  
        </Select>
      </FormControl>
      <button type='submit'>Next</button>
        </form>
    </Box>


    ) 
}
export default Meals;

