import React, { Component } from 'react';
import DateFormatted from '../../utils/Date';

class WorkItem extends Component {
    render() {
        var data = this.props.item;
        return (
            <div className="row">
                <div className="col-sm">
                    <h5>{data.title}</h5>
                    <i>{data.institution_name}</i>
                    <ul>
                        {data.bullets.map(bullet => (
                            <li key={bullet.id}>{bullet.text}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-sm-3 text-right">
                    <b><DateFormatted date={data.start_date} /> - <DateFormatted date={data.end_date} /></b>
                    <br />
                    <i>{data.city}, {data.state}</i>
                </div>
            </div>
        )
    }
}

export default WorkItem;
