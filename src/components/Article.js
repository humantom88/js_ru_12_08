import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import { deleteArticle } from '../AC/articles'

class Article extends Component {
    /*

     constructor() {
     super()
     this.state = {
     isOpen: false
     }
     }

     */
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const { article, article: { text, title, comments}, isOpen, toggleOpen } = this.props
        const body = isOpen ? <section>{text}<CommentList comments={comments} article={article} /></section> : null
        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                <a href = "#" onClick = {this.handleDelete}>delete article</a>
                {body}
            </div>
        )
    }

    handleDelete = ev => {
        if (ev) { ev.preventDefault() }
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }
}

export default connect(null, { deleteArticle })(Article)