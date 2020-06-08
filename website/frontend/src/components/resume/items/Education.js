import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEducationItems } from '../../../actions/items';

import EducationItem from './EducationItem';

class Education extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getEducationItems();
    }

    render() {
        console.log("Education props", this.props.items);
        return (
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
    }
}

const mapStateToProps = state => ({
    items: state.items.education_items
});

export default connect(mapStateToProps, { getEducationItems })(Education);
