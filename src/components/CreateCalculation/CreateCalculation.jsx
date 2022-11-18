import React from 'react';
import { useDispatch } from 'react-redux';

function CreateCalculation(props) {
    const dispatch = useDispatch();
    const history = useHistory(); 

    const [info, setInfo] = useState('') 

    const fetchComments = (evt) => {
        evt.preventDefault();

        console.log('This is the stuff from the database', )

        // dispatch({
        //     type: 'CALCULATE',
        //     payload: 
        // })

        history.push('/calculate');
    }

  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'CALCULATE' })}
    >
    Calculate New Footprint
    </button>

  );
}

export default CreateCalculation;