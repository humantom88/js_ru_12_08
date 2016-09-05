import { Record } from 'immutable'

export const ArticleModel = new Record({
    id: null,
    date: null,
    title: null,
    text: null,
    comments: []
})

export const CommentModel = new Record({
    id: '',
    user: '',
    text: ''
})