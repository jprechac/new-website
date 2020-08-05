import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div id="welcome" style={WelcomeStyle}>
                <h2>Welcome!</h2>
            </div>
        )
    }
}

const WelcomeStyle = {
    textAlign: 'center',
    color: 'gray',
    paddingTop: '5px',
    paddingBottom: '10px'
}

export default Welcome;
