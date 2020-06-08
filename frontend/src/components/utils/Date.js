import React, { Component } from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June", "Juy", "August", "September", "October", "November", "December"]

class DateFormated extends Component {
    render() {
        var date = this.props.date;
        var value;
        if (date === null) {
            value = "Present";
        } else {
            date = new Date(date);
            value = monthNames[date.getUTCMonth()] + " " + date.getUTCFullYear();
        }

        return (
            <span>{value}</span>
        )
    }
}

export default DateFormated;
