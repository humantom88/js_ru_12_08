import {  } from '../constants'
import { normalizedComments } from '../fixtures'
import { List } from 'immutable'
import { CommentModel } from './models'
import { ADD_COMMENT } from '../constants'

const immutableComments = new List(normalizedComments.map(comment => new CommentModel(comment)))

export default (comments = immutableComments, action) => {
    const { type, payload, commentId, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.push([commentId], new CommentModel({...payload, id: commentId}))
    }

    return comments
}