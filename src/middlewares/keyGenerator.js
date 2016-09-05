export default store => next => action => {
    next(Object.assign({}, action, { commentId: Math.random() }))
}