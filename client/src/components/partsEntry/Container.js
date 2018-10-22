import Component from './Component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPart, updatePartForm, getParts } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    partEdit: state.partEdit
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addPart,
      updatePartForm,
      getParts
    },
    dispatch
  )
}

const Container = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
)

export default Container
