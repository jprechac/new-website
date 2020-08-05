import React, { Component } from 'react';

import IntroImage from './IntroImage';

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
            </div>
        );
    }
}
 
export default Intro;