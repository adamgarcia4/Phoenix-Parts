import React, { Component, Fragment } from 'react'
import { Formik } from 'formik'
import Paper from '../../ui/Paper'
import TextField from '../../ui/textField'
import { Radio, RadioGroup, FormControlLabel, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core'
import partUtils from '../../utils/partUtils'
import partsModel from '../../models/parts'
import { Form } from 'react-bootstrap'
import firebase from '../../modules/firebase'

import TestStepper from '../TestStepper'
import cx from 'classnames'
import Well from '../../ui/Well'
import Card from '../../ui/Card'
import './Style.css'

class PartsEntry extends Component {
  state = {
    selected: null
  }

  getFormikForm() {
    const initialValues = partUtils.randomPart()
    const { history } = this.props

    const onSubmit = (values, formikBag) => {
      console.log('Submit!')

      console.log('values:', values)

      partsModel.addPart(values).then(data => {
        console.log('added part', data)
      })
    }

    const getForm = () => {
      return (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ values, handleChange, handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Type </Form.Label>
                  <Form.Control as="select" name="type" value={values.type} onChange={handleChange}>
                    <option>part</option>
                    <option>assembly</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Part Name </Form.Label>
                  <Form.Control
                    name="partName"
                    placeholder="Enter Part Name"
                    value={values.partName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Part Number </Form.Label>
                  <Form.Control
                    name="partNumber"
                    placeholder="Enter Part Number"
                    value={values.partNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Parts Per Robot </Form.Label>
                  <Form.Control
                    type="number"
                    name="partsPerRobot"
                    placeholder="Enter Parts per robot"
                    value={values.partsPerRobot}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Total Quantity </Form.Label>
                  <Form.Control
                    type="number"
                    name="totalQuantity"
                    placeholder="Enter Total Quantity"
                    value={values.totalQuantity}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Stock Type </Form.Label>
                  <Form.Control
                    name="stock"
                    placeholder="Enter Stock Type"
                    value={values.stock}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Cut Length </Form.Label>
                  <Form.Control
                    name="cutLg"
                    placeholder="Enter Length to Cut Raw stock to"
                    value={values.cutLg}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label> Status </Form.Label>
                  <Form.Control
                    name="status"
                    placeholder="Enter Status"
                    value={values.status}
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

    return (
      <div className="form-container">
        <Paper style={{ width: '500px', margin: '0 auto' }} className="form-form">
          {getForm()}
        </Paper>
      </div>
    )
  }

  componentWillMount() {
    // partsRef.on('value', snapshot => {
    //   console.log('snapshot!', snapshot.val())
    // })
    // const allParts = this.props.getParts()
  }

  getStepContent() {
    return [
      {
        label: 'Select campaign settings',
        content: () => {
          return `Select campaign settings...1`
        }
      },
      {
        label: 'Create an ad group',
        content: () => 'What is an ad group anyways?2'
      },
      {
        label: 'Create an ad',
        content: () => 'This is the bit I really care about!3'
      }
    ]
  }

  render() {
    return (
      <Fragment>
        <Well>
          <div className="mode-container">
            <Paper
              className={cx('mode-selection', this.state.selected === 'part' && 'selected')}
              onClick={() => {
                this.setState({ selected: 'part' })
              }}
            >
              <h1>Part</h1>
              <i className="fas fa-cog fa-7x" />
            </Paper>
            <Paper
              className={cx('mode-selection', this.state.selected === 'assembly' && 'selected')}
              onClick={() => {
                this.setState({ selected: 'assembly' })
              }}
            >
              <h1>Assembly</h1>
              <i className="fas fa-cogs fa-7x" />
            </Paper>
          </div>

          {/* <TestStepper steps={this.getStepContent()} /> */}

          {this.getFormikForm()}
        </Well>
      </Fragment>
    )
  }
}

export default PartsEntry
