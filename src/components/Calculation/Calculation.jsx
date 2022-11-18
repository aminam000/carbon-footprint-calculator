import React from 'react';
import { useDispatch } from 'react-redux';

function CreateCalculation(props) {
  const dispatch = useDispatch();
  return (

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>


  )
};
export default CreateCalculation;