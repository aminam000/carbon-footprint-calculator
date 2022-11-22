// import { useState, useEffect } from 'react';
// import {useDispatch} from 'react-redux';
// import {useSelector} from 'react-redux';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// function Vehicles() {

//     const [vehicle, setVehicle] = useState('')
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const handleChange = (event) => {
//       setVehicle(event.target.value);
//     };
//     // const choosevehicle = useSelector((store)=> store.vehicle);

//     // const onHandler = (event) => {
//     //     event.preventDefault();
//     //     dispatch({
//     //         type: "FETCH_DATA", 
//     //         payload: vehicle

//     //     })
//     //     console.log('getting vehicle ' + vehicle);
//     //     setVehicle('');
 
//     // };

//     const getVehicle = (evt) => {
//         evt.preventDefault();
//         console.log('inside vehicle', vehicle)
//         dispatch({
//             type: 'GET_VEHICLE',
//             payload: vehicle
//         })
//         history.push('/worktransport');
//     }
   

    

//     return (
//         // <div className="props.classname">
//         //     <form className="CreateCalc_button">
//         //     <TextField size='small' label='Title' variant='outlined' color='secondary' type="text" placeholder="Search Show" 
//         //         value={vehicle} onChange={(event)=> setVehicle(event.target.value)}
//         //         />
//         //         <button className="btn btn-block" onClick={onHandler}>Next</button>
//         //     </form>
//         // </div>
        
//         <Box sx={{ minWidth: 120 }}>
//                <h2>What type of car do you own/drive?</h2>
//                <form onSubmit={getVehicle}>
//         <FormControl fullWidth>
     
//           <InputLabel id="demo-simple-label">Type of Car</InputLabel>
//           <Select
//             labelId="demo-simple-label"
//             id="demo-simple"
//             value={vehicle}
//             label="vehicle"
//             onChange={(evt)=> setVehicle(evt.target.value)}
//           >

//             <MenuItem value={1}>Conventional Car</MenuItem>
//             <MenuItem value={2}>Hybrid Car</MenuItem>
//             <MenuItem value={3}>Plug-In Hybrid Car</MenuItem>
//             <MenuItem value={4}>Electric Car</MenuItem>
//             <MenuItem value={5}>Motorbike</MenuItem>
//             <MenuItem value={6}>Bike</MenuItem>
//             <MenuItem value={7}>I don't own any vehicles</MenuItem>
//           </Select>
   
//         </FormControl>
//         <button type='submitBtn'>Next</button>
//         </form>
//       </Box>
//     )
// }
// export default Vehicles;


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

function Vehicles(){
    const [vehicle, setVehicle] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
        setVehicle(event.target.value);
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

    const getVehicle = (evt) => {
        evt.preventDefault();
        console.log('inside Veicle', vehicle)
        dispatch({
            type: 'GET_VEHICLE',
            payload: vehicle
        })
        history.push('/WorkTransport');
    }


    return(
        //  <section>
        // <header>
        //     <h2>Residence</h2>
        //     <p>I live in a(n)</p> 
            <Box sx={{ minWidth: 120 }}>
                 <h2>I drive a(n):</h2>

                 <form onSubmit={getVehicle}>
                          <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vehicle}
          label="Vehicle"
          onChange={(evt)=> setVehicle(evt.target.value)}
        >
<MenuItem value={1}>Conventional Car</MenuItem>
            <MenuItem value={2}>Hybrid Car</MenuItem>
            <MenuItem value={3}>Plug-In Hybrid Car</MenuItem>
            <MenuItem value={4}>Electric Car</MenuItem>
           <MenuItem value={5}>Motorbike</MenuItem>
        <MenuItem value={6}>Bike</MenuItem>
                     <MenuItem value={7}>I don't own any vehicles</MenuItem>
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

export default Vehicles;