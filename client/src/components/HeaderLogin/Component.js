import React, { Component } from 'react'

// import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'
// import HeaderNavLink from '../HeaderNavLink'
import './Style.css'
import { Formik } from 'formik'
import { Tooltip } from 'react-tippy'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import Avatar from '../../ui/Avatar'
import Paper from '../../ui/Paper'

// const TOGGLE_HANDLE = 'app-navbar'

class HeaderLogin extends Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
  }

  getLoginSection() {
    const { registerUser, user } = this.props

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
              <form
                className="form-group"
                onSubmit={handleSubmit}>
                <Input
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={setFieldValue} />
                <Input
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={setFieldValue}
                  type="password"
                />
                <Button
                  type="submit"
                  style="primary"
                  width>
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
    const { user } = this.props
    return (
      <div>
        <Tooltip
          html={this.getLoginSection()}
          interactive
          trigger='mouseenter focus click'>
          <Avatar
            className="avatar"
            user={user.profile}
          />
        </Tooltip>
        {/* {this.state.expanded ? this.getLoginSection() : null} */}
      </div>
    )
  }
}

export default HeaderLogin
