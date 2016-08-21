import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

export default class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array,
        openArticleId: PropTypes.string,
        toggleOpenArticle: PropTypes.func
    }

    render() {
        const { articles, openArticleId, toggleOpenArticle } = this.props

        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                         isOpen = {openArticleId === articleObject.id}
                         toggleOpen = {toggleOpenArticle(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default toggleOpenArticle(ArticleList)