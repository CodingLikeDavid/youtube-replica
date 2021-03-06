import {SEARCH} from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case SEARCH:
            return {...state, term: action.term, videos: action.payload};
        default:
            return state;
    }
}