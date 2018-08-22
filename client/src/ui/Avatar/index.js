import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import deepOrange from '@material-ui/core/colors/deepOrange'
import deepPurple from '@material-ui/core/colors/deepPurple'
import cx from 'classnames'
import './Styles.css'

function LetterAvatars(props) {
  const { user, isImage = true, overlap } = props

  const getInitials = (first, last) => {
    return `${first.charAt(0)}${last.charAt(0)}`
  }

  const renderedComponent = user => {
    if (!user) user = {}
    if (user.imgUrl) {
      return <div>{/* <Avatar alt={getInitials(user.firstName, user.lastName)} src={user.imgUrl} /> */}</div>
    }

    if (user.auth && !user.imgUrl) {
      return (
        <div>
          <Avatar alt={getInitials(user.firstName, user.lastName)}>{getInitials(user.firstName, user.lastName)}</Avatar>
        </div>
      )
    }

    return <div>{/* <span className={'avatar'}>AE</span> */}</div>
  }

  const getAvatar = isImage => {
    if (isImage) {
      return (
        <div className={'avatar'}>
          <img src="https://media.licdn.com/dms/image/C5103AQHoTTrJ1xgdvA/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=KUOCOe6XZd31WwgpmLMrccWmgYMiFT8PNi0RQPftpIs" />
        </div>
      )
    } else {
      return <div className={cx('avatar')}>AG</div>
    }
  }

  return getAvatar(isImage)
}

export default LetterAvatars
