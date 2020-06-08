import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEducationItems } from '../../../actions/items';

import EducationItem from './EducationItem';

class Education extends Component {
    componentDidMount() {
        this.props.getEducationItems();
    }

    get displayHTML() {
        const numberOfItems = this.props.items.length;
        var display;

        if (numberOfItems !== 0) {
            display = (
                <Fragment>
                    <div style={{ marginBottom: "10px" }}>
                        <h2>Education</h2>
                        {this.props.items.map(item => (
                            <div key={item.id}>
                                <EducationItem item={item} />
                            </div>
                        ))}
                    </div>
                </Fragment>
            )
        } else {
            display = (
                <Fragment></Fragment>
            )
        }

        return display;
    }

    render() {
        return this.displayHTML;
    }
}

const mapStateToProps = state => ({
    items: state.items.education_items
});

export default connect(mapStateToProps, { getEducationItems })(Education);
