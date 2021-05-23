import React from 'react';
import { useFormik, ErrorMessage } from 'formik'
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Minimum latter is 2')
    .max(70, 'Maximum latter is 70')
    .required('Required field')
})

export const MyForms = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema: SignupSchema,
  })

  

  return (
    <div>
      <h1> Sign Up </h1>
      <form onSubmit = { formik.handleSubmit }>
        <input 
          type = 'text' 
          name = 'email' 
          onChange = { formik.handleChange }
          value = { formik.values.email }
        />
        

        <input 
          type = 'password' 
          name = 'password' 
          onChange = { formik.handleChange }
          value = { formik.values.password }
        />

        <button type = 'submit'> Submit </button>
      </form>
      
    </div>
  )
}

