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
          initialValues={{ email: `adam${Math.random() * Math.floor(1000)}@gmail.com`, password: 'Grimmick15' }}
          onSubmit={({ email, password }, options) => {
            registerUser(email, password)
          }}
        >
          {({ values, handleSubmit, setFieldValue }) => (
            <form className="form-group" onSubmit={handleSubmit}>
              <Input
                placeholder="Email"
                name="email"
                initValue={values.email}
                onChange={setFieldValue}
                class="form-control"
              />
              <Input
                placeholder="Password"
                name="password"
                initValue={values.password}
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
