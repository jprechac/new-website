import React, { Component, Fragment } from 'react';

import Education from '../resume/items/Education';
import WorkExperience from '../resume/items/WorkExperience';
import VolunteerExperience from '../resume/items/VolunteerExperience';

export class Resume extends Component {
    render() {
        return (
            <Fragment>
                <Education />
                <WorkExperience />
                <VolunteerExperience />
            </Fragment>
        )
    }
}

export default Resume;
