import React, { Component } from 'react'
import ComponentFile from './Component'
import firebase from '../../modules/firebase'

const AttachUserAuth = WrappedComponent => {
  return class AttachUserAuth extends Component {
    state = {
      user: null
    }

    componentDidMount() {
      firebase.auth.default.onAuthStateChanged(user => {
        // not signed in
        if (!user) {
          // console.log('not signed in')
          return
        }

        // console.log('signed inasdfasdf!')
        // console.log('user:', user)
        this.setState((state, props) => {
          return { user }
        })

        return
      })
    }

    render() {
      const { user } = this.state

      // const newProps = Object.assign({}, this.props, { user })
      // console.log('newPropss:', newProps)
      // return React.createElement(WrappedComponent, this.props, null)
      return <WrappedComponent {...this.props} user={user} />
    }
  }
}

export default AttachUserAuth(ComponentFile)
