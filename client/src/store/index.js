import { createStore } from 'redux'
import rootReducer from './reducers/index'
import { addArticle } from './actions'

const store = createStore(rootReducer)

export default store
