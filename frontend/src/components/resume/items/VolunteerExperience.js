import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getVolunteerExperienceItems } from '../../../actions/items';

import VolunteerItem from './VolunteerItem';


class VolunteerExperience extends Component {
    componentDidMount() {
        this.props.getVolunteerExperienceItems();
    }

    get displayHTML() {
        const numberOfItems = this.props.items.length;
        var display;

        if (numberOfItems !== 0) {
            // there are items to display
            display = (
                <Fragment>
                    <h2>Volunteer Experience</h2>
                    {this.props.items.map(item => (
                        <div key={item.id}>
                            <VolunteerItem item={item} />
                        </div>
                    ))}
                </Fragment>
            )
        } else {
            display = <Fragment></Fragment>
        }

        return display;
    }

    render() {
        return this.displayHTML;
    }
}

const mapStateToProps = state => ({
    items: state.items.volunteer_items
});

export default connect(mapStateToProps, { getVolunteerExperienceItems })(VolunteerExperience);
