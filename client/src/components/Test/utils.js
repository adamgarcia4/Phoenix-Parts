const newItem = counter => {
  return {
    isChecked: true,
    item: `item${counter}`,
    quantity: `quantity${counter}`,
    price: `price${counter}`,
    totalPrice: `total${counter}`,
    ordered: `ordered${counter}`,
    link: `link${counter}`
  }
}

export default {newItem}