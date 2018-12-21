import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

injectGlobal`
    body {
        font-family: 'Roboto', sans-serif;
    }
`

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') //eslint-disable-line
)
registerServiceWorker()
