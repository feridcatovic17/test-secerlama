import {
    LOGIN_SUCCESS,
    LOGIN_PENDING,
    LOGIN_ERROR
} from '../actions/types';

const initState = {
    isPending: false,
    isSuccess: false,
    errors: null,
}

export default function userReducer(state = initState, action) {
    console.log("auth reducer")
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isSuccess: action.isSuccess
            };
        case LOGIN_PENDING:
            return {
                ...state,
                isPending: action.isPending
            };
        case LOGIN_ERROR:
            return {
                ...state,
                errors: action.errors
            };
        default:
            return state
    }
}