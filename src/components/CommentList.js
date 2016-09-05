import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentCount from './CommentCount'
import { addComment } from '../AC/comments'
import { NewComment } from './NewComment'
import { connect } from 'react-redux'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        article: PropTypes.object
    }

    /*
     componentDidMount() {
     console.log('---', 'mounted')
     }

     componentWillUnmount() {
     console.log('---', 'unmounting')
     }

     componentWillReceiveProps() {
     console.log('---', 'updating')
     }
     */

    render() {
        const { comments, isOpen, toggleOpen, addComment, article} = this.props

        if (!comments || !comments.length) return <p>No comments yet</p>
        const toggleButton = <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments.
            <CommentCount count = {comments.length}/>
        </a>

        if (!isOpen) return <div>{toggleButton}</div>

        const commentItems = comments.map(commentId => <li key = {commentId}><Comment commentId = {commentId} /></li>)

        return (
            <div>
                {toggleButton}
                <ul>{commentItems}</ul>
                <NewComment addComment={addComment} articleId={article.id} />
            </div>
        )
    }
}

export default connect(null, { addComment } )( toggleOpen(CommentList) )