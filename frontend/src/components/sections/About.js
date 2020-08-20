import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Jordan <span className="text-primary">Prechac</span>
                    </h1>
                    <div className="subheading mb-5">
                        <a href="mailto:jprechac@gmail.com">jprechac@gmail.com</a>
                    </div>
                    <p class="lead mb-5">I am an API developer and AWS-certified cloud engineer. I am experienced in creating RESTful APIs as microservices and deploying these services using the AWS cloud.</p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/jordanprechac/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/jprechac"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="https://twitter.com/jordan_prechac"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
