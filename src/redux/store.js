import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const midddlewares = [logger]

const store = createStore(
  rootReducer,
  applyMiddleware(...midddlewares) + window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
