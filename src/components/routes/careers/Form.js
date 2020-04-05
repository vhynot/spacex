import React from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

  // And now we can use these
  function InputForm() {
    return (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            acceptedTerms: false, // added for our checkbox
            jobType: '', // added for our select
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string()
              .oneOf(
                ['Engineer', 'Developer', 'Product', 'Other'],
                'Invalid Job Type'
              )
              .required('Required'),
          })}
          onSubmit={() => {
            setTimeout(() => {
              console.log("done")
            }, 400);
          }}
        >
         {({errors, touched}) => ( 
          <Form
            className="form"
            autoComplete="nope">
            <div className="form__input-wrapper">
              <Field  
                className="form__input"
                label="First Name"
                name="firstName"
                type="text"
                autoComplete="nope"
              /> 
              <label 
                htmlFor="firstName"
                className="form__label">
                <span className="form__first-name">First Name</span>
              </label>
            </div>
            {touched.firstName && errors.firstName ? (
              <div className="form__error">{errors.firstName}</div>
            ) : <div className="form__error"></div>}
            <div className="form__input-wrapper">
              <Field
                className="form__input"
                label="Last Name"
                name="lastName"
                type="text"
                autoComplete="nope"
                />
              <label 
                htmlFor="lastName"
                className="form__label">
                <span className="form__last-name">Last Name</span>
              </label>
            </div>
            {touched.lastName && errors.lastName ? (
              <div className="form__error">{errors.lastName}</div>
            ) : <div className="form__error"></div>} 
            <div className="form__input-wrapper">
              <Field
                className="form__input"
                label="Email Address"
                name="email"
                type="email"
                /> 
              <label 
                htmlFor="emial"
                className="form__label">
                <span className="form__emial">Email</span>
              </label>
            </div>
              {touched.email && errors.email ? (
                <div className="form__error">{errors.email}</div>
              ) : <div className="form__error"></div>} 
              <select 
                className="form__select"
                label="Job Type" 
                name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="developer">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
              </select>
              {touched.jobType && errors.jobType ? (
                <div className="form__error">{errors.jobType}</div>
              ) : <div className="form__error"></div>} 
              <div className="form__checkbox-wrapper">
                <input 
                  className="form__checkbox"
                  name="acceptedTerms"
                  type="checkbox"/>
                <p className="form__text">
                  I accept the terms and conditions
                </p>
              </div>
              {touched.acceptedTerms && errors.acceptedTerms ? (
                <div className="form__error">{errors.acceptedTerms}</div>
              ) : <div className="form__error"></div>} 
              <button 
                className="form__button"
                type="submit">
                  Submit
              </button>
            </Form>
         )}
        </Formik>
    );
  };

export default InputForm;