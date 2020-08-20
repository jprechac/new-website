import React, { Component, Fragment } from 'react';

import DateFormatted from '../utils/Date';
import { connect } from 'react-redux';
import { getEducationItems } from '../../actions/items';

class EducationItem extends Component {
    render() {
        var { instituion_name, bullets, city, state, class_year, ...props } = this.props.item;
        var 

        return (
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{instituion_name}</h3>
                    <div className="subheading mb-3">{instituion_name}</div>
                    <ul>
                        {bullets.map(bullet => (
                            <li key={bullet.id}>{bullet.text}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex-shrink-0">
                    <span className="text-primary">
                        <DateFormatted date={start_date} /> - <DateFormatted date={end_date} />
                    </span>
                </div>
            </div>
        )
    }
}

class Education extends Component {
    componentDidMount() {
        this.props.getWorkExperienceItems();
    }

    render() {
        const numberOfItems = this.props.items.length;
        var items = (numberOfItems !== 0) ? (
            <div>
                {this.props.map(item => (
                    <div key={item.id}>
                        <EducationItem item={item} />
                    </div>
                ))}
            </div>
        ) : (<Fragment></Fragment>)

        return (
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2>Education</h2>
                    {items}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items.education_items
});

export default connect(mapStateToProps, { getEducationItems })(Education);
