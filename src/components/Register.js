import React from 'react';
import { Link } from 'react-router-dom';
import Footers2 from './Footers2';
import { useState } from 'react';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div>
      <div className='heading clip image'>The NewsBingo | Register</div>
      <div className='miniheading clip image'>Get news of your Interest</div>

      {/* forms now */}
      <RegisterForm />

      <Footers2 />
    </div>
  );
};

export default Register;
