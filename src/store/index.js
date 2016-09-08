import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
//import logger from '../middlewares/logger'
import createLogger from 'redux-logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const logger = createLogger({
    predicate: (getState, action) => {}
});
const enhancer = compose(
    applyMiddleware(thunk, api, randomId, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store