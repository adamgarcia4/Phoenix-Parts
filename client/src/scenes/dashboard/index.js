import React, { Component } from 'react'
import PartsTable from '../../components/PartsTable'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPart } from '../../store/actions'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addPart('test')
  }

  state = {}

  render() {
    return (
      <div>
        <h1>Dashboard Page</h1>
        <PartsTable />

        <Button
          variant="fab"
          style={{ position: 'absolute', bottom: '50px', right: '50px' }}
          color={'primary'}
          onClick={this.handleClick}
        >
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

export default connect(
  null,
  mapDispatchToProps
)(Dashboard)
