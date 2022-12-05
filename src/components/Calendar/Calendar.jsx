import React from 'react';
import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CalendarItem from '../CalendarItem/CalendarItem';
import axios from 'axios';
import './Calendar.css';


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const total = useSelector((store)=>{
//   return store.total
// })
const data = [
  {
    name: '10/30-11/05',
    pounds: 105,
  },
  {
    name: "11/06-11/12",
    pounds: 100,
  },
  {
    name: "11/13-11/19",
    pounds: 104,
  },
  {
    name: "11/20-11/26",
    pounds: 80,
  },
];
    
function Calendar() {
  // const [week, setWeek] = useState('');
  const history = useHistory();
  const getCalendar = () => {
   
    console.log('inside CALENDAR')

    history.push('/Week');
  }

    return (
      <>
        <h2>  Weekly Carbon Footprint</h2>
        <ResponsiveContainer width="90%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
          <XAxis dataKey="name" tick={{fill:"#000000"}}/>
          <YAxis tick={{fill:"#000000"}} />
          <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
          <Line type="monotone" dataKey="pounds" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
          
        </LineChart>
      </ResponsiveContainer>
      <button onClick={getCalendar}>View Weekly Breakdown</button>
      {/* <button type='submit'>View Weekly Breakdown</button> */}
    </>
    );
  }
  
  export default Calendar;