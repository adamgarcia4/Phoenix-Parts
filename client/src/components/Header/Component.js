import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
// import { Button } from 'react-bootstrap'

import { mailFolderListItems, otherMailFolderListItems } from './tileData'
// import AvatarHeader from '../AvatarHeader'
import firebase from '../../modules/firebase'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'scroll',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  avatar: {
    marginLeft: '100px'
  }
})

class MiniDrawer extends React.Component {
  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  logout = () => {
    firebase.auth.doSignOut().then(data => {
      console.log('logout')
      console.log('data:', data)
    })
  }

  render() {
    const { classes, theme, appName, user } = this.props

    const getAppBar = () => {
      const getToolbar = () => {
        const getToolbarToggle = () => {
          return (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          )
        }
        return (
          <div>
            <Toolbar disableGutters={!this.state.open}>
              {getToolbarToggle()}
              <Typography variant="title" color="inherit" noWrap style={{ flex: 1 }}>
                {appName}
              </Typography>
              {/* <Button bsStyle="primary" bsSize="small">
                Login
              </Button>
              <Button bsStyle="secondary" bsSize="small" onClick={this.logout}>
                Logout
              </Button> */}
              {/* <AvatarHeader user={user} style={{ marginRight: '50px' }} /> */}
            </Toolbar>
          </div>
        )
      }

      return (
        <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
          {getToolbar()}
        </AppBar>
      )
    }

    const getDrawer = () => {
      return (
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
      )
    }

    const getContent = () => {
      return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      )
    }

    return (
      <div className={classes.root}>
        {getAppBar()}

        {getDrawer()}

        {getContent()}
      </div>
    )
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(MiniDrawer)
