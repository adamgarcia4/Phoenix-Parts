import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import HeaderNavLink from '../HeaderNavLink'
const TOGGLE_HANDLE = 'app-navbar'

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
          <HeaderNavLink to='parts' title='Parts'/>
          <HeaderNavLink to='partsTest' title='Parts Table'/>
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