import React from 'react'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 10px 0px;
  flex-wrap: wrap;
`

const StyledTextField = styled(TextField)`
  width: 300px;
`

const TextFieldWrapper = props => {
  return (
    <Container>
      <StyledTextField
        name={props.name}
        label={props.label || 'label'}
        value={props.value}
        onChange={props.onChange}
        type={props.type || 'text'}
      />
    </Container>
  )
}

export default TextFieldWrapper
