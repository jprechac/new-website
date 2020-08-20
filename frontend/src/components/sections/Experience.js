import React, { Component, Fragment } from 'react';

import DateFormatted from '../utils/Date';
import { connect } from 'react-redux';
import { getWorkExperienceItems } from '../../actions/items';

class ExperienceItem extends Component {
    render() {
        var { title, instituion_name, bullets, city, state, start_date, end_date, ...props } = this.props.item;

        return (
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{title}</h3>
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

class Experience extends Component {
    componentDidMount() {
        this.props.getWorkExperienceItems();
    }

    render() {
        const numberOfItems = this.props.items.length;
        var items = (numberOfItems !== 0) ? (
            <div>
                {this.props.map(item => (
                    <div key={item.id}>
                        <ExperienceItem item={item} />
                    </div>
                ))}
            </div>
        ) : (<Fragment></Fragment>)

        return (
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2>Work Experience</h2>
                    {items}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items.work_items
});

export default connect(mapStateToProps, { getWorkExperienceItems })(Experience);
