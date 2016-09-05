import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { List } from 'immutable'
import { ArticleModel } from './models'

const immutableArticles = new List(normalizedArticles.map(article => new ArticleModel(article)))

export default (articles = immutableArticles, action) => {
    const { type, payload, commentId, comments, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(rec => rec.get('id') !== payload.id).toList()

        case ADD_COMMENT:
            const newArticles = articles.updateIn([articles.findKey((article) => article.id === payload.articleId), 'comments'], comments => comments.concat(commentId))
            return newArticles
    }

    return articles
}