import React, { Component } from 'react'

import Paper from '../../ui/Paper'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const getTitleBlock = () => {
  const TitleBlockContainer = styled.div`
    display: inline-block;
    float: left;
    height: 100%;
    width: 200px;
  `

  return (
    <TitleBlockContainer>
      <div>Sub Assembly Assembly#</div>
      <div>Drive Train</div>
    </TitleBlockContainer>
  )
}

const subAssemblyView = () => {
  const SubAssemblyContainer = styled(Paper)``

  return (
    <SubAssemblyContainer>
      <div>Sub Assembly Assembly#</div>
      <div>Drive Train</div>
    </SubAssemblyContainer>
  )
}

const getAssemblyView = () => {
  return (
    <Paper>
      <Grid fluid>
        <Row>
          <Col xs={3} style={{ backgroundColor: 'red' }}>
            {getTitleBlock()}
          </Col>
          <Col xs={9} style={{ backgroundColor: 'blue' }}>
            {subAssemblyView()}
          </Col>
        </Row>
      </Grid>
      {/* {getTitleBlock()}

      {subAssemblyView()} */}
    </Paper>
  )
}

class PartNumbering extends Component {
  render() {
    return <div>{getAssemblyView()}</div>
  }
}

export default PartNumbering
