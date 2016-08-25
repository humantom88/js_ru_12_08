import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'
import 'react-day-picker/lib/style.css';

export default class DateRangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    state = {
        from: null,
        to: null
    };

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    }

    render() {
        const { from, to } = this.state;
        return (
            <div className="RangeExample">
                <DayPicker
                    ref="daypicker"
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                { !from && !to && <p>Выберите дату начала диапазона.</p> }
                { from && !to && <p>Выберите конечную дату.</p> }
                { from && to &&
                <p>
                    Выбран диапазон дат от { moment(from).format('L') } до { moment(to).format('L') }.
                    { ' ' }<a href="#" onClick={ this.handleResetClick }>Сбросить</a>
                </p>
                }
            </div>
        );
    }

}