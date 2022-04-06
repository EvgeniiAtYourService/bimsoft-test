import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users-reducer'

const reducers = combineReducers({
  usersState: usersReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof reducers>

export default store
