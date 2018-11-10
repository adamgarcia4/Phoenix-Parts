import React, { Component } from 'react'
import { Formik } from 'formik'
import Paper from '../../ui/Paper'
import TextField from '../../ui/textField'
import DropdownItem from '../../ui/DropdownItem'

import materialModel from '../../models/materials'
import { Form } from 'react-bootstrap'
import firebase from '../../modules/firebase'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown } from '@fortawesome/fontawesome-free-solid'

import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'

let fbRef = null

class MaterialEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      materials: []
    }
  }

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

    return <Paper>{getForm()}</Paper>
  }

  getMaterialsDisplay() {
    const MachineItem = styled.div`
      height: 50px;
      background-color: gray;
      padding: 12px 10px 5px 15px;
      border-radius: 7px;
    `

    return <DropdownItem />
  }

  componentWillMount() {
    fbRef = materialModel.listenAllMaterials(data => {
      this.setState((state, props) => {
        return {
          materials: data
        }
      })
    })
  }

  componentWillUnmount() {
    firebase.rebase.removeBinding(fbRef)
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
