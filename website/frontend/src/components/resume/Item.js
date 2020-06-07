import React, { Component } from 'react';
import DateFormatted from '../utils/Date';

class Item extends Component {

    render() {
        var data = this.props.data;
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
                <div className="col-sm-3">
                    <b><DateFormatted date={data.start_date} /> - <DateFormatted date={data.end_date} /></b>
                    <br />
                    <i>{data.city}, {data.state}</i>
                </div>
            </div>
        )
    }
}

export default Item;
