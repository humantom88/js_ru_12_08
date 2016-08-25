import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
/*import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'*/
import { findDOMNode } from 'react-dom'
import DateRangePicker from './DateRangePicker'

class Container extends Component {
    static propTypes = {

    }

    /*state = {
        selected: null,
        selectedDateRange: null
    }*/

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                {/*<Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>*/}
                <DateRangePicker />
                <ArticleList articles = {this.props.articles} />
                {/*<JqueryComponent items = {this.props.articles} ref={this.getJQ}/>*/}
            </div>
        )
    }
    
    /*getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }*/

    /*handleChange = (selected) => {
        this.setState({
            selected
        })
    }*/
}

export default Container