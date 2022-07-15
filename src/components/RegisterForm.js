import React from 'react';
import { Link } from 'react-router-dom';
import Footers2 from './Footers2';

import { reduxForm, Field } from 'redux-form';

const required = (v) => {
  if (!v || v === '') {
    return 'This field is required';
  }
  return undefined;
};

const RegisterForm = ({ handleSubmit, valid }) => {
  return (
    <div>
      {/* forms now */}
      <div className='register-form'>
        <form onSubmit={handleSubmit}>
          <span>
            <label for='name'>Name:</label>
          </span>
          <Field
            type='text'
            component='input'
            id='name'
            name='name'
            validate={required}
          />

          <span>
            <label for='age'>Age:</label>
          </span>
          <Field
            type='number'
            component='input'
            id='age'
            name='age'
            validate={required}
          />

          <span>
            <label for='email'>Email:</label>
          </span>
          <Field
            type='email'
            component='input'
            id='email'
            name='email'
            validate={required}
          />

          <span>
            <label for='profession'>Profession:</label>
          </span>
          <Field
            name='profession'
            component='select'
            id='profession'
            validate={required}
          >
            <option value='student'>Student</option>
            <option value='private'>Private job</option>
            <option value='government'>Government job</option>
            <option value='defence'>Defence job</option>
          </Field>

          <span>
            <label for='sex'>Sex:</label>
            <Field
              type='radio'
              component='input'
              id='sexchoice1'
              name='sex'
              value='male'
            />
            <label for='sexchoice1'>Male</label>

            <Field
              type='radio'
              component='input'
              id='sexchoice12'
              name='sex'
              value='female'
            />
            <label for='sexchoice2'>Female</label>
          </span>

          <span>
            <label for='subscription'>Subscription type:( atleast 2)</label>
            <br />
            <Field
              type='checkbox'
              name='Business'
              component='input'
              value='Business'
              id='subs1'
            />
            Business
            <br />
            <Field
              type='checkbox'
              name='Headlines'
              component='input'
              value='Headlines'
              id='subs2'
            />
            Headlines
            <br />
            <Field
              type='checkbox'
              name='Sports'
              component='input'
              value='Sports'
              id='subs3'
            />
            Sports
            <br />
            <Field
              type='checkbox'
              name='Technology'
              component='input'
              value='Technology'
              id='subs4'
            />
            Technology
            <br />
            <br />
          </span>
          <span>
            <label for='password'>Password:</label>
          </span>
          <Field
            type='password'
            component='input'
            id='password'
            name='password'
          />

          <span>
            <label for='confirm_password'>Confirm Password:</label>
          </span>
          <Field
            type='password'
            component='input'
            id='confirm_password'
            name='confirm_password'
          />

          <Link to='/login'>
            <button type='submit'>Register</button>
          </Link>
        </form>
      </div>

      {/* <Footers2 /> */}
    </div>
  );
};

export default reduxForm({
  form: 'SimpleRegisterForm',
  destroyOnUnmount: false,
})(RegisterForm);
