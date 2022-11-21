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
        history.push('/shop')
    }

    const handleChange = (event) => {
        setMeat(event.target.value);
      };

    return (
        <section>

            <header>

            <h1>Which of these choices best describe your meal habits</h1>
            <p></p>
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="Meat">Select From Options</InputLabel>
        <Select
          labelId="MeatId"
          id="demo-simple-select"
          value={meat}
          label="meat"
          onChange={handleChange}
        >
          <MenuItem value={10}>Omnivorous</MenuItem>
          <MenuItem value={20}>Vegetarian</MenuItem>
          <MenuItem value={30}>Plantbased</MenuItem>
          <MenuItem value={10}>Vegan</MenuItem>
  
        </Select>
      </FormControl>
    </Box>


            </header>

        </section>
    ) 
}
export default Meals;

