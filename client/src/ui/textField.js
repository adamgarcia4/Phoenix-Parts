import React from 'react'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  margin: 10px 0px;
  flex-wrap: wrap;
`

const StyledTextField = styled(TextField)`
  width: 300px;
`

const TextFieldWrapper = ({name, label, value, onChange, type}) => {
  return (
    <Container>
      <StyledTextField
        name={name}
        label={label || 'label'}
        value={value}
        onChange={onChange}
        type={type || 'text'}
      />
    </Container>
  )
}

TextFieldWrapper.propTypes = {
  name: PropTypes.any,
  label: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any,
  type: PropTypes.any,
}

export default TextFieldWrapper
