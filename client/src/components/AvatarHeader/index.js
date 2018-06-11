import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Avatar from '../Avatar'
class SimpleMenu extends React.Component {
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
    const { user } = this.props

    return (
      <div className={this.buttonStyles.display}>
        <ButtonBase
          aria-owns={anchorEl ? 'simple-menu' : null}
          centerRipple="false"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Avatar user={user} />
        </ButtonBase>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
