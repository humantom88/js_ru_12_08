import React, { createClass, PropTypes } from 'react'
import Article from './Article'
import toggleOpenArticle from '../mixins/toggleOpenArticle'

const ArticleList = createClass({
    mixins: [toggleOpenArticle],

    propTypes: {
        articles: PropTypes.array
    },

    render() {
        const { articles } = this.props
        const { openArticleId } = this.state

        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                         isOpen = {openArticleId === articleObject.id}
                         toggleOpen = {this.toggleOpenArticle(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
})

export default ArticleList