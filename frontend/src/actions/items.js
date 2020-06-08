import axios from 'axios';

import { GET_ITEMS, GET_EDUCATION_ITEMS, GET_VOLUNTEER_EXPERIENCE_ITEMS, GET_WORK_EXPERIENCE_ITEMS } from './types';

const url = '/api/resume/items/';

// GET RESUME
export const getItems = () => dispatch => {
    axios.get(url)
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const getWorkExperienceItems = () => dispatch => {
    const urlParams = {
        section: 'work-experience'
    }
    axios.get(url, {
        params: urlParams
    })
        .then(res => {
            dispatch({
                type: GET_WORK_EXPERIENCE_ITEMS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const getEducationItems = () => dispatch => {
    const urlParams = {
        section: 'education'
    };
    axios.get(url, {
        params: urlParams
    })
        .then(res => {
            dispatch({
                type: GET_EDUCATION_ITEMS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};
