import { combineReducers } from 'redux'
import PartReducer from './parts'
import UserReducer from './user'
const rootReducer = combineReducers({
  parts: PartReducer,
  user: UserReducer
})

export default rootReducer
