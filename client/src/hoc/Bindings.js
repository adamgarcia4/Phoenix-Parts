import React, { Component } from 'react'
import firebase from '../modules/firebase'

const bindingHOC = WrappedComponent => {
  return class BindingHOC extends Component {
    componentDidMount() {
      // to attach user, if there is a user ID, then set up listening

      // first, let's just do the parts one

      firebase.rebase.listenTo('parts', {
        context: this,
        asArray: true,
        then(newData) {
          console.log('newData:', newData)
          // set state
        }
      })

      firebase.auth.default.onAuthStateChanged(user => {
        if (!user) {
          return
        }
      })
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default bindingHOC
