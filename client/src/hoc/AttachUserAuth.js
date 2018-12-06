import React, { Component } from 'react'

import firebase from '../modules/firebase'

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
      return <WrappedComponent {...this.props} user={user} />
    }
  }
}

export default AttachUserAuth
