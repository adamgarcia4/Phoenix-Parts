import React, { Component } from 'react'
import './Styles.css'

class AvatarGroup extends Component {
  getAvatarGroup() {
    const avatars = this.props.children
    // return avatars

    return React.Children.map(avatars, (avatar, i) => {
      if (i === 0) return avatar

      return React.cloneElement(avatar, { overlap: true })
    })
  }

  render() {
    return <div className={'avatarGroup'}>{this.getAvatarGroup()}</div>
  }
}

export default AvatarGroup
