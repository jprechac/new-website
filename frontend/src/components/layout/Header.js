import React, { Component } from 'react';

export class Header extends Component {
    render() {
        const navStyle = {
            marginBottom: '5px'
        }
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={navStyle}>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">Jordan Prechac</a>

                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {/* extra stuff */}
                            <li className="nav-item">
                                <a className='nav-link' title="Resume" href='/resume'>Resume</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/jordanprechac/" title="LinkedIn" target="_blank">LinkedIn</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
