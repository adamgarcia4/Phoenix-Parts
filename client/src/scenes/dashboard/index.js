import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {
  withRouter
} from 'react-router-dom'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'
import { addPart } from '../../store/actions'
import Fab from '../../ui/Fab'
import PartsTable from '../../components/PartsTable'
import Paper from '../../ui/Paper'

const PartTableContainer = styled.div`
  margin: 0px 10px 100px 10px;
`

class Dashboard extends Component {
  constructor(props) {
    super(props)

    // this.handleClick = this.handleClick.bind(this)
  }

  addNewPart = () => {
    this.props.history.push('/parts')
  }

  getFabButton = () => {
    const FabPosition = styled.div`
      position: fixed;
      bottom: 30px;
      right: 30px;
    `

    return (
      <FabPosition>
        <Button variant="fab" color="primary" onClick={this.addNewPart}>
          <AddIcon />
        </Button>
      </FabPosition>
    )
  }

  render() {
    // const { classes: { buttonStyle } = {} } = this.props

    return (
      <div>
        <h1>Parts Dashboard</h1>
        <Paper>
          <PartTableContainer>
            <PartsTable />
          </PartTableContainer>
        </Paper>
        {this.getFabButton()}
      </div>
    )
  }
}

// Dashboard.propTypes = {
//   // addPart: PropTypes.func.isRequired,
//   // classes: PropTypes.object.isRequired
// }

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ addPart }, dispatch)
}

const styledDashboard = Dashboard
// const styledDashboard = withStyles(styles)(Dashboard)

// export default connect(
//   null,
//   mapDispatchToProps
// )(styledDashboard)
export default withRouter(Dashboard)

// export default withStyles(styles)(LetterAvatars)
