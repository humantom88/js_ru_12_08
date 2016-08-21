import React from 'react'

export default (Component) => {
    return class ToggleOpenComponent extends React.Component {
        state = {
            openArticleId: null
        }

        toggleOpenArticle = id => ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openArticleId: id === this.state.openArticleId ? null : id
            })
        }

        render() {
            return <Component {...this.props} openArticleId = {this.state.openArticleId} toggleOpenArticle = {this.toggleOpenArticle}/>
        }
    }
}