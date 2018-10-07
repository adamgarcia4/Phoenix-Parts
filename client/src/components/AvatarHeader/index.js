import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'
import Avatar from '../../ui/Avatar'
import PropTypes from 'prop-types'

class AvatarHeader extends React.Component {
  state = {
    anchorEl: null
  }

  buttonStyles = {
    display: 'inline'
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state

    // TODO: User is a Firebase implementation.  I can make it abstract then build Firebase adapter around it.
    const { user } = this.props

    const getAvatar = user => {
      const userDetails = {
        photoUrl: (user && user.photoURL) || '',
        displayName: (user && user.displayName) || ''
      }

      return <Avatar {...userDetails} />
    }

    return (
      <div className={this.buttonStyles.display}>
      
        <ButtonBase
          aria-owns={anchorEl ? 'simple-menu' : null}
          centerRipple={false}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {getAvatar(user)}
        </ButtonBase>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    )
  }
}

AvatarHeader.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
// export default connect(
//   mapStateToProps,
//   null
// )(SimpleMenu)

export default AvatarHeader
