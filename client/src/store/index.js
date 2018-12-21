import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'

import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

// https://redux.js.org/advanced/middleware
const logger = store => next => action => {
  console.groupCollapsed(`Logging Action: ${action.type}`)
  console.log('dispatching', action)
  console.log('current state', store.getState())
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)))

sagaMiddleware.run(sagas)

export default store
