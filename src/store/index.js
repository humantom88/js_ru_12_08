import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import keyGenerator from '../middlewares/keyGenerator'

const enhancer = compose(
    applyMiddleware(logger, keyGenerator),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store