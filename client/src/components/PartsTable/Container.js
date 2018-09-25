import Component from './Component'
// import FirebaseListening from '../../hoc/FirebaseListening'
import { connect } from 'react-redux'
// import {
//   bindActionCreators
// } from 'redux'

// import {
//   withRouter
// } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  // Import anything from global state here
  // const {deskId} = state.auth
  // return {
  //   refPath: '/parts',
  // }
}

const mapDispatchToProps = dispatch => {
  return {}
  // return bindActionCreators({
  //   addPart,
  //   updatePartForm,
  //   getParts
  // }, dispatch)
}

const Container = Component

// const Container = withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Component)
// )

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Container)

export default Container
