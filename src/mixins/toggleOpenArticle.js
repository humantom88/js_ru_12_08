export default {
    getInitialState() {
        return {
            openArticleId: null
        }
    },

    toggleOpenArticle(id) {
        return function (ev) {
            if (ev) ev.preventDefault()
            this.setState({
                openArticleId: id === this.state.openArticleId ? null : id
            })
        }.bind(this)
    }
}
