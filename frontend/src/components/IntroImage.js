import React, { Component } from 'react';

const headshot = '/static/img/headshot.jpg';

class IntroImage extends Component {
    render() {
        return (
            <div className="col-md-auto">
                <img style={{ borderRadius: "30%" }} src={headshot} alt="Jordan's headshot"
                    height="200px" width="200px" />
            </div>
        );
    }
}

export default IntroImage;
