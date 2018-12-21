import React, { Component } from 'react'
import { Formik } from 'formik'
import { Form } from 'react-bootstrap'
import Paper from '../../ui/Paper'
import DropdownItem from '../../ui/DropdownItem'

import materialModel from '../../models/materials'
import firebase from '../../modules/firebase'
// import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretSquareDown } from '@fortawesome/fontawesome-free-solid'

// import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'

let fbRef = null

class MaterialEntry extends Component {

  componentWillMount() {
    fbRef = materialModel.listenAllMaterials(data => {
      this.setState((state, props) => { //eslint-disable-line
        return {
          materials: data
        }
      })
    })
  }

  componentWillUnmount() {
    firebase.rebase.removeBinding(fbRef)
  }

  getFormikForm() {
    // const { history } = this.props

    const onSubmit = (values, formikBag) => { //eslint-disable-line
      // console.log('Submit!')

      // console.log('values:', values)
      materialModel.addMaterial(values).then(data => { //eslint-disable-line
        // console.log('added material')
        // console.log('data:', data)
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

    return <Paper>{getForm()}</Paper>
  }

  getMaterialsDisplay() {
    return <DropdownItem />
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm">{this.getFormikForm()}</div>
        <div className="col-sm">{this.getMaterialsDisplay()}</div>
      </div>
    )
  }
}

export default MaterialEntry
