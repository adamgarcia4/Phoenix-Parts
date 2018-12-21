import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

require('./Waves.css')

class Waves extends React.Component {
  constructor() {
    super()
    this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
  }

  componentWillReceiveProps({cursorPos}) {
    const {animate} = this.state
    const {cursorPos: cursorProps} = this.props
    // Prevent Component duplicates do ripple effect at the same time
    if (cursorPos.time !== cursorProps.time) {
      // If Has Animated, set state to "false" First
      if (animate) {
        this.setState({ animate: false }, () => {
          this.reppling(cursorPos)
        })
      }
      // else, Do Reppling
      else this.reppling(cursorPos)
    }
  }

  reppling(cursorPos) {
    // Get the element
    const $ripple = ReactDOM.findDOMNode(this) //eslint-disable-line
    const $button = $ripple.parentNode

    // const buttonStyle = window.getComputedStyle($button)
    const buttonPos = $button.getBoundingClientRect()

    const buttonWidth = $button.offsetWidth
    const buttonHeight = $button.offsetHeight

    // Make a Square Ripple
    const rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth)

    // Make Ripple Position to be center
    const centerize = rippleWidthShouldBe / 2

    this.setState({
      animate: true,
      width: rippleWidthShouldBe,
      height: rippleWidthShouldBe,
      top: cursorPos.top - buttonPos.top - centerize,
      left: cursorPos.left - buttonPos.left - centerize
    })
  }

  render() {
    const {outline, flat, dark} = this.props
    const {animate, top, left, width, height} = this.state
    return (
      <div
        className={
          `
          Ripple
          ${(outline || flat || dark ? 'Ripple-outline ' : '')}
          ${(animate ? 'is-reppling' : '')}
          `
        }
        style={{
          top: `${top}px`,
          left: `${left}px`,
          width: `${width}px`,
          height: `${height}px`
        }}
      />
    )
  }
}

Waves.propTypes = {
  outline: PropTypes.bool,
  flat: PropTypes.bool,
  animate: PropTypes.bool,
  cursorPos: PropTypes.object,
  // children: PropTypes.node,
  dark: PropTypes.any
}

export default Waves
export { Waves as MDBWaves }
