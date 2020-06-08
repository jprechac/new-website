import React, { Component } from 'react';
import { rightAlignStyle } from '../../../styles/item';

class EducationItem extends Component {
    render() {
        var data = this.props.item;

        const institutionNameStyle = {
            margin: "0px"
        }

        return (
            <div className="row">
                <div className="col-sm">
                    <h5 style={institutionNameStyle}>{data.institution_name}</h5>
                    <i>{data.city}, {data.state}</i>
                    <div className="container-fluid">
                        {data.bullets.map(bullet => (
                            <div key={bullet.id}>{bullet.text}</div>
                        ))}
                    </div>
                </div>

                <div className="col-sm-3 text-right">
                    <div style={{ fontWeight: "bold" }}>{data.class_year}</div>
                    <div>GPA: {data.gpa}</div>
                </div>
            </div>
        )
    }
}

export default EducationItem;
