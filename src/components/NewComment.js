import React, { Component, PropTypes } from 'react'

export class NewComment extends Component {
    static propTypes = {
        user: PropTypes.string,
        id: PropTypes.string,
        articleId: PropTypes.string,
        addComment: PropTypes.func
    }

    state = {
        user: 'Аноним',
        text: ''
    }

    handleChangeUsername = (ev) => {
        if (ev) { ev.preventDefault() }
        const target = ev.target
        this.setState({
            user: target.value
        })
    }

    handleChangeComment = (ev) => {
        if (ev) { ev.preventDefault() }
        const target = ev.target
        this.setState({
            text: target.value
        })
    }

    handleSubmit = ev => {
        if (ev) { ev.preventDefault() }
        const { articleId, addComment } = this.props
        const { text, user } = this.state

        addComment({text, user}, articleId)
    }

    render() {
        const { text, user } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="user" onChange={this.handleChangeUsername} value={user} placeholder="Введите имя пользователя"/><br />
                    <textarea name="text" onChange={this.handleChangeComment} value={text} placeholder="Введите комментарий"/><br />
                    <input type="submit" value={'Добавить комментарий'}/>
                </form>
            </div>
        )
    }
}