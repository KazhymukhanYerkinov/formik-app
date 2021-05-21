import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { isPropertySignature } from 'typescript';


const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Өте аз').max(70, 'Өте көп').required('Міндетті Наме'),
  email: Yup.string().email('Invalid email').required('Міндетті Эмайл')
})


const addUser = async () => {
  await sleep(5000)
}

export const MyFormik = () => {
  const submit = async (value: { name: string, email: string }) => {
    try {
      await addUser();

      alert('Hiii');
    } catch (error) {
      alert(error)
    }
    
  }
  return (
    <div>
      <h1> Sign Up </h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={submit}

      >
        {({ isSubmitting }) => (
          <Form>
            <Field name='name' />
            <ErrorMessage name='name' />


            <Field name='email' type='email' />
            <ErrorMessage name='email' />


            <button type='submit' disabled = { isSubmitting }> Submit </button>
          </Form>
        )}


      </Formik>
    </div>
  )
}

export default MyFormik;