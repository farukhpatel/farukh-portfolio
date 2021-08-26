import axios from 'axios'
import React, { useEffect } from 'react'
import API from '../utility/ApiConstant'
import { useFormik } from 'formik'
import { mapValues } from 'async'
const FormikC = () => {
  const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less'
    }

    if (!values.lastName) {
      errors.lastName = 'Required'
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less'
    }
    return errors
  }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <>
      <h1>Learning formik </h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">FirstName</label>
        <input type="text" name="firstName" onChange={formik.handleChange} />
        {formik.errors.firstName ? (
          <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
        ) : null}
        <br />
        <label htmlFor="">FirstName</label>
        <input type="text" name="lastName" onChange={formik.handleChange} />
        {formik.errors.lastName ? (
          <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default FormikC
