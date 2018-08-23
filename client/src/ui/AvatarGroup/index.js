import React, { Component } from 'react'
import styled from 'styled-components'

// TODO: Add onHover
// .avatarGroup:hover .avatar {
//   margin-left: 0px;
// }

const BaseAvatarGroup = styled.div`
  display: flex;
  justify-content: center;
`
class AvatarGroup extends Component {
  getAvatarGroup() {
    const avatars = this.props.children
    // return avatars

    return React.Children.map(avatars, (avatar, i) => {
      const isOverlap = i !== 0

      return React.cloneElement(avatar, { overlap: isOverlap, border: true })
    })
  }

  render() {
    return <BaseAvatarGroup>{this.getAvatarGroup()}</BaseAvatarGroup>
  }
}

export default AvatarGroup
