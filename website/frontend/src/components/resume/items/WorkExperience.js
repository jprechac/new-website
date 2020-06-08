import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkExperienceItems } from '../../../actions/items';

import WorkItem from './WorkItem';


class WorkExperience extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getWorkExperienceItems();
    }

    render() {
        return (
            <Fragment>
                <h2>Work Experience</h2>
                {this.props.items.map(item => (
                    <div key={item.id}>
                        <WorkItem item={item} />
                    </div>
                ))}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items.work_items
});

export default connect(mapStateToProps, { getWorkExperienceItems })(WorkExperience);
