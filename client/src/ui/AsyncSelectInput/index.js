import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SelectInput from '../SelectInput'

class AsyncSelectInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      options: []
    }
  }

  componentDidMount() {
    // ... that takes care of the subscription...
    const { asyncLoadOptions } = this.props

    asyncLoadOptions().then(data => {
      console.log('data async load:', data)
      this.setState({ options: data })
    })
  }

  render() {
    const {options} = this.state
    return (
      <SelectInput 
      {...this.props}
      options={options} />
    )
  }
}

AsyncSelectInput.propTypes = { 
  ...SelectInput.propTypes,
   asyncLoadOptions: PropTypes.func.isRequired
}

export default AsyncSelectInput