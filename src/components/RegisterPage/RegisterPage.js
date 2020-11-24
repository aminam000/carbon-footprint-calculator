import React from 'react';

import { useHistory } from "react-router-dom";
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

const RegisterPage = () => {

  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
          </button>
      </center>
    </div>
  );
}

export default RegisterPage;
