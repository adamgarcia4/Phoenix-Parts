import React, { Component } from 'react'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'
import PropTypes from 'prop-types'
import Paper from '../Paper'
import ExpansionSummary from '../ExpansionSummary'
import { DownArrow } from '../Icons'

const ExpansionContainer = styled(Paper) `
  width: 600px;
  font-size: 15px;
  padding: 8px;
  position: relative;
`

class ExpansionPanel extends Component {
  state = {
    height: 0
  }

  toggle() {
    const { height } = this.state
    this.setState({
      height: height === 0 ? 'auto' : 0
    })
  }

  render() {
    const { height } = this.state
    const {summary, expansion } = this.props
    return (
      <ExpansionContainer onClick={() => { this.toggle() }}>
        <ExpansionSummary expandIcon={<DownArrow />}>
          {summary}
        </ExpansionSummary>
        <AnimateHeight
          duration={300}
          height={height}>
          {expansion}
        </AnimateHeight>
      </ExpansionContainer>
    )
  }
}

ExpansionPanel.propTypes = {
  summary: PropTypes.any,
  expansion: PropTypes.any,
}

export default ExpansionPanel