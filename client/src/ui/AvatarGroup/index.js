import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './Style.css'

class AvatarGroup extends Component {
  getAvatarGroup() {
    const { children, overlap } = this.props

    return React.Children.map(children, (avatar, i) => {
      return <div style={{ marginLeft: i === 0 ? 0 : overlap }}>{avatar}</div>
    })
  }

  render() {
    return <div className="avatar-group">{this.getAvatarGroup()}</div>
  }
}

AvatarGroup.propTypes = {
  children: PropTypes.any,
  overlap: PropTypes.number
}

AvatarGroup.defaultProps = {
  overlap: 0
}

export default AvatarGroup
