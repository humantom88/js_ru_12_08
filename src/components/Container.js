import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import DaypickerContainer from './DaypickerContainer'
import Counter from './Counter'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import moment from 'moment'

class Container extends Component {
    static propTypes = {
        setDateFilterFrom: PropTypes.func,
        setDateFilterTo: PropTypes.func,
        articles: PropTypes.array,
        from: PropTypes.object,
        to: PropTypes.object
    };

    defaultProps = {
        from: null,
        to: null
    }

    state = {
        selected: null
    }
    
    getFilteredArticles (articles, from, to) {
        if (!from && !to) return articles;
        if (from !== null && to !== null) {
            return articles.filter(article => {
                let articleDate = moment(article.date)
                if (articleDate.isSameOrAfter(from) && articleDate.isSameOrBefore(to)) return true;
                return false
            })
        } else if (from !== null) {
            return articles.filter(article => {
                let articleDate = moment(article.date)
                if (articleDate.isSameOrAfter(from)) return true;
                return false
            })
        } else if (to !== null) {
            return articles.filter(article => {
                let articleDate = moment(article.date)
                if (articleDate.isSameOrBefore(to)) return true;
                return false
            })
        }

        return null;
    }

    render() {
        const { from, to } = this.props.filter
        const articles = this.getFilteredArticles(this.props.articles, from, to)
        const options = articles.map(article => article ? ({
            label: article.title,
            value: article.id
        }) : null)

        return (
            <div>
                <Counter />
                <ArticleList articles = {articles} />
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>
                <DaypickerContainer from = { from } to = { to } />
                <JqueryComponent items = {this.props.articles} ref={this.getJQ}/>
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

export default connect((state) => {
        const { articles, filter } = state
        return { articles, filter }
    }
)(Container)