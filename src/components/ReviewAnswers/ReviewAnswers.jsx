import React from 'react';
import axios from 'axios';
import './ReviewAnswer.css'


import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';


//use reducers to display everything 

function ReviewAnswers (  ) {
    const history = useHistory();

    const residence = useSelector((store)=>{
        return store.residence
    })
    const vehicle = useSelector((store)=>{
        return store.vehicle
    })
    const worktrip = useSelector((store)=>{
        return store.worktrip
    })
    const distance = useSelector((store)=>{
        return store.distance
    })
    const othertrips = useSelector((store)=>{
        return store.othertrips
    })
    const meat = useSelector((store)=>{
        return store.meat
    })
    const takeout = useSelector((store)=>{
        return store.takeout
    
    })
    const shop = useSelector((store)=>{
        return store.shop
    })
    const flights = useSelector((store)=>{
        return store.flights
    })


    //create object

    let values = {
       residence,
       vehicle,
       worktrip,
       distance,
       othertrips,
       meat,
       takeout,
       shop,
       flights
}


const Total = (parseFloat(residence)+parseFloat(vehicle)+parseFloat(worktrip)+parseFloat(distance)+parseFloat(othertrips)+parseFloat(meat)+parseFloat(takeout)+parseFloat(shop)+parseFloat(flights))
console.log('the total carbon footprint is', Total);
    //onclick event to post data


    const getAnswers = () => {
     
      console.log('inside Review')
  
      history.push('/Total');
    }

//return (display)
return (
    <>
    <div>
        <h1>Review your submissions</h1>
        <h3>I live in a(n): {residence === 10 ? <p>apartment</p>
      :
     <></>
    } 
    {residence === 20 ?
       <p>House</p>
      :
     <></>
    } 
  </h3>
        <h3>I drive a(n): {vehicle === 7 ?
       <p>Conventional Car</p>
      :
     <></>
    }  {vehicle === 4 ?
      <p>Electric Car</p>
     :
    <></>
   }</h3>
        <h3>I live {distance} miles away from my job</h3>
        <h3>I am {meat === 20 ? <p>Plant Based</p>
      :
     <></>
    }</h3>
        <h3>I've eaten out {takeout === 30 ?
       <p>3-6 times</p>
      :
     <></>
    } times this week</h3>
        <h3>{shop === 3 ?
       <p>I shopped local and thrifty</p>
      :
     <></>
    }</h3>
        <h3>I travelled {flights} miles by plane</h3>
    </div>
    <button onClick={getAnswers}>Submit</button>
    {/* //<form>
        // onSubmit={onSubmit}>
     
           
    // </form> */}
    </>
)
}


export default ReviewAnswers;