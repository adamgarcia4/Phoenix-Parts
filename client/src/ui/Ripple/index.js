import React, { Component } from 'react'

import styled, { keyframes } from 'styled-components'

const rippleAnimation = keyframes`
  100% {
    transform: scale(2);
    opacity: 0;
  }
`

const RippleContainer = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
`

const RippleItem = styled.div`
  position: absolute;
  left: ${props => `${props.position.x}px`};
  top: ${props => `${props.position.y}px`};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
  transform: scale(0);
  opacity: 0.7;
  animation: ${rippleAnimation} 0.7s linear;
`

class Ripple extends Component {
  state = {
    ripples: []
  }

  createRipple = event => {
    console.log('event:', event)
    const { width, height, left, top } = this.rippleContainer.getBoundingClientRect()

    const size = Math.max(width, height)
    const position = {
      x: event.clientX - left - size / 2,
      y: event.clientY - top - size / 2
    }

    // TODO: Support holding mouse down
    this.setState(prevState => prevState.ripples.push({ size, position }))
  }

  render() {
    const { color, children, ...props } = this.props
    const { ripples } = this.state
    // console.log('ripples', ripples.length);

    return (
      <RippleContainer {...props} innerRef={el => (this.rippleContainer = el)} onMouseDown={this.createRipple}>
        {children}
        {ripples.map((r, index) => (
          <RippleItem
            key={index}
            {...r}
            color={color}
            onAnimationEnd={() => {
              // TODO: Cleanup ripples after complete
              // console.log('animationEnd');
              // this.setState(prevState => {
              //   const [removedItem, ...ripples] = prevState.ripples;
              //   return { ripples };
              // })
            }}
          />
        ))}
      </RippleContainer>
    )
  }
}

export default Ripple
