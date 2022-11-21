// import { useState, useEffect } from 'react';
// import {useDispatch} from 'react-redux';
// import {useSelector} from 'react-redux';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// function CreateCalculation() {

//     const [calcData, setCalcData] = useState('')
//     const dispatch = useDispatch();
//     const handleChange = (event) => {
//       setCalcData(event.target.value);
//     };
//     // const searchMovies = useSelector((store)=> store.searchReducer);

//     const onHandler = (event) => {
//         event.preventDefault();
//         dispatch({
//             type: "FETCH_DATA", 
//             payload: calcData

//         })
//         console.log('calculating data ' + calcData);
//         setCalcData('');
//     };

    

//     return (
//         // <div className="props.classname">
//         //     <form className="CreateCalc_button">
//         //     <TextField size='small' label='Title' variant='outlined' color='secondary' type="text" placeholder="Search Show" 
//         //         value={calcData} onChange={(event)=> setCalcData(event.target.value)}
//         //         />
//         //         <button className="btn btn-block" onClick={onHandler}>Calculate Footprint</button>
//         //     </form>
//         // </div>
//         <Box sx={{ minWidth: 120 }}>
//         <FormControl fullWidth>
//           <InputLabel id="VehicleId">Type of Car</InputLabel>
//           <Select
//             labelId="VehicleId"
//             id="Vehicle"
//             value={calcData}
//             label="vehicle"
//             onChange={handleChange}
//           >
//             <MenuItem value={1}>Conventional Car</MenuItem>
//             <MenuItem value={1}>Hybrid Car</MenuItem>
//             <MenuItem value={1}>Plug-In Hybrid Car</MenuItem>
//             <MenuItem value={1}>Electric Car</MenuItem>
//             <MenuItem value={1}>Motorbike</MenuItem>
//             <MenuItem value={1}>Bike</MenuItem>
//             <MenuItem value={1}>I don't own any vehicles</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//     )
// }
// export default CreateCalculation;



import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CreateCalculation(props) {
  const [start, setStart] = useState('');
    const dispatch = useDispatch();
    const history = useHistory(); 

    const startCalc = () => {
        
  
      console.log('in start calc', start)
      dispatch({
          type: 'FETCH_DATA',
          payload: start
      })
      history.push('/calculate');
  }

  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => startCalc()}
    >
    Calculate New Footprint
    </button>

  );
}

export default CreateCalculation;