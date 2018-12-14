import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import HeaderNavLink from '../HeaderNavLink'
import styled from 'styled-components'
import './Style.css'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { Formik } from 'formik'
import Avatar from '../../ui/Avatar'
import Paper from '../../ui/Paper'
import HoverHOC from '../../hoc/HoverHOC'

const TOGGLE_HANDLE = 'app-navbar'

class HeaderLogin extends Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
  }

  getLoginSection() {
    const { registerUser, user } = this.props

    console.log('user:', user)
    const { profile } = user
    const getSubmitForm = () => {
      const getInitialValues = () => {
        return { email: `adam${Math.floor(Math.random() * 100000)}@gmail.com`, password: 'Grimmick15' }
      }

      return (
        <Paper className="submit-form-container">
          <Formik
            initialValues={getInitialValues()}
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
        </Paper>
      )
    }

    const getLoggedInMenu = () => {
      return <Paper className="submit-form-container">{`Hello ${profile.first_name} ${profile.last_name}`}</Paper>
    }

    return <div>{user.loggedIn ? getLoggedInMenu() : getSubmitForm()}</div>
  }

  render() {
    console.log('this.props333:', this.props)
    const { user } = this.props
    return (
      <div>
        <Avatar
          className="avatar"
          onClick={() => {
            this.setState((state, props) => {
              return {
                expanded: !state.expanded
              }
            })
          }}
          user={user.profile}
        />
        {this.state.expanded ? this.getLoginSection() : null}
      </div>
    )
  }
}

export default HeaderLogin
