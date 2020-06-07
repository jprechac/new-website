import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems } from '../../actions/items';

import Item from './Item';

export class Resume extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        return (
            <Fragment>
                <h2>Work Experience</h2>
                {this.props.items.map(item => (
                    <div key={item.id}>
                        <Item data={item} />
                    </div>
                ))}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items.items
});

export default connect(mapStateToProps, { getItems })(Resume);
