import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPart, updatePartForm } from '../../store/actions'
import { withStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { FormControl, Button, TextField, Grid } from '@material-ui/core'
import ProcessPicker from '../../components/processPicker'

import { Form, Field } from 'react-final-form'

const styles = {
  container: {},
  textField: {
    // marginLeft: 10,
    // marginRight: 10
  }
}

const process = ['CNC Mill', 'CNC Lathe']

class PartsEntry extends Component {
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
    this.props.updatePartForm(name, event.target.value)
    this.setState({ [name]: event.target.value })
  }

  submit = () => {
    this.props.addPart(this.state)
    this.props.history.push('/dashboard')
  }

  render() {
    const { classes, state } = this.props

    return (
      <Grid container spacing={16}>
        <Grid item xs={6}>
          {/* <form className={classes.container} noValidate autoComplete="off"> */}
          <FormControl fullWidth={true} style={{ margin: '10 10' }}>
            <TextField
              id="partName"
              label="Part Name"
              className={classes.textField}
              value={this.state.partName}
              onChange={this.handleChange('partName')}
              fullWidth={true}
            />
            <br />
            <TextField
              id="partNames"
              label="Part Number"
              className={classes.textField}
              value={this.state.partNumber}
              onChange={this.handleChange('partNumber')}
            />
            <br />
            <Button variant="raised" color="primary" onClick={this.submit}>
              Submit
            </Button>
            {JSON.stringify(this.state)}
          </FormControl>
          {/* </form> */}
        </Grid>
        <Grid item xs={6}>
          <ProcessPicker />
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    partEdit: state.partEdit
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addPart, updatePartForm }, dispatch)
}

const styledParts = withStyles(styles)(PartsEntry)

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(styledParts)
)
