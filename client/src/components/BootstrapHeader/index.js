import React, { Component } from 'react'

const TOGGLE_HANDLE = 'app-navbar'

{/* 



<div class="collapse navbar-collapse" id="navbarColor01">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
  </ul>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
*/}


class BootstrapHeader extends Component {

  getHeader() {

    const getBrand = () => {
      return <a class="navbar-brand" href="#">Expand at md</a>
    }

    const getHamburgerToggle = () => {
      return (
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target={`#${TOGGLE_HANDLE}`} aria-controls={TOGGLE_HANDLE} aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      )
    }

    const getItemLinks = () => {

      return (
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      )
    }

    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          {getBrand()}
          {getHamburgerToggle()}


          <div class="collapse navbar-collapse" id={TOGGLE_HANDLE}>
            {getItemLinks()}
            
            <form class="form-inline my-2 my-md-0">
              <input class="form-control" type="text" placeholder="Search" />>
            </form>
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