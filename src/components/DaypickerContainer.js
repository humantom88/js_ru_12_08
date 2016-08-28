import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { setDateFilterFrom } from '../AC/filter'
import { setDateFilterTo } from '../AC/filter'

class Daypicker extends Component {
    static propTypes = {
        from: PropTypes.object,
        to: PropTypes.object
    };

    render() {
        return (
            <div>
                <DayPicker
                    ref="daypicker"
                    selectedDays={this.handleSelect}
                    onDayClick={this.handleDayClick}
                />
                {this.getRangeTitle()}
            </div>
        )
    }

    handleSelect = day => DateUtils.isDayInRange(day, this.props)
    getRangeTitle() {
        const { from, to } = this.props
        const fromText = from && `Start date: ${from.toDateString()}`
        const toText = to && `Finish date: ${to.toDateString()}`

        return <p>{fromText} {toText}</p>
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.props);
        const { from, to } = range
        if (from) { this.props.setDateFilterFrom(from) }
        if (to) { this.props.setDateFilterTo(to) }
    }
}

export default connect(null, { setDateFilterFrom, setDateFilterTo })(Daypicker)