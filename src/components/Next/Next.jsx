import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Next(props) {
  const [next, setNext] = useState('');
    const dispatch = useDispatch();
    const history = useHistory(); 

    const nextCalc = () => {
        
  
      console.log('in next calc', next)
      dispatch({
          type: 'FETCH_DATA',
          payload: next
      })
      history.push('/residence');
  }

  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => nextCalc()}
    >
    Next
    </button>

  );
}

export default Next;