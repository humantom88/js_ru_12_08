import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleOpenItem from '../decorators/toggleOpenItem'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array,
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func
    }

    render() {
        const { articles, openItemId, toggleOpenItem } = this.props

        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                         isOpen = {openItemId === articleObject.id}
                         toggleOpen = {toggleOpenItem(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default toggleOpenItem(ArticleList)