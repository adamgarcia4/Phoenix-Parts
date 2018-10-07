import React from 'react'
import styled from 'styled-components'
import Ripple from '../Ripple'

const FabBase = styled.button`
  /* Button Styling */
  width: 56px;
  height: 56px;
  background-color: #3f51b5;
  padding: 0;
  color: white;
  border-style: none;
  border-radius: 50%;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);

  /* Position in Bottom Right */
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 1000;
`

const Fab = () => {
  return (
    <Ripple>
      <FabBase />
    </Ripple>
  )
}

export default Fab
