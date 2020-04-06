import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

  function InputForm() {
    return (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            jobType: '',
            acceptedTerms: false
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
              .oneOf([true], 'You must accept the terms and conditions.')
              .required('Required'),
            jobType: Yup.string()
              .oneOf(
                ['Engineer', 'Developer', 'Product', 'Other'],
                'Invalid Job Type'
              )
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
         {({errors, touched, values, handleChange, handleBlur}) => ( 
           
          <Form
            className="form">
            <div className="form__input-wrapper">
              <Field  
                className="form__input"
                label="First Name"
                name="firstName"
                type="text"
                autoComplete="new-password"
                required
              /> 
              <label 
                htmlFor="firstName"
                className="form__label">
                <span className="form__label__text">First Name</span>
              </label>
            </div>
            {errors.firstName && touched.firstName ? (
              <div className="form__error">{errors.firstName}</div>
            ) : (<div className="form__error"></div>)}
            <div className="form__input-wrapper">
              <Field
                className="form__input"
                label="Last Name"
                name="lastName"
                type="text"
                autoComplete="new-password"
                required
                />
              <label 
                htmlFor="lastName"
                className="form__label">
                <span className="form__label__text">Last Name</span>
              </label>
            </div>
            {errors.lastName && touched.lastName ? (
              <div className="form__error">{errors.lastName}</div>
            ) : (<div className="form__error"></div>)} 
            <div className="form__input-wrapper">
              <Field
                className="form__input"
                label="Email Address"
                name="email"
                type="text"
                required
                /> 
              <label 
                htmlFor="emial"
                className="form__label">
                <span className="form__label__text">Email</span>
              </label>
            </div>
              {errors.email && touched.email ? (
                <div className="form__error">{errors.email}</div>
              ) : (<div className="form__error"></div>)} 
              <Field
                as="select"
                className="form__select"
                label="Job Type" 
                name="jobType">
                <option value="">Select a job type</option>
                <option value="Engineer">Engineer</option>
                <option value="Developer">Developer</option>
                <option value="Product">Product Manager</option>
                <option value="Other">Other</option>
              </Field>
              {errors.jobType && touched.jobType ? (
                <div className="form__error">{errors.jobType}</div>
              ) : (<div className="form__error"></div>)} 
              <div className="form__checkbox-wrapper">
                <input 
                  className="form__checkbox"
                  name="acceptedTerms"
                  type="checkbox"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.acceptedTerms}/>
                  <span className="form__checkbox-style"></span>
                <p className="form__text">
                  I accept the terms and conditions
                </p>
              </div>
              {errors.acceptedTerms && touched.acceptedTerms ? (
                <div className="form__error">{errors.acceptedTerms}</div>
              ) : (<div className="form__error"></div>)} 
              <button 
                className="form__button"
                type="submit"
                >
                  Submit
              </button>
            </Form>
         )}
        </Formik>
    );
  };

export default InputForm;