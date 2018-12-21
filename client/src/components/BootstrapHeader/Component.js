import React, { Component } from 'react'

// import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import HeaderNavLink from '../HeaderNavLink'
import './Style.css'
// import Button from '../../ui/Button'
// import Input from '../../ui/Input'
import HeaderLogin from '../HeaderLogin'

// import { Formik } from 'formik'

const TOGGLE_HANDLE = 'app-navbar'

class BootstrapHeader extends Component {
  getHeader() {
    const {children} = this.props

    const getBrand = () => {
      return (
        <a
          className="navbar-brand"
          href="#test">
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
          <HeaderNavLink
            to="dashboard"
            title="Dashboard" />
          <HeaderNavLink
            to="materialEntry"
            title="Add Material" />
          <HeaderNavLink
            to="parts"
            title="Parts"
            exact />
          <HeaderNavLink
            to="parts-dashboard"
            title="Parts Dashboard" />
        </ul>
      )
    }

    const HeaderStyle = styled.nav`
      margin-bottom: 10px;
    `

    return (
      <div>
        <HeaderStyle className="navbar navbar-expand-md navbar-dark bg-dark">
          {getBrand()}
          {getHamburgerToggle()}

          <div
            className="collapse navbar-collapse"
            id={TOGGLE_HANDLE}>
            {getItemLinks()}
            <HeaderLogin />
          </div>
        </HeaderStyle>
        <div className="container-fluid">{children}</div>
      </div>
    )
  }

  render() {
    return this.getHeader()
  }
}

BootstrapHeader.propTypes = {
  children: PropTypes.array
}

BootstrapHeader.defaultProps = {
  children: null
}


export default BootstrapHeader
