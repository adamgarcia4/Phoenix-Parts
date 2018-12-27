import React, { Component } from 'react'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'
import Avatar from '../Avatar'
import AvatarGroup from '../AvatarGroup'
// import './Style.css'
import Paper from '../Paper'
import { DownArrow } from '../Icons'

const ExpansionContainer = styled(Paper) `
  width: 600px;
  font-size: 15px;
  padding: 8px;
  position: relative;
`

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

  return (
    <div>
      {children}
      {/* {expandIcon} */}
      {expandIcon && React.isValidElement(expandIcon) && <ExpandIconWrapper>{expandIcon}</ExpandIconWrapper>}
    </div>
  )
}

const ExpansionContent = styled.div`
  flex-grow: ${props => props.flexGrow || 1};
  font-size: 15px;
  color: ${props => (props.secondary && `rgba(0,0,0,0.54)`) || null};
`

const Padding = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AvatarGroupWrapper = styled(AvatarGroup) `
  margin-right: 30px;
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
    const {height} = this.state
    return (
      <ExpansionContainer onClick={() => { this.toggle() }}>
        <ExpansionSummary expandIcon={<DownArrow />}>
          <Padding>
            <ExpansionContent>Bandsaw</ExpansionContent>
            <ExpansionContent
              flexGrow={5}
              secondary>
              Lorem Ipsum is
            </ExpansionContent>
            <ExpansionContent>
              <AvatarGroupWrapper overlap={-8}>
                <Avatar className="avatar" />
                <Avatar className="avatar" />
                <Avatar className="avatar" />
                <Avatar className="avatar" />
              </AvatarGroupWrapper>
            </ExpansionContent>
          </Padding>
        </ExpansionSummary>
        <AnimateHeight
          duration={300}
          height={height}>
          this is my content!!
        </AnimateHeight>
      </ExpansionContainer>
    )
  }
}

export default ExpansionPanel

// import React, { Component } from 'react'

// class componentName extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// export default componentName
