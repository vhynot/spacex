import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
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
          <Form>
            <Field
              label="First Name"
              name="firstName"
              type="text"
            /> 
            <ErrorMessage name="firstName"/>
            <Field
              label="Last Name"
              name="lastName"
              type="text"
            /> 
            <ErrorMessage name="lastName"/>
            <Field
              label="Email Address"
              name="email"
              type="email"
            /> 
            <ErrorMessage name="email"/>
            <select label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </select>
            <ErrorMessage name="jobType"/>
            <input 
                name="acceptedTerms"
                type="checkbox"/>
                I accept the terms and conditions
            <ErrorMessage name="acceptedTerms"/>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
    );
  };

export default InputForm;