import React, { Component } from 'react'

require('./style.css')

export default class Pill extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="button">{this.props.children}</div>
  }
}
