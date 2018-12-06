import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import HeaderNavLink from '../HeaderNavLink'
import styled from 'styled-components'
import './Style.css'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { Formik } from 'formik'

const TOGGLE_HANDLE = 'app-navbar'

class BootstrapHeader extends Component {
  getHeader() {
    const getBrand = () => {
      return (
        <a className="navbar-brand" href="#">
          Phoenix Parts
        </a>
      )
    }

    const getHamburgerToggle = () => {
      return (
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target={`#${TOGGLE_HANDLE}`}
          aria-controls={TOGGLE_HANDLE}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      )
    }

    const getItemLinks = () => {
      return (
        <ul className="navbar-nav mr-auto">
          {/* <HeaderNavLink to="" title="Home" exact /> */}
          <HeaderNavLink to="dashboard" title="Dashboard" />
          <HeaderNavLink to="materialEntry" title="Add Material" />
          <HeaderNavLink to="parts" title="Parts" exact />
          <HeaderNavLink to="parts-dashboard" title="Parts Dashboard" />
        </ul>
      )
    }

    const getRightForm = () => {
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
              <form className="form-inline my-2 my-md-0" onSubmit={handleSubmit}>
                <Input placeholder="Email" name="email" initValue={values.email} onChange={setFieldValue} />
                <Input
                  placeholder="Password"
                  name="password"
                  initValue={values.password}
                  onChange={setFieldValue}
                  type="password"
                />
                <Button type="submit" style="primary">
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        )
      }

      return getSubmitForm()
    }

    const HeaderStyle = styled.nav`
      margin-bottom: 10px;
    `

    return (
      <div>
        <HeaderStyle className="navbar navbar-expand-md navbar-dark bg-dark">
          {getBrand()}
          {getHamburgerToggle()}

          <div className="collapse navbar-collapse" id={TOGGLE_HANDLE}>
            {getItemLinks()}

            {getRightForm()}
          </div>
        </HeaderStyle>
        <div className="container-fluid">{this.props.children}</div>
      </div>
    )
  }

  render() {
    // console.log('this.state:', this.state)
    // console.log('this.props:', this.props)
    return this.getHeader()
  }
}

export default BootstrapHeader
