import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMachine } from '../../store/actions/index'
import SimpleExpansionPanel from '../../ui/simplePanelAccordion'

const machineList = [
  {
    id: 1,
    name: 'CNC Mill',
    body: `              This is the schedule for the CNC mill. Vroom vroom, it is very
    hard at work making your robit!`,
    secondaryHeading: 'HII'
  },
  {
    id: 2,
    name: 'CNC Lathe',
    body: `This machine isnt that busy mostly`,
    secondaryHeading: 'THIS IS A BUTTON'
  }
]

class ProcessPicker extends Component {
  addMachinePart = processName => {
    const {addMachine} = this.props
    
    addMachine(processName)
  }

  render() {
    const machinePanels = machineList.map(details => {
      return (
        <SimpleExpansionPanel
          header={details.name}
          body={details.body}
          buttons={['Cancel', 'Save']}
          onSubmit={() => {
            this.addMachinePart(details.name)
          }}
          key={details.name}
        />
      )
    })

    return <div>{machinePanels}</div>
  }
}

ProcessPicker.propTypes = {
  addMachine: PropTypes.func
}

// function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // return {
    // parts: state.parts
  // }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMachine }, dispatch)
}

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(ProcessPicker)
