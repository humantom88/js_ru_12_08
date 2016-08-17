import React, { Component } from 'react'
import CommentsList from './CommentsList'

export default class Article extends Component {
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props
        const { comments } = article ? article : null

        const body = <div>
            <section>{article.text}</section>
            <CommentsList comments={comments} />
        </div>

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.state.isOpen ? body : null}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}