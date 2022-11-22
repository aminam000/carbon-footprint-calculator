import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreateCalculation from '../CreateCalculation/CreateCalculation';
import Next from '../Next/Next';

import Typography from '@mui/material/Typography';


function Calculate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const weeks = useSelector(store=>store.calcReducer)

    const currentWeek = (event) => {
    //   const week = event.target.getAttribute ('week');
    //   const calc = event.target.getAttribute('pounds of CO2');
    //   const choices =event.target.getAttribute('choice');

        dispatch({
          type: 'CURRENT_DATA',
          payload: {
        residence,vehicles,worktrip,distance,othertrips,meat,takeout,flights
          },
          
        });
        history.push('/')
console.log('calcReducer------>',weeks)
    }

    
    return(
        <>
        <h1>Welcome to Big Foot</h1>
        <p>Big Foot uses information about your daily living habits to calculate your carbon footprint. Keep track of your weekly carbon emissions and calculate your carbon footprint for the week by answering the questions below. </p>
        <Next className="btn" />
        
        {/* <CreateCalculation />
        <div> 
          {weeks && 
          weeks.map((item)=>{
            let push = item.weeks.week && item.week.calc
            console.log('This weeks info is:', item.weeks.week)
           
            return(
                <>
              
              <div key={item.id}>
        <h3 className= "title">{item.weeks.name}</h3>
        <img className= "search_img" src={push} />
        <Typography variant="h5" className= "genre">{item.weeks.genres}</Typography>
        
        <Typography align="center" className= "summary" dangerouslySetInnerHTML={{__html: item.weeks.summary}}>
          </Typography>
        

        <button 
                  name={item.weeks.week}
                  genres={item.weeks.calc}
                  summary={item.weeks.choice}
                  image={push}
                  className="btn btn-block" onClick={Currentwatch}
        > Calculate your results 
        </button>

                  </div>
                </>
             
            )
          })
          }

        </div> */}
        </>
    )
}
export default Calculate;