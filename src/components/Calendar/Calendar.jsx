import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import Typography from '@mui/material/Typography';


function Calculate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const weeks = useSelector(store=>store.insertReducer)

    const currentWeek = (event) => {
      const week = event.target.getAttribute ('week');
      const calc = event.target.getAttribute('pounds of CO2');
      const choices =event.target.getAttribute('choice');

        dispatch({
          type: 'CURRENT_DATA',
          payload: {
            name,genres,summary,image
          },
          
        });
        history.push('/CurrentData')
console.log('searchReducer------>',weeks)
    }

    
    return(
        <>
        <Search />
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

        </div>
        </>
    )
}
export default Calculate;