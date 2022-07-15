import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import Footers from './Footers';
const Login = (props) => {
  console.log('login component: ', props.formdata);
  let person = props.formdata;
  localStorage.setItem('person', JSON.stringify(person));
  return (
    <div>
      <div className='heading clip image'>The NewsBingo | Login</div>
      <div className='miniheading clip image'>Get news of your Interest</div>

      <div className='login-form'>
        <form action='/signIn' method='POST'>
          <span>
            <label for='email'>Email:</label>
          </span>
          <input type='email' id='email' name='email' />

          <span>
            <label for='password'>Password:</label>
          </span>
          <input type='password' id='password' name='password' />
          <Link to='/profile'>
            <input type='submit' value='Login' />
          </Link>
        </form>
      </div>
      <Footers />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    formdata: getFormValues('SimpleRegisterForm')(state),
  };
};
export default connect(mapStateToProps)(Login);
