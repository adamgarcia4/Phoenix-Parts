/** @jsx jsx */
import { useReducer } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import utils from './utils'
import Button from '../../ui/Button'
import Input, { useFormInput } from '../../ui/Input'
import Paper from '../../ui/Paper'

const { newItem } = utils

const OrderTitle = styled.h2`
margin: 0 auto;
`

const FlexForm = styled.form`
display: flex;
flex-basis: 400px;
margin: 0 auto;
flex-direction: column;
`

const Row = styled.div`
display: flex;
width: 75%;
margin: 0 auto;
`
const Item = styled.div`
flex: ${({ flex }) => flex || 1};
border: 1px solid rgb(173, 163, 152);
`

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

const FlexParent = styled.div`
  display: flex;
`

const FlexChild = styled.div`
  flex: ${({ flex }) => flex || 1};
  padding: ${({ padding }) => {
    if (!padding) return null

    if (padding.length === 1) {
      return `${padding[0]}px`
    }
    console.log('some padding wrong')
    return null
  }};
`

const OrderFlex = styled(FlexChild) `
  display: flex;
`

const OrderPage = () => {
  const [state, dispatch] = useReducer(orderReducer, [newItem(0)])

  return (
    <FlexParent>
      <FlexChild
        css={css`
          /* background-color: red; */
        `}
        flex={2}>
        <OrderList
          list={state}
          dispatch={dispatch} />
      </FlexChild>
      <OrderFlex >
      {/* <OrderFlex style={{ backgroundColor: 'blue' }}> */}
        <AddOrder
          onclick={item => {
            dispatch({ type: 'add', payload: item })
          }}
        />
      </OrderFlex>
    </FlexParent>
  )
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
    <FlexForm onSubmit={submitForm}>
    <OrderTitle>New Order</OrderTitle>
      <FlexChild
        padding={[5]}>
        <Input
          name="item"
          {...item} />
      </FlexChild>
      <FlexChild padding={[5]}>
        <Input
          name="quantity"
          {...quantity} />
      </FlexChild>
      <FlexChild padding={[5]}>
        <Input
          name="price"
          {...price} />
      </FlexChild>
      <FlexChild padding={[5]}>
        <Input
          name="total"
          {...total} />
      </FlexChild>
      <FlexChild padding={[5]}>
        <Input
          name="ordered"
          {...ordered} />
      </FlexChild>
      <FlexChild padding={[5]}>
        <Input
          name="link"
          {...link} />
      </FlexChild>
      <FlexChild padding={[5]}>
        <Button btnType="submit">Submit Form</Button>
      </FlexChild>
    </FlexForm>
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
