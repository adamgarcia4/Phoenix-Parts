import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'

// import Fab from '../../ui/Fab'
import ExpansionPanel from '../../ui/ExpansionPanel'
import ExpansionContent from '../../ui/ExpansionContent'
import AvatarGroup from '../../ui/AvatarGroup'
import Avatar from '../../ui/Avatar'
import PartsTable from '../PartsTable'
import Paper from '../../ui/Paper'
// import Tooltip from '../../ui/Tooltip'
// import actions from '../../store/actions'

const PartTableContainer = styled.div`
  margin: 0px 10px 100px 10px;
`

const AvatarGroupWrapper = styled(AvatarGroup) `
margin-right: 30px;
`

class Dashboard extends Component {
  addNewPart = () => {
    const { history } = this.props
    history.push('/parts')
  }

  getFabButton = () => {
    const FabPosition = styled.div`
      position: fixed;
      bottom: 30px;
      right: 30px;
    `

    return (
      <FabPosition>
        <Button
          variant="fab"
          color="primary"
          onClick={this.addNewPart}>
          <AddIcon />
        </Button>
      </FabPosition>
    )
  }


  render() {
    return (
      <div>
        <h1>Parts Dashboard</h1>

        <ExpansionPanel
          summary={
            <React.Fragment>
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
            </React.Fragment>
          }
          expansion={
            <React.Fragment>
              hii
            </React.Fragment>
          }
        />
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

Dashboard.propTypes = {
  history: PropTypes.any
}

// Dashboard.propTypes = {
//   // addPart: PropTypes.func.isRequired,
//   // classes: PropTypes.object.isRequired
// }

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard))
