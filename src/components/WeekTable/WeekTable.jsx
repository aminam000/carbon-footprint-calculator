import Week from "../Week/Week";
import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './WeekTable.css'
//import WeekEdit from "../WeekEdit/WeekEdit";

function WeekTable(){
  const [weekitems, setweekitems] = useState([]);

  const [editItem, setEditItem] = useState(false);
  // first data grab
    useEffect(() => {
      fetch(`http://localhost:3000/values/`) // your url may look different
        .then(resp => resp.json())
      
        .then(data => {console.log(data,'in data') , setweekitems(data)}) // set data to state
    }, []);


    return (
   
        <table>
          <thead>
            <tr>
              <th>Residence</th>
              <th>Vehicle</th>
              <th>Work Transport</th>
              <th>Meal Habits</th>
              <th>Shopping</th>
              <th>Flights</th>
              
            </tr> 
          </thead>
          <tbody>
            {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
            {weekitems.map(week => <Week setEditItem={setEditItem} key={week.id} week={week} />) }

          </tbody>
        </table>
  )
};

export default WeekTable;