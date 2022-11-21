
import React from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';


function Calculation (  ) {
  const history = useHistory();

  const vehicle = useSelector((store)=>{
      return store.vehicle
  })
  const residence = useSelector((store)=>{
      return store.residence
  })
  const worktrip = useSelector((store)=>{
      return store.worktrip
  })
  const distance = useSelector((store)=>{
    return store.distance
})
const shop = useSelector((store)=>{
  return store.shop
})
const takeout = useSelector((store)=>{
  return store.takeout
})
const othertrips = useSelector((store)=>{
  return store.othertrips
})
  const flights = useSelector((store)=>{
      return store.flights
  })
  const meat = useSelector((store)=>{
    return store.meat
})


  //create object

  let calculation = {
      vehicle,
      residence,
      distance,
      worktrip,
      shop,
      takeout,
      othertrips,
      flights,
      meat,
  }


  //onclick event to post data

  const onSubmit = (event) => {
      event.preventDefault();

      axios({
          method: 'POST',
          url: '/calculate',
          data: calculation
     
      })
      .then((response)=> {
          console.log('success in post calculation', response)
      })
      .catch((error)=> {
          console.log('err in post calculation', error)
      })
      history.push('/Submit')
  }


  //return (display)
  return (
      <>
      <div>
          <h1>Review your Carbon Footprint</h1>
          {/* <h3>Feeling:{feeling}</h3>
          <h3>Understanding:{support}</h3>
          <h3>Support:{understanding}</h3>
          <h3>Comments:{comments}</h3> */}
      </div>
      <form
          onSubmit={onSubmit}>
              <button>Submit</button>
      </form>
      </>
  )
}


export default Calculation;