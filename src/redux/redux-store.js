import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import quizReducer from './quiz-reducer'

const reducers = combineReducers({
  // quizState: quizReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

export default store

// window.store = store
