import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { addPart } from '../../store/actions'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Fab from '../../ui/Fab'
import PartsTable from '../../components/PartsTable'
import styled from 'styled-components'
import Paper from '../../ui/Paper'

const PartTableContainer = styled.div`
  margin: 0px 10px 100px 10px;
`

const styles = {
  buttonStyle: {
    position: 'fixed',
    bottom: '30px',
    right: '30px'
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addPart('test')
  }

  render() {
    return (
      <div>
        <h1>Parts Dashboard</h1>
        <Fab>
          <AddIcon />
        </Fab>
        <Paper>
          <PartTableContainer>
            <PartsTable />
          </PartTableContainer>
        </Paper>

        <Button variant="fab" className={this.props.classes.buttonStyle} color={'primary'} onClick={this.handleClick}>
          <AddIcon />
        </Button>
      </div>
    )
  }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ addPart }, dispatch)
  return {}
}

const styledDashboard = withStyles(styles)(Dashboard)

export default connect(
  null,
  mapDispatchToProps
)(styledDashboard)

// export default withStyles(styles)(LetterAvatars)
