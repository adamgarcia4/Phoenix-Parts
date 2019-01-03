import React from 'react'
import styled from 'styled-components'

const ExpansionSummary = ({ expandIcon, children }) => { //eslint-disable-line

  const ExpandIconWrapper = styled.div`
    position: absolute;
    top: 30px;
    right: 8px;
    transform: translateY(-50%) rotate(0deg);

    &:hover {
      transform: translateY(-50%) rotate(180deg);
    }
  `

  const Padding = styled.div`
padding: 0px 24px;
display: flex;
flex-direction: row;
align-items: center;
`

  return (
    <div>
      <Padding>
        {children}
      </Padding>
      {/* {expandIcon} */}
      {expandIcon && React.isValidElement(expandIcon) && <ExpandIconWrapper>{expandIcon}</ExpandIconWrapper>}
    </div>
  )
}

export default ExpansionSummary