import React, { useState, useReducer } from 'react'
import styled from '@emotion/styled'
import utils from './utils'

const { newItem } = utils

const orderReducer = (state, { type, payload }) => {
  switch (type) {
    case 'add':
      return [...state, payload]
    case 'checked':
      return state.map(orderItem => {
        const { item, isChecked } = orderItem
        if (item === payload) {
          return Object.assign({}, orderItem, { isChecked: !isChecked })
        }
        return orderItem
      })
    default:
      return state
  }
}

const OrderLayout = styled.div`
  display: flex;
`

const FlexChild = styled.div`
  flex: ${props => props.flex || 1};
`

const OrderPage = () => {
  const [state, dispatch] = useReducer(orderReducer, [newItem(0)])

  return (
    <OrderLayout>
      <FlexChild
        style={{ backgroundColor: 'red' }}
        flex={2}>
        <OrderList
          list={state}
          dispatch={dispatch} />
      </FlexChild>
      <FlexChild style={{ backgroundColor: 'blue' }}>
        <AddOrder
          onclick={item => {
            dispatch({ type: 'add', payload: item })
          }}
        />
      </FlexChild>
    </OrderLayout>
  )
}

const useFormInput = initialVal => {
  const [value, setValue] = useState(initialVal)

  return {
    value,
    onChange: evt => setValue(evt.target.value)
  }
}

function AddOrder({ onclick }) {
  const randomNum = Math.floor(Math.random() * 1000)

  const item = useFormInput(`item${randomNum}`)
  const quantity = useFormInput(`quantity${randomNum}`)
  const price = useFormInput(`price${randomNum}`)
  const total = useFormInput(`total${randomNum}`)
  const ordered = useFormInput(`ordered${randomNum}`)
  const link = useFormInput(`link${randomNum}`)

  const submitForm = event => {
    onclick({
      item: item.value,
      quantity: quantity.value,
      price: price.value,
      total: total.value,
      ordered: ordered.value,
      link: link.value
    })
    event.preventDefault()
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          name="item"
          {...item} />
        <input
          name="quantity"
          {...quantity} />
        <input
          name="price"
          {...price} />
        <input
          name="total"
          {...total} />
        <input
          name="ordered"
          {...ordered} />
        <input
          name="link"
          {...link} />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  )
}

function OrderList({ list, dispatch }) {
  return list.map(listItem => (
    <OrderRow
      {...listItem}
      changeChecked={item => dispatch({ type: 'checked', payload: item })} />
  ))
}

function OrderRow({ isChecked, item, quantity, price, totalPrice, ordered, link, changeChecked }) {
  const Row = styled.div`
    display: flex;
    width: 75%;
    margin: 0 auto;
  `
  const Item = styled.div`
    flex: ${({ flex }) => flex || 1};
    border: 1px solid black;
  `

  return (
    <Row>
      <Item>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => changeChecked(item)} />
      </Item>
      <Item flex={2}>{item}</Item>
      <Item flex={2}>{quantity}</Item>
      <Item flex={2}>{price}</Item>
      <Item flex={2}>{totalPrice}</Item>
      <Item flex={2}>{ordered}</Item>
      <Item flex={2}>{link}</Item>
    </Row>
  )
}

export default OrderPage
