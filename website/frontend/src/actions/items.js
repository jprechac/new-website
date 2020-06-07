import axios from 'axios';

import { GET_ITEMS } from './types';

// GET RESUME
export const getItems = () => dispatch => {
    axios.get('/api/resume/items/')
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};
