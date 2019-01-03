import styled from 'styled-components'

const ExpansionContent = styled.div`
  flex-grow: ${props => props.flexGrow || 1};
  font-size: 15px;
  color: ${props => (props.secondary && `rgba(0,0,0,0.54)`) || null};
`

export default ExpansionContent
