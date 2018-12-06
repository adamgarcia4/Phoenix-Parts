import Component from './Component'
import AttachUserAuth from '../../hoc/AttachUserAuth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../store/actions'

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      registerUser: actions.user.registerUser
    },
    dispatch
  )
}

export default connect(
  null,
  mapDispatchToProps
)(AttachUserAuth(Component))
