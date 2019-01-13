/** @jsx jsx */
import { useReducer} from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import utils from './utils'
import Button from '../../ui/Button'
import Input, { useFormInput } from '../../ui/Input'
import Paper from '../../ui/Paper'
import fireHooks from '../../hooks/firebase'

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
padding: 5px;
text-align: center;
`

const InputContainer = styled.div`
flex: 1;
padding: 5px;
display: flex;
align-items: center;
`

const InputLabel = styled.span`
flex: 1;
text-align: center;
justify-content: left;
flex-basis: 35px;
`

const InputField = styled(Input) `
flex: 4;
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

const OrderPage = () => {
  const [state, dispatch] = useReducer(orderReducer, [newItem(0)])
  const [val, setVal] = fireHooks.syncSetWithFirebase('testing')

  console.log('val:', val)

  return (
    <FlexParent>
      <Paper
        css={css`
          flex: 2;
      `}>
        <OrderList
          list={state}
          dispatch={dispatch} />
      </Paper>
      <Paper
        css={css`
          flex: 1;
        `}>
        <AddOrder
          onclick={item => {
            dispatch({ type: 'add', payload: item })
          }}
        />
      </Paper>
      <button onClick={() => {
        const rand = Math.round(Math.random()*10000)
        setVal({hi: 'bye'})
      }}>
        Test
      </button>
    </FlexParent >
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
      totalPrice: total.value,
      ordered: ordered.value,
      link: link.value
    })
    event.preventDefault()
  }

  return (
    <FlexForm onSubmit={submitForm}>
      <OrderTitle>New Order</OrderTitle>
      <InputContainer>
        <InputLabel>Item</InputLabel>
        <InputField
          name="item"
          {...item}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Quantity</InputLabel>
        <InputField
          name="quantity"
          {...quantity}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Price</InputLabel>
        <InputField
          name="price"
          {...price} />
      </InputContainer>
      <InputContainer>
        <InputLabel>Total</InputLabel>
        <InputField
          name="total"
          {...total} />
      </InputContainer>
      <InputContainer>
        <InputLabel>Ordered</InputLabel>
        <InputField
          name="ordered"
          {...ordered} />
      </InputContainer>
      <InputContainer>
        <InputLabel>Link</InputLabel>
        <InputField
          name="link"
          {...link} />
      </InputContainer>
      <InputContainer>
        <Button btnType="submit">Submit Form</Button>
      </InputContainer>
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
