import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import deepOrange from '@material-ui/core/colors/deepOrange'
import deepPurple from '@material-ui/core/colors/deepPurple'

const styles = {
  avatar: {
    margin: 10
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500]
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10
  }
}

function LetterAvatars(props) {
  const { classes, user } = props

  const getInitials = (first, last) => {
    return `${first.charAt(0)}${last.charAt(0)}`
  }

  const renderedComponent = user => {
    if (!user) user = {}
    if (user.imgUrl) {
      return (
        <div>
          <Avatar
            alt={getInitials(user.firstName, user.lastName)}
            src={user.imgUrl}
            className={classes.avatar}
          />
        </div>
      )
    }

    if (user.auth && !user.imgUrl) {
      return (
        <div>
          <Avatar
            alt={getInitials(user.firstName, user.lastName)}
            className={classes.avatar}
          >
            {getInitials(user.firstName, user.lastName)}
          </Avatar>
        </div>
      )
    }

    return (
      <div>
        <Avatar className={classes.purpleAvatar}>NA</Avatar>
      </div>
    )
  }

  return <div className={classes.row}>{renderedComponent(user)}</div>
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LetterAvatars)
