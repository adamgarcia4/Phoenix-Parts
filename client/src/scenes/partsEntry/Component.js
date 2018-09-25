import React, { Component } from 'react'
import { Formik } from 'formik'
import Paper from '../../ui/Paper'
import TextField from '../../ui/textField'
import partUtils from '../../utils/partUtils'

import partModel from '../../models/parts'

import firebase from '../../modules/firebase'
// import { withStyles } from '@material-ui/core'
// import styled from 'styled-components'
// import { Grid, Row, Col } from 'react-flexbox-grid'
// import TextField from '@material-ui/core/TextField'
// import Input from '../../ui/Input'
// import ProcessPicker from '../../components/processPicker'

class PartsEntry extends Component {
  getRandomForm() {}

  getFormikForm() {
    const initialValues = partUtils.randomPart()
    const {history} = this.props
    

    const onSubmit = (values, formikBag) => {
      console.log('Submit!')

      // TODO: Either move to centralized file or filter values through a validator
      firebase.rebase.push('parts',{
        data: values,
        then: (err) => {
          if(err) {
            console.log('error in saving', err)
            return
          }
          history.push('/dashboard')
        }
      })


    }

    const getForm = () => {
      return (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({
            values,
            handleChange,
            handleSubmit
            // errors,
            // touched,
            // handleBlur,
            // isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField name="partName" label="Part Name" value={values.partName} onChange={handleChange} />

              <TextField name="partNumber" label="Part Number" value={values.partNumber} onChange={handleChange} />

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

              <TextField name="cutLg" label="Cut Length" value={values.cutLg} onChange={handleChange} />

              <TextField name="status" label="Status" value={values.status} onChange={handleChange} />

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

  componentWillMount() {
    // partsRef.on('value', snapshot => {
    //   console.log('snapshot!', snapshot.val())
    // })
    // const allParts = this.props.getParts()
  }

  render() {
    console.log('this.props:', this.props)
    return this.getFormikForm()
  }
}

export default PartsEntry
