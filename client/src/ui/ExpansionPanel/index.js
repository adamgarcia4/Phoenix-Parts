import React from 'react'
import Avatar from '../Avatar'
import AvatarGroup from '../AvatarGroup'
import './Style.css'
import CircleText from '../CircleText'
import { DownArrow } from '../Icons'

const Accordion = props => { //eslint-disable-line
  return (
    <div className='header'>
      <CircleText
        width={40}
        className='process-number'>
        1
      </CircleText>
      <div className='machine-name'>Bandsaw</div>
      <AvatarGroup>
        <Avatar className='avatar' />
        <Avatar className='avatar' />
        <Avatar className='avatar' />
        <Avatar className='avatar' />
      </AvatarGroup>
      <DownArrow />
      {/* <i className='downarrow'/> */}
    </div>
  )
}

export default Accordion