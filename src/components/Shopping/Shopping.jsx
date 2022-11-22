import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Shopping () {
    const [shop, setShop] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getShop = (evt) => {
        event.preventDefault();
        console.log('In shop calc', shop)
        dispatch({
            type: 'GET_SHOP',
            payload: shop
        })
        history.push('/flights')
    }

    const handleChange = (event) => {
        setShop(event.target.value);
      };

    return (
        


          
            <Box sx={{ minWidth: 120 }}>
          <h2>Which of these choices best describe your shopping habits this week?</h2>
          <form onSubmit={getShop}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={shop}
          label="shop"
          onChange={(evt)=> setShop(evt.target.value)}
        >
          <MenuItem value={10}>I shopped local and thrifty</MenuItem>
          <MenuItem value={20}>I stocked up on essentials</MenuItem>
          <MenuItem value={30}>I raided the mall</MenuItem>
 
  
        </Select>
      </FormControl>
      <button type='submit'>Next</button>
        </form>
    </Box>


    ) 
}
export default Shopping;

