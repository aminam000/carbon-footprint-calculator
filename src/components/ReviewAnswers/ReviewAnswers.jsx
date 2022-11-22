import React from 'react';
import axios from 'axios';

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


    //onclick event to post data

    const onSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/values',
            data: values
       
        })
        .then((response)=> {
            console.log('success in post values', response)
        })
        .catch((error)=> {
            console.log('err in post values', error)
        })
        history.push('/Submit')
    }

//return (display)
return (
    <>
    <div>
        <h1>Review your submissions</h1>
        <h3>I live in a(n): {residence}</h3>
        <h3>I drive a(n): {vehicle}</h3>
        <h3>I live {distance} miles away from my job</h3>
        <h3>I am {meat}</h3>
        <h3>I've eaten out {takeout} times this week</h3>
        <h3>{shop}</h3>
        <h3>I travelled {flights} miles by plane</h3>
    </div>
    <form
        onSubmit={onSubmit}>
            <button>Submit</button>
    </form>
    </>
)
}


export default ReviewAnswers;