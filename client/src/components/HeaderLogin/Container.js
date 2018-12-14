import Component from './Component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../store/actions'

const mapStateToProps = state => {
  console.log('state:', state)
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      registerUser: actions.user.registerUser
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
