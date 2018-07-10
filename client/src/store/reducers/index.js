import { combineReducers } from 'redux'
import PartReducer from './parts'
import UserReducer from './user'
import partEditReducer from './partEdit'

const rootReducer = combineReducers({
  parts: PartReducer,
  user: UserReducer,
  partEdit: partEditReducer
})

export default rootReducer
