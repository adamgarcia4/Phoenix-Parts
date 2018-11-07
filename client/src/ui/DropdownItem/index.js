import React, { Component } from 'react'
import './Styles.css'

class DropdownItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  // fat arrow means that THIS isn't reassigned
  clicked = () => {
    this.setState((state, props) => {
      return {
        expanded: !state.expanded
      }
    })
  }

  render() {
    const { expanded } = this.state
    return (
      <div>
        <span className="row machine-item">
          <button onClick={this.clicked} />
          6061 T6 Aluminum
        </span>
        {expanded ? <span className="row machine-item">lasjdf</span> : null}
      </div>
    )
  }
}

export default DropdownItem
