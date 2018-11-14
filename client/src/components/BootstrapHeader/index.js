import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import HeaderNavLink from '../HeaderNavLink'
import styled from 'styled-components'

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
      return (
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search" />
        </form>
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

          <div className="collapse navbar-collapse" id={TOGGLE_HANDLE}>
            {getItemLinks()}

            {/* {getRightForm()} */}
          </div>
        </HeaderStyle>
        <div className="container-fluid">{this.props.children}</div>
      </div>
    )
  }

  render() {
    return this.getHeader()
  }
}

export default BootstrapHeader
