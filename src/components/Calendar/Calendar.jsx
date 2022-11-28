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
    lbs: 4000
  },
  {
    name: "11/06-11/12",
    lbs: 1000,
  },
  {
    name: "11/13-11/19",
    lbs: 4000,
  },
  {
    name: "11/20-11/26",
    lbs: 37622,
  },
];
    
function Calendar() {


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
          <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
          <Line type="monotone" dataKey="lbs" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
          
        </LineChart>
      </ResponsiveContainer>
    </>
    );
  }
  
  export default Calendar;