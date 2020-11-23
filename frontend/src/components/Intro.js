import React, { Component } from 'react';

function IntroImage(props) {
    const headshot = '/static/img/headshot.jpg';
    return (
        <div className="col-md-auto">
            <img style={{ borderRadius: "30%" }} src={headshot} alt="Jordan's headshot"
                height="200px" width="200px" />
        </div>
    );
}

function IntroText() {
    return (
        <div className="col-md">
            <p>
                Hello, my name is Jordan Prechac. I am a developer with over a year of experience building
                web services, APIs, and microservices using Python, Django, &amp; Django Rest Framework. I
                also have some experience with Javascript in React and Node, and C# in ASP.NET and Unity.
                <br /> <br />
                I am also an AWS Cloud Practicioner, and have configured multiple backend and frontend applications
                to run in Amazon Web Services, including static websites and microservice applications from scratch using
                ECS, ECR, Fargate, API Gateway, S3, and Aurora, with CI/CD with CodeCommit, CodeBuild, and CodePipeline.
            </p>
        </div>
    )
}

class Intro extends Component {
    render() { 
        return (
            <div className="container-fluid" id="intro" style={{ fontSize: '1.3rem' }}>
                <div className="row">
                    <IntroImage />
                    <IntroText />
                </div>
                <p>
                    If you would like to get in touch, please connect with/message me on <a
                        href="https://www.linkedin.com/in/jordanprechac/" title="LinkedIn"
                        target="_blank">LinkedIn</a>.
                </p>
                <div class="alert alert-info" role="alert">
                    I am also available for freelance development and cloud engineering work on <a href="https://www.upwork.com/o/profiles/users/~0113a8981b0f9806e2/" title="Upwork" target="_blank">Upwork</a> and <a href="https://www.fiverr.com/jordanprechac" title="Fiverr" target="_blank">Fiverr</a>. If you need someone with skills in Python, REST API development, AWS, or any combination of these, please let me know!
                </div>
            </div>
        );
    }
}
 
export default Intro;