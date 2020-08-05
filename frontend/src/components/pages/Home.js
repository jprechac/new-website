import React, { Component } from 'react';

import Welcome from '../Welcome';
import Intro from '../Intro';

// Image locations
const louisianaImage = '/static/img/louisiana.jpg';
const revibeImage = '/static/img/revibe_logo_500x500.png';

class Home extends Component {
    // This document was copied and pasted almost verbatim from the old website code.
    // It probably should be updated to use React components & stuff.
    render() {
        return (
            <div className="container" style={{ fontSize: '1.2rem' }}>
                <Welcome />
                <Intro />
                <hr />

                {/* <div className="container-fluid" id="skills">
                        <div className="margin-bottom-md margin-top-lg">
                            <h1>Skills</h1>
                        </div>
                    </div> */}

                <div className="container-fluid" id="experience">
                    <div className="margin-bottom-md margin-top-lg">
                        <h1>Experience</h1>
                    </div>

                    <div className="margin-bottom-md" id="revibe">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={revibeImage} alt="Revibe logo" height="200px" width="200px" />
                            </div>
                            <div className="col-md">
                                <h3>
                                    <a style={revibeStyle} href="https://revibe.tech" target="_blank" title="Revibe">Revibe</a>
                                </h3>
                                <p className="text-muted">
                                    Revibe combines your Spotify and YouTube libraries so that you never have to interrupt
                                    your queue again. Check out the website
                                <span className="color-revibe">
                                        <a className="quiet-link" href="https://revibe.tech"
                                            target="_blank" title="Revibe"> here</a>.
                                </span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    As Revibe's Cloud Architect, I was responsible for the majority of the back-end and API
                                    development as well as all business intelligence solutions. I also played a major role in
                                    helping the company adapt a data-driven mindset, and created many of the datasets that drive
                                    strategic decisions.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="margin-bottom-md" id="louisiana">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={louisianaImage} alt="Louisiana logo" height="200px" width="200px" />
                            </div>
                            <div className="col-md">
                                <h3>
                                    <a style={louisianaStyle} href="https://www.doa.la.gov/Pages/ots/Index.aspx" target="_blank"
                                        title="LA Office of Technology Services">Louisiana Office of Technology Services</a>
                                </h3>
                                <p className="text-muted">
                                    Simply stated, OTS was legislatively created and charged with managing all IT systems and services for the Executive Department as efficiently and effectively as possible.
                                    Click
                                        <span className="color-louisiana">
                                        <a className="quiet-link" href="https://www.doa.la.gov/Pages/ots/Index.aspx" target="_blank"
                                            title="LA Office of Technology Services"> here </a>
                                    </span>
                                        to find out more on some of the early benefits OTS has produced.
                                    </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    At OTS I created a web application to track information on servers from across the state's
                                    IT infrastructure. I built the application using ASP.NET MVC, and the data was stored in an RDS
                                    instance in Amazon Web Services.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const louisianaStyle = {
    color: '#007299'
}
const revibeStyle = {
    color: '#7248bd'
}

export default Home;
