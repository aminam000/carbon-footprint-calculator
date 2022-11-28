import React from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';


//use reducers to display everything 

function Total() {
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
console.log('the total carbon footprint after review is', Total);
    //onclick event to post data



    const onSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/values',
            data: values
       
        })
        .then((response)=> {
            console.log('success in post total', response)
        })
        .catch((error)=> {
            console.log('err in post total', error)
        })
        history.push('/home')
    }

//return (display)
return (
    <>
    <div>
 
        <h3>Your total carbon footprint is {Total} pounds of CO2</h3>
 
    </div>
    <form
        onSubmit={onSubmit}>
            <button>Submit</button>
    </form>
    </>
)
}


export default Total;