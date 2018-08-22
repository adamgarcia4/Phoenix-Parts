import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPart, updatePartForm } from '../../store/actions'
import { withStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { FormControl, Button, Grid } from '@material-ui/core'
import TextField from '../../ui/textField'
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
      partName: 'test',
      partNumber: ''
    }
    this.submit = this.submit.bind(this)
  }

  handleChange = name => event => {
    this.props.updatePartForm(name, event.target.value)
    this.setState({ [name]: event.target.value })
  }

  submit = () => {
    this.props.addPart(this.state)
    this.props.history.push('/dashboard')
  }

  onSubmit = values => {
    console.log('hi', values)
  }

  getForm = () => {
    return (
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Form
            onSubmit={this.onSubmit}
            initialValues={this.initialState}
            render={({ handleSubmit, values }) => (
              <form>
                <Field
                  name="partName"
                  component={TextField}
                  type="text"
                  label="Part Name"
                />
                <Field
                  name="partNumber"
                  component={TextField}
                  type="text"
                  label="Part Number"
                />
                <br />
                <Button variant="raised" color="primary" onClick={handleSubmit}>
                  alskdf
                </Button>

                <pre>{JSON.stringify(values, null, 2)}</pre>
              </form>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <ProcessPicker />
        </Grid>
      </Grid>
    )
  }

  initialState = {
    partName: '',
    partNumber: ''
  }
  render() {
    const { classes, state } = this.props

    return this.getForm()
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
