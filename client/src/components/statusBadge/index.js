import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'
import statusUtils from '../../models/statusUtils'

class StatusBadge extends Component {
  render() {
    const settings = {}

    Object.keys(this.props).map(prop => {
      if (statusUtils.statusMap[prop]) {
        this.settings = statusUtils.statusMap[prop]
      }
    })

    return <Badge variant={this.settings.style || 'primary'}>{this.settings.display || 'Default Message'}</Badge>
  }
}

export default StatusBadge
