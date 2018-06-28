import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPart } from '../../store/actions'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const styles = {
  container: {
    // display: 'flex',
    // flexWrap: 'wrap'
  },
  textField: {
    width: 200,
    marginLeft: 20
  }
}
class Parts extends Component {
  constructor(props, context) {
    super(props)

    this.state = {
      partName: '',
      partNumber: ''
    }
    this.submit = this.submit.bind(this)
  }
  state = {}

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  submit = () => {
    this.props.addPart(this.state)
    this.props.history.push('/dashboard')
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="partName"
          label="Part Name"
          className={classes.textField}
          value={this.state.partName}
          onChange={this.handleChange('partName')}
          margin="dense"
        />
        <br />
        <TextField
          id="partNames"
          label="Part Number"
          className={classes.textField}
          value={this.state.partNumber}
          onChange={this.handleChange('partNumber')}
          margin="dense"
        />
        <br />
        <Button variant="raised" color="primary" onClick={this.submit}>
          Submit
        </Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addPart }, dispatch)
}

const styledParts = withStyles(styles)(Parts)

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(styledParts)
)
