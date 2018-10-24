import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class HeaderNavLink extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  // TODO: Currently works for hardcoded routes
  // anything dynamic may not work
  onPath() {
    const { history, exact } = this.props
    // console.log('this.props.history:', this.props.history)

    const comparisonTechniques = {
      exact: () => {
        return history.location.pathname === this.getToLink()
      },
      includes: () => {
        return history.location.pathname.includes(this.getToLink())
      }
    }

    const compareFn = exact ? comparisonTechniques['exact'] : comparisonTechniques['includes']

    if (compareFn()) {
      this.setState({ isActive: true })
    } else {
      this.setState({ isActive: false })
    }
  }

  componentDidMount() {
    this.onPath()
  }

  componentWillReceiveProps() {
    this.onPath()
  }

  getToLink() {
    const { to } = this.props
    return to.charAt(0) === '/' ? to : `/${to}`
  }

  render() {

    const { title } = this.props
    const isActiveString = this.state.isActive && 'active' || null

    return (
      <li className={`nav-item ${isActiveString}`}>
        <NavLink to={this.getToLink()} className="nav-link">{title}</NavLink>
      </li>
    )
  }
}

HeaderNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  exact: PropTypes.bool
}

export default withRouter(HeaderNavLink)