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

  componentDidMount() {
    this.onPath()
  }

  componentWillReceiveProps() {
    this.onPath()
  }

  // TODO: Currently works for hardcoded routes
  // anything dynamic may not work
  onPath() {
    const { history, exact } = this.props

    const comparisonTechniques = {
      exact: () => {
        return history.location.pathname === this.getToLink()
      },
      includes: () => {
        return history.location.pathname.includes(this.getToLink())
      }
    }

    const compareFn = exact ? comparisonTechniques.exact : comparisonTechniques.includes

    if (compareFn()) {
      this.setState({ isActive: true })
    } else {
      this.setState({ isActive: false })
    }
  }

  getToLink() {
    const { to } = this.props
    return to.charAt(0) === '/' ? to : `/${to}`
  }

  render() {
    const { title } = this.props
    const { isActive } = this.state
    const isActiveString = (isActive && 'active') || null

    return (
      <li className={`nav-item ${isActiveString}`}>
        <NavLink
          to={this.getToLink()}
          className="nav-link">
          {title}
        </NavLink>
      </li>
    )
  }
}

HeaderNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  history: PropTypes.object
}

export default withRouter(HeaderNavLink)
