export default store => next => action => {
    //ок, но не надо всем екшинам подрят прописывать commentId
    next(Object.assign({}, action, { commentId: Math.random() }))
}
