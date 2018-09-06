import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import { addPart, updatePartForm } from '../../store/actions'
import Paper from '../../ui/Paper'
import TextField from '../../ui/textField'
// import { withStyles } from '@material-ui/core'
// import styled from 'styled-components'
// import { Grid, Row, Col } from 'react-flexbox-grid'
// import TextField from '@material-ui/core/TextField'
// import Input from '../../ui/Input'
// import ProcessPicker from '../../components/processPicker'

// const process = ['CNC Mill', 'CNC Lathe']

class PartsEntry extends Component {
  // submit = () => {
  //   this.props.addPart(this.state)
  //   this.props.history.push('/dashboard')
  // }

  getFormikForm() {
    const initialValues = {
      partName: 'test name',
      partNumber: '04-100-101',
      partsPerRobot: 6,
      totalQuantity: 12,
      stock: '60601 T6',
      cutLg: '4in',
      status: 'inProgress',
      machinesNeeded: 'Lathe, Mill',
      stockOrdered: 'yes',
    }

    const onSubmit = (values, formikBag) => {
      console.log('Submit!')
      console.log('values:', values)
      console.log('formikBag:', formikBag)
    }

    const getForm = () => {
      return (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({
            values,
            handleChange,
            handleSubmit,
            // errors,
            // touched,
            // handleBlur,
            // isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="partName"
                label="Part Name"
                value={values.partName}
                onChange={handleChange}
              />

              <TextField
                name="partNumber"
                label="Part Number"
                value={values.partNumber}
                onChange={handleChange}
              />

              <TextField
                name="partsPerRobot"
                label="Parts Per Robot"
                value={values.partsPerRobot}
                onChange={handleChange}
                type="number"
              />

              <TextField
                name="totalQuantity"
                label="Total Quantity"
                value={values.totalQuantity}
                onChange={handleChange}
              />

              <TextField name="stock" label="Stock" value={values.stock} onChange={handleChange} />

              <TextField
                name="cutLg"
                label="Cut Length"
                value={values.cutLg}
                onChange={handleChange}
              />

              <TextField
                name="status"
                label="Status"
                value={values.status}
                onChange={handleChange}
              />

              <TextField
                name="machinesNeeded"
                label="Machines Needed"
                value={values.machinesNeeded}
                onChange={handleChange}
              />

              <TextField
                name="stockOrdered"
                label="Stock Ordered?"
                value={values.stockOrdered}
                onChange={handleChange}
              />

              <button type="submit"> Submit </button>
            </form>
          )}
        />
      )
    }

    return <Paper style={{ width: '500px' }}>{getForm()}</Paper>
  }

  render() {
    return this.getFormikForm()
  }
}

const mapStateToProps = (state) => {
  return {
    partEdit: state.partEdit,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addPart, updatePartForm }, dispatch)
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PartsEntry),
)
