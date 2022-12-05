// Customer.js
import { useEffect } from 'react';
import React from 'react'
import { useHistory } from 'react-router-dom';
//deconstructed props
function Week({week, setEditItem}) {

const history = useHistory();



const removeData = () => {
    fetch(`http://localhost:3000/values/delete/${week.id}`, { method: 'DELETE' }) // your url may look different
    .then(resp => resp.json())
}
const editAnswers = () => {
  // removeData();

      console.log('inside week')
  
      history.push('/Residence');
    }
    useEffect(() => {
      removeData()
    }, [])

  return (
        // <tr key={week}>
        <tr>
        
             <td>{week.Residence}</td>
            <td>{week.Vehicle}</td>
            <td>{week.Flight}</td>
            <td>{week.WorkTransport}</td>
            <td>{week.Meals}</td>
            <td>{week.Shopping}</td>
            <td>{week.Flights}</td>
            <td><button onClick= {removeData}>Delete</button></td>
            <td><button onClick={editAnswers}>Edit</button></td>

        </tr>

  )
}
export default Week;