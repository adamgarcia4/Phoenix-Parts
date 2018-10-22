import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import HeaderNavLink from '../HeaderNavLink'
const TOGGLE_HANDLE = 'app-navbar'


{/* 



<div className="collapse navbar-collapse" id="navbarColor01">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Features</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Pricing</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">About</a>
    </li>
  </ul>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
*/}


class BootstrapHeader extends Component {

  getHeader() {

    const getBrand = () => {
      return <a className="navbar-brand" href="#">Expand at md</a>
    }

    const getHamburgerToggle = () => {
      return (
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={`#${TOGGLE_HANDLE}`} aria-controls={TOGGLE_HANDLE} aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      )
    }

    const getItemLinks = () => {

      

      return (
        <ul className="navbar-nav mr-auto">

          <HeaderNavLink to='' title='Home' exact/>
          <HeaderNavLink to='dashboard' title='Dashboard'/>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      )
    }

    const getRightForm = () => {

      return (
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search" />>
      </form>
      )
    }

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          {getBrand()}
          {getHamburgerToggle()}

          <div className="collapse navbar-collapse" id={TOGGLE_HANDLE}>
            {getItemLinks()}

            {getRightForm()}
          </div>
        </nav>
        {this.props.children}
      </div>

    )
  }

  render() {
    return this.getHeader()
  }
}



export default BootstrapHeader