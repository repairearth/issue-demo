import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'
import trader, {genesis, terminator} from 'redux-async-promise'
import reducers from './reducers'

const middlewares = [genesis, trader, terminator]
let finalCreateStore

if (__DEBUG__) {
  finalCreateStore = applyMiddleware(...middlewares, logger())(createStore)
} else {
  finalCreateStore = applyMiddleware(...middlewares)(createStore)
}

const store = finalCreateStore(reducers)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers')
    store.replaceReducer(nextRootReducer)
  })
}

export { store }
