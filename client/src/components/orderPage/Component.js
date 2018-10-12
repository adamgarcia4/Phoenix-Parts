import React, { Component } from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'
const OrderForm = styled.div`
  width: 45%;
  background-color: red;
  height: 100vh;
  display: inline-block;
  margin-right: 40px;
`

const OrderList = styled.div`
  width: 45%;
  background-color: blue;
  height: 100vh;
  display: inline-block;
`

const getOrderForm = () => {
  const handleChange = () => {}

  const handleSubmit = () => {}

  return (
    
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Part Name </Form.Label>
        <Form.Control name="partName" placeholder="Enter Part Name" value={'hi'} onChange={handleChange} />
      </Form.Group>
    </Form>
  )
}

class OrderPage extends Component {
  render() {
    return (
      <div>
        <OrderForm>{getOrderForm()}</OrderForm>
        <OrderList />
      </div>
    )
  }
}

export default OrderPage
