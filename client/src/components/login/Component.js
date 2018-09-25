import React, { Component } from 'react'
import firebase from '../../modules/firebase'
import TextField from '../../ui/textField'
import { Formik } from 'formik'
import * as Yup from 'yup'

import faker from 'faker'

const initialValues = {
  username: 'adamgarcia',
  email: `u${faker.random.number({ min: 1, max: 100000 })}@ucla.edu`,
  passwordone: 'Grimmick15',
  passwordtwo: '',
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/phoenix-parts-8eeea.appspot.com/o/adamimage.jpeg?alt=media&token=d74a704e-d87a-45cd-9479-2bf80b4a48eb',
  displayName: 'Adam Garcia'
}

class LoginForm extends Component {
  getForm = () => {
    const onSubmit = (values, formikBag) => {
      console.log('Submit!')
      const { history } = this.props

      console.log('values:', values)

      firebase.auth
        .doCreateUserWithEmailAndPassword(values.email, values.passwordone)
        .then(userObj => {
          userObj.user
            .updateProfile({
              displayName: values.displayName,
              photoURL: values.photoUrl
            })
            .then(_ => {
              // console.log('userObj:', userObj)
            })
            .catch(err => {
              console.log('err in Updating Profile:', err)
            })
        })
        .catch(err => {
          console.log('err:', err)
        })
    }

    const validateForm = values => {
      console.log('validate', values)
      // TODO: Fully Validate object
      return Yup.object().shape({
        username: Yup.string().required('Username is Required')
      })
    }

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateForm}
        render={({
          values,
          handleChange,
          handleSubmit
          // errors,
          // touched,
          // handleBlur,
          // isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField name="username" label="Username" value={values.username} onChange={handleChange} />

            <TextField name="email" label="Email" value={values.email} onChange={handleChange} />

            <TextField
              name="password"
              label="Password"
              value={values.passwordone}
              onChange={handleChange}
              type="password"
            />

            <button type="submit"> Submit </button>
          </form>
        )}
      />
    )
  }
  // signup
  // onSubmit = event => {
  //   event.preventDefault()
  //   const {
  //     username,
  //     email,
  //     passwordOne
  //   } = this.state

  //   const {history} = this.props

  //   firebase.auth.doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {
  //     console.log('authUser:', authUser)
  //     history.push('/')
  //   })
  //   .catch(err => {
  //     // TODO: Toaster
  //     console.log('Firebase Error')
  //     console.log('err:', err)
  //   })
  // }

  render() {
    return this.getForm()
  }
}

export default LoginForm
