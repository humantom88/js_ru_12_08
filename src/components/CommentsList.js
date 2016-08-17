import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {
    constructor () {
        super()
        this.state = {
            isOpen: false
        }

        this.handleClick = this.handleClick.bind(this)
    }
    render () {
        const commentsItems = this.props.comments ? this.props.comments.map((comment) => <Comment key={comment.id} comment={comment} />) : null
        const hideComments = 'hide comments'
        const showComments = 'show comments'

        return (
            <div>
                <h4 onClick={this.handleClick}>{ this.state.isOpen ? hideComments : showComments}</h4>
                {this.state.isOpen ? commentsItems : null}
            </div>
        )
    }

    handleClick (event) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}