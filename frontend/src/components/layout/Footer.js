import React, { Component } from 'react';


class Footer extends Component {
    render() {
        const currentYear = new Date().getUTCFullYear();
        return (
            <div className="container text-muted">
                &copy; Jordan Prechac, {currentYear}
                <br />
                <a href="https://www.linkedin.com/in/jordanprechac/" title="LinkedIn" target="_blank">LinkedIn</a>
                <br />
                <a href="https://github.com/jprechac" title="GitHub" target="_blank">GitHub</a>
                <br />
                <a href="mailto:jprechac@gmail.com" title="jprechac@gmail.com">Email</a>
            </div>
        )
    }
}

export default Footer;


