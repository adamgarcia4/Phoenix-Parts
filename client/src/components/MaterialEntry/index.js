import React, { Component } from 'react'
import { Formik } from 'formik'
import Paper from '../../ui/Paper'
import TextField from '../../ui/textField'

import materialModel from '../../models/materials'
import { Form } from 'react-bootstrap'
import firebase from '../../modules/firebase'
// import { withStyles } from '@material-ui/core'
// import { Grid, Row, Col } from 'react-flexbox-grid'
// import TextField from '@material-ui/core/TextField'
// import Input from '../../ui/Input'
// import ProcessPicker from '../../components/processPicker'

class MaterialEntry extends Component {
  getFormikForm() {
    const { history } = this.props

    const onSubmit = (values, formikBag) => {
      console.log('Submit!')

      console.log('values:', values)
      materialModel.addMaterial(values).then(data => {
        console.log('added material')
        console.log('data:', data)
      })
    }

    const getForm = () => {
      return (
        <Formik
          // initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ values, handleChange, handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Material Name </Form.Label>
                  <Form.Control
                    name="materialName"
                    placeholder="Enter Material Name"
                    value={values.materialName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <button type="submit"> Submit </button>
              </Form>
            )
          }}
        />
      )
    }

    return <Paper style={{ width: '500px' }}>{getForm()}</Paper>
  }

  componentWillMount() {}

  render() {
    return this.getFormikForm()
  }
}

export default MaterialEntry
