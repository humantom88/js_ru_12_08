import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        const { comment } = this.props
        const body = <section>{comment.text}</section>

        return (
            <div>
                <h5>{comment.user}</h5>
                {body}
            </div>
        )
    }
}
