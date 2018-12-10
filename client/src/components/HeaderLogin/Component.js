import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import HeaderNavLink from '../HeaderNavLink'
import styled from 'styled-components'
import './Style.css'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { Formik } from 'formik'

const TOGGLE_HANDLE = 'app-navbar'

class HeaderLogin extends Component {
  getLoginSection() {
    const { registerUser } = this.props

    const getSubmitForm = () => {
      return (
        <Formik
          // validate={values => {
          //   console.log('values:', values)
          // }}
          initialValues={{ email: `adam${Math.random() * Math.floor(1000)}@gmail.com`, password: 'Grimmick15' }}
          onSubmit={({ email, password }, options) => {
            registerUser(email, password)
          }}
        >
          {({ values, handleSubmit, setFieldValue, handleChange }) => (
            <form className="form-group" onSubmit={handleSubmit}>
              <Input placeholder="Email" name="email" value={values.email} onChange={setFieldValue} />
              <Input
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={setFieldValue}
                type="password"
              />
              <Button type="submit" style="primary" width={true}>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      )
    }

    return getSubmitForm()
  }

  render() {
    console.log('this.props:', this.props)
    return this.getLoginSection()
  }
}

export default HeaderLogin
