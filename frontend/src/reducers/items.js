import { GET_ITEMS, GET_EDUCATION_ITEMS, GET_WORK_EXPERIENCE_ITEMS, GET_VOLUNTEER_EXPERIENCE_ITEMS } from '../actions/types.js';

const initialState = {
    items: [],
    work_items: [],
    education_items: [],
    volunteer_items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        case GET_EDUCATION_ITEMS:
            return {
                ...state,
                education_items: action.payload
            };
        case GET_WORK_EXPERIENCE_ITEMS:
            return {
                ...state,
                work_items: action.payload
            };
        case GET_VOLUNTEER_EXPERIENCE_ITEMS:
            return {
                ...state,
                volunteer_items: action.payload
            }
        default:
            return state;
    }
}

